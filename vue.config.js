module.exports = {
  devServer: {
    proxy: {
      "/.netlify": {
        target: "http://localhost:9000",
        pathRewrite: { "^/.netlify/functions": "" }
      }
    }
  },
  productionSourceMap: false,
  pwa: {
    themeColor: "#2a4365",
    msTileColor: "#2a4365"
  }
};
