const nunjucks = require('nunjucks');
const markdown = require('nunjucks-markdown');
const marked = require('marked');
const highlight = require('highlight.js');

const nunjucksEnv = nunjucks.configure('', {
  tags: {
    blockStart: '<%',
    blockEnd: '%>',
    variableStart: '<$',
    variableEnd: '$>',
    commentStart: '<#',
    commentEnd: '#>'
  }
});

marked.setOptions({
  highlight: function(code) {
    return '<div v-pre>' + highlight.highlightAuto(code).value + '</div>';
  }
});

markdown.register(nunjucksEnv, marked);

module.exports = nunjucksEnv;
