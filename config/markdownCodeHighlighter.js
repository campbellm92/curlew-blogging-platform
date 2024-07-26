const { marked } = require("marked");
const hljs = require("highlight.js");
const { markedHighlight } = require("marked-highlight");

function markdownCodeHighlighter() {
  marked.use(
    markedHighlight({
      langPrefix: "hljs language-",
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      },
    })
  );
}

module.exports = markdownCodeHighlighter;
