import fieldFormats from 'ui/registry/field_formats';
import stringifyUrl from 'ui/stringify/types/url';
import stringifyBytes from 'ui/stringify/types/bytes';
import stringifyDate from 'ui/stringify/types/date';
import stringifyDuration from 'ui/stringify/types/duration';
import stringifyIp from 'ui/stringify/types/ip';
import stringifyNumber from 'ui/stringify/types/number';
import stringifyPercent from 'ui/stringify/types/percent';
import stringifyString from 'ui/stringify/types/string';
import stringifySource from 'ui/stringify/types/source';
import stringifyColor from 'ui/stringify/types/color';
import stringifyTruncate from 'ui/stringify/types/truncate';
import stringifyBoolean from 'ui/stringify/types/boolean';
import stringifyMap from 'ui/stringify/types/map';

fieldFormats.register(stringifyUrl);
fieldFormats.register(stringifyBytes);
fieldFormats.register(stringifyDate);
fieldFormats.register(stringifyDuration);
fieldFormats.register(stringifyIp);
fieldFormats.register(stringifyNumber);
fieldFormats.register(stringifyPercent);
fieldFormats.register(stringifyString);
fieldFormats.register(stringifySource);
fieldFormats.register(stringifyColor);
fieldFormats.register(stringifyTruncate);
fieldFormats.register(stringifyBoolean);
fieldFormats.register(stringifyMap);
