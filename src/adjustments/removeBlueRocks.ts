import { ArxMap } from 'arx-level-generator'
import { blueRocks } from '@/textures.js'

export const removeBlueRocks = (map: ArxMap) => {
  map.polygons.selectByTextures(blueRocks).removeSelected()
}
