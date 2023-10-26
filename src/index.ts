import { ArxMap, Settings } from 'arx-level-generator'
import { addSky } from '@/adjustments/addSky.js'
// import { addSun } from '@/adjustments/addSun.js'
import { removeBlueRocks } from '@/adjustments/removeBlueRocks.js'
// import { removeRedRocks } from '@/adjustments/removeRedRocks.js'
import { removeWindows } from '@/adjustments/removeWindows.js'
import { makePolygonsDoubleSided } from '@/tools/makePolygonsDoubleSided.js'

const settings = new Settings()

const map = await ArxMap.fromOriginalLevel(11, settings)

// -----------------------------------

map.removePortals()
makePolygonsDoubleSided(map)

addSky(map)
// addSun(map)

removeBlueRocks(map)
// removeRedRocks(map)
removeWindows(map)

// -----------------------------------

map.finalize()
await map.saveToDisk(settings)

console.log('done')
