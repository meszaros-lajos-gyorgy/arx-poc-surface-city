import { ArxMap } from 'arx-level-generator'
import { redRocks } from '@/textures.js'
import { removePolygonsByTexture } from '@/tools/removePolygonsByTexture.js'

export const removeRedRocks = (map: ArxMap) => {
  redRocks.forEach((texture) => {
    removePolygonsByTexture(texture, map)
  })
}
