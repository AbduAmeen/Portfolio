const prod = process.env.NODE_ENV === "production";
module.exports = {
  assetPrefix: prod ? "/Portfolio/" : "",
  basePath: prod ? "/Portfolio" : "",
  //   exportTrailingSlash: true,
};
