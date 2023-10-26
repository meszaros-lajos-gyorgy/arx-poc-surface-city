import { ArxMap } from 'arx-level-generator'
import { blueRocks } from '@/textures.js'
import { removePolygonsByTexture } from '@/tools/removePolygonsByTexture.js'

export const removeBlueRocks = (map: ArxMap) => {
  blueRocks.forEach((texture) => {
    removePolygonsByTexture(texture, map)
  })
}
