const presets = [
  ['@babel/env', {
    'targets': {
      'electron': '5.0.1'
    }
  }]
]
const plugins = [
  '@babel/plugin-transform-runtime',
  '@babel/plugin-syntax-dynamic-import',
  ['@babel/plugin-proposal-decorators', {
    'legacy': true
  }]
]
const babelrcRoots = [
  '.',
  'src/*'
]
const env = {
  'renderer': {
    'presets': [
      ['@babel/env', {
        'targets': {
          'esmodules': false
        }
      }]
    ]
  }
}
module.exports = {presets, plugins, babelrcRoots, env}
