var _ = require('lodash');
var jade = require('jade');
var loaderUtils = require('loader-utils');

module.exports = function (src) {
    var html = jade.render(src, {});
    var query = loaderUtils.parseQuery(this.query);
    query = _.extend(query, {
        interpolate: new RegExp(query.interpolate || '\\{\\{=(.+?)\\}\\}', 'g'),
        escape: new RegExp(query.escape || '\\{\\{(.+?)\\}\\}', 'g'),
        evaluate: new RegExp(query.evaluate || '[{<]%(.+?)%[>}]', 'g'),
    });
    var template = _.template(html, query);
    return 'module.exports = ' + template;
};
