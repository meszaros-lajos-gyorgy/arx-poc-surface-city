import { ArxMap } from 'arx-level-generator'
import { windows } from '@/textures.js'

export const removeWindows = (map: ArxMap) => {
  map.polygons.selectByTextures(windows).removeSelected()
}
