import Glob from 'glob'
import fs from 'fs'

const { sync: glob } = Glob
const {
  readFileSync,
  writeFileSync
} = fs

const spritePathDefault = 'src/assets/icons/sprite.js'
const svgPathPrefixDefault = 'src/assets/icons'

export default class SvGod {
  constructor ({
    spritePath = spritePathDefault,
    svgPathPrefix = svgPathPrefixDefault
  } = {
    spritePath: spritePathDefault,
    svgPathPrefix: svgPathPrefixDefault
  }) {
    this.spritePath = spritePath
    this.svgPathPrefix = svgPathPrefix
  
    this.collectSvg()
  }

  collectSvg () {
    const svgsPath = `${this.svgPathPrefix}/**/*.svg`
    const svgs = glob(svgsPath)
    
    const spriteObj = svgs.reduce((_, pth) => {
      const svg = readFileSync(pth).toString()
      const key = pth.replace(`${this.svgPathPrefix}/`, '').split('.').slice(0, 1).join('')

      _[key] = svg

      return _
    }, {})

    const result = `export default ${JSON.stringify(spriteObj, 0, 2)}`

    writeFileSync(this.spritePath, result)
  }


}