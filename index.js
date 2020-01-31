// Based on:
// https://github.com/nuxt/nuxt.js/blob/dev/examples/tomlscript/modules/tomlscript.js
export default function () {
  // Add .toml extension for store, middleware and more
  this.nuxt.options.build.additionalExtensions.push('toml')
  // Extend build
  const tomlLoader = {
    test: /\.toml$/,
    loader: 'toml-loader'
  }
  this.extendBuild((config) => {
    // Add toml loader
    config.module.rules.push(tomlLoader)
    // Add .toml extension in webpack resolve
    if (!config.resolve.extensions.includes('.toml')) {
      config.resolve.extensions.push('.toml')
    }
  })
}