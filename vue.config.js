const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    css: {
      loaderOptions: {
        sass: {
          data: `
          @import "@/assets/scss/_mixins.scss";
          @import "@/assets/scss/_z-index.scss";
          @import "@/assets/scss/custom-bootstrap.scss";
        `
        }
      }
    }
  }
};
