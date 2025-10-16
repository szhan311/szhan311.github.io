// Purge after Jekyll builds into _site
module.exports = {
  content: [
    "_site/**/*.html",
    "_site/**/*.js"    // if you have inline templates/classes
  ],
  css: [
    "_site/assets/**/*.css",   // adjust if your CSS outputs elsewhere
    "_site/**/*.css"
  ],
  output: "_site",             // overwrite in place; or set to a temp dir
  safelist: {
    standard: [
      // keep classes generated at runtime or by libs
      "highlight", "highlighter-rouge",
      "mermaid",
      "math", "katex", "katex-display",
      // add any custom classes you know are injected dynamically
    ],
    greedy: [
      /^language-/,            // code block language classes
      /^token-/,               // prism/rouge-like tokens
    ]
  },
}
