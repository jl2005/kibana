import _ from 'lodash';
import { noWhiteSpace } from 'ui/utils/no_white_space';
import angular from 'angular';
import { IndexPatternsFieldFormatProvider } from 'ui/index_patterns/_field_format/field_format';
export function stringifyMap(Private) {
  const FieldFormat = Private(IndexPatternsFieldFormatProvider);
  const template = _.template(noWhiteSpace(require('ui/stringify/types/map.html')));

  _.class(Map).inherits(FieldFormat);
  function Map(params) {
    Map.Super.call(this, params);
  }

  Map.id = 'map';
  Map.title = 'map';
  Map.fieldType = [
    'number',
    'boolean',
    'date',
    'ip',
    'attachment',
    'geo_point',
    'geo_shape',
    'string',
    'murmur3',
    'unknown',
    'conflict'
  ];

  Map.prototype._convert = {
    text: angular.toJson,
    html: function sourceToHtml(source, field, hit) {
      const pairs = [];
      Object.keys(source).forEach (k => { pairs.push([k, source[k]]); });
      if (pairs.length === 0) return this.getConverterFor('text')(source, field, hit);

      return template({ defPairs: pairs });
    }
  };

  return Map;
}
