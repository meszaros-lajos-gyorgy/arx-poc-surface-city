import { ArxMap, Color, Vector3 } from 'arx-level-generator'
import { createLight } from 'arx-level-generator/tools'

export const addSun = (map: ArxMap) => {
  const sun = createLight({
    position: new Vector3(10000, -1000, 7000),
    radius: 10000,
    color: Color.yellow.lighten(30),
  })
  map.lights.push(sun)
}
