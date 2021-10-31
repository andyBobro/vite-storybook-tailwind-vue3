import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import ViteRestart from 'vite-plugin-restart'
import svGod from './src/utils/svgod'
import glob from 'glob'
import path from 'path'

const ENV_PREFIX = 'VITE'

export default ({ mode }) => {
  const varsList = [
    'EXAMPLE'
  ]

  const env = ejectVars(varsList, loadEnv(mode, process.cwd()))

  const SVGod = new svGod()

  return defineConfig({
    plugins: [
      vue(),
      vueI18n({
        include: path.resolve(__dirname, './src/locales/**')
      }),
      ViteRestart({
        restart: [
          'src/assets/icons/**/*',
        ]
      })
    ],
    resolve: {
      alias: aliases ()
    },
    define: {
      'process.env': env
    }
  })
}

function aliases () {
  const a = glob.sync('/*/', { root: path.resolve(__dirname, "src") }).reduce((_, file) => {
    _[path.basename(file)] = file

    return _
  }, {});

  return a
}


function ejectVars (list, vars, pre = ENV_PREFIX) {
  const result = list.reduce((_, i) => {
    const c = vars[`${pre}_${i}`]
    
    _[i] = c

    return _
  }, {})

  console.log(result);

  return result
}
