import scss from 'rollup-plugin-scss'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

export default {
  input: './assets/css/main.scss',
  output: {
    file: './build/bask.min.js',
    format: 'esm'
  },
  plugins: [
    scss({
      processor: () => postcss([autoprefixer()]),
      outputStyle: 'compressed'
    })
  ]
}