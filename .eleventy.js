const { FontAwesomeIcon } = require("@campj/eleventy-fa-icons");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/css/style.css");
  eleventyConfig.addPassthroughCopy("src/assets/images");

  eleventyConfig.addPairedAsyncShortcode(
    "bibtex",
    require("eleventy-plugin-bibtex")
  );

  eleventyConfig.addNunjucksShortcode("FontAwesomeIcon", FontAwesomeIcon);

  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
}