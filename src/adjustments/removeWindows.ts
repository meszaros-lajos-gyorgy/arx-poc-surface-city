import { ArxMap } from 'arx-level-generator'
import { windows } from '@/textures.js'
import { removePolygonsByTexture } from '@/tools/removePolygonsByTexture.js'

export const removeWindows = (map: ArxMap) => {
  windows.forEach((texture) => {
    removePolygonsByTexture(texture, map)
  })
}
