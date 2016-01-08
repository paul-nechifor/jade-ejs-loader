var _ = require('lodash');
var jade = require('jade');
var loaderUtils = require('loader-utils');

module.exports = function (src) {
    var html = jade.render(src, {});
    var template = _.template(html, loaderUtils.parseQuery(this.query));
    return 'module.exports = ' + template;
};
