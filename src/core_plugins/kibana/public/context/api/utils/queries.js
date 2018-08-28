function createAnchorQueryBody(uid, contextSort) {
  return {
    _source: true,
    version: true,
    query: {
      terms: {
        _uid: [uid],
      },
    },
    sort: [ contextSort, { _uid: 'asc' } ],
  };
}

function createSuccessorsQueryBody(source, anchorSortValues, contextSort, size) {
  if (source.kubernetes && source.kubernetes.pod_name) {
    return {
      _source: true,
      version: true,
      query: {
        'bool': {
          'must': [{
            'match': {
              'kubernetes.pod_name': {
                'query': source.kubernetes.pod_name,
                'type': 'phrase'
              }
            }
          }],
          'must_not': []
        }
      },
      size,
      sort: [ contextSort, { _uid: 'asc' } ],
      search_after: anchorSortValues,
    };
  } else if (source.hostip) {
    return {
      _source: true,
      version: true,
      query: {
        'bool': {
          'must': [{
            'match': {
              'hostip': {
                'query': source.hostip,
                'type': 'phrase'
              }
            }
          }],
          'must_not': []
        }
      },
      size,
      sort: [ contextSort, { _uid: 'asc' } ],
      search_after: anchorSortValues,
    };
  } else if (source.node_name) {
    return {
      _source: true,
      version: true,
      query: {
        'bool': {
          'must': [{
            'match': {
              'node_name': {
                'query': source.node_name,
                'type': 'phrase'
              }
            }
          }],
          'must_not': []
        }
      },
      size,
      sort: [ contextSort, { _uid: 'asc' } ],
      search_after: anchorSortValues,
    };
  } else {
    return {
      _source: true,
      version: true,
      query: {
        match_all: {},
      },
      size,
      sort: [ contextSort, { _uid: 'asc' } ],
      search_after: anchorSortValues,
    };
  }
}


export {
  createAnchorQueryBody,
  createSuccessorsQueryBody,
};
