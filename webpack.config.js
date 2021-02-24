const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  mode: 'production',
  // 1. Especificamos el archivo de entrada
  entry: './client/index.js',
  // 2. Especificando el archivo de salida
  output: {
    path: path.resolve(__dirname, 'public'), // 3. Ruta absoluta de la salida
    filename: 'js/bundle.js' // 4. Nombre del archivo de salida
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    'modules': false,//commonjs,amd,umd,systemjs,auto
                    'useBuiltIns': 'usage',
                    'targets': {"chrome": "80"},//'> 0.25%, not dead',
                    'corejs': 3
                  }
                ]
              ],
              "plugins": [
                [
                  "module-resolver",
                  {
                    "root": ["./"],
                    "alias":{
                      "@client" : "./client",
                    }
                  }
                ]
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,'css-loader']
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'styles/app.css',
  })],
}
