const nunjucks = require('nunjucks');
const loaderUtils = require('loader-utils');

module.exports = function(source) {
  const options = Object.assign(
    {
      env: new nunjucks.Environment([], {}),
      data: {}
    },
    loaderUtils.getOptions(this)
  );

  const template = nunjucks.compile(source, options.env);
  // template.dependencies.forEach(this.addDependency)
  return template.render(options.data || {});
};
