module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    
    plugins: [
      ["@babel/plugin-transform-flow-strip-types"],
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-proposal-class-properties", { "loose": true }],
      ["module-resolver", {
      "root": ["."],
      "alias": {
        "@ui": "./src/lib/ui",
        "@theme": ["./src/lib/colors.ts"],
        "@sources": ["./src/assets"],
        "@screens": ["./src/screens"],
        "@stacks": ["./src/navigators"],
        "@interfaces": ["./src/@interfaces"],
      },
      "extensions": [
        ".js",
        ".jsx",
        ".ts",
        ".tsx",
      ]
    }]],
  };
};
