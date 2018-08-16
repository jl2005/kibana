import _ from 'lodash';
import { noWhiteSpace } from '../../utils/no_white_space';
import { toJson } from '../../utils/aggressive_parse';

const mapTemplateHtml = `
  <dl class="source truncate-by-height">
    <% defPairs.forEach(function (def) { %>
      <dt><%- def[0] %>:</dt>
      <dd><%= def[1] %></dd>
      <%= ' ' %>
    <% }); %>
  </dl>`;

const mapTemplate = _.template(noWhiteSpace(mapTemplateHtml));


export function createMapFormat(FieldFormat) {
  class MapFormat extends FieldFormat {
    constructor(params, getConfig) {
      super(params);

      this.getConfig = getConfig;
    }

    static id = 'map';
    static title = 'map';
    static fieldType = 'map';
  }

  MapFormat.prototype._convert = {
    text: (value) => toJson(value),
    html: function sourceToHtml(source, field, hit) {
      const pairs = [];
      Object.keys( source ).forEach (k => { pairs.push([k, source[k]]) });
      if (pairs.length === 0) return this.getConverterFor('text')(source, field, hit);

      return mapTemplate({ defPairs: pairs });
    }
  };

  return MapFormat;
}
