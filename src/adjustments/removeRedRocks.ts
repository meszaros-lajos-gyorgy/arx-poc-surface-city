import { ArxMap } from 'arx-level-generator'
import { redRocks } from '@/textures.js'

export const removeRedRocks = (map: ArxMap) => {
  map.polygons.selectByTextures(redRocks).removeSelected()
}
