const path = require('path')
module.exports = {
  mode: 'development', // 0. Estableciendo que esto es para desarrollo
  // 1. Especificamos el archivo de entrada
  entry: './client/index.js',
  // 2. Especificando el archivo de salida
  output: {
    path: '/public', // 3. Ruta absoluta de la salida
    filename: 'bundle.js' // 4. Nombre del archivo de salida
  },
  devServer: {
    contentBase: path.join(__dirname,'public'),
    port: 8080,
    host: 'localhost'
  }
}
