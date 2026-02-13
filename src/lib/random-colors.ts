import { RGBA, GradientConfig, GradientType } from '@/types/gradient'

export function randomRGBA(): RGBA {
  return {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256),
    a: 1,
  }
}

const gradientTypes: GradientType[] = [
  'linear',
  'animated',
  'conic',
  'wave',
  'silk',
  'smoke',
  'stripe',
]

export function randomGradientType(): GradientType {
  return gradientTypes[Math.floor(Math.random() * gradientTypes.length)]
}

export function generateRandomColors(): Partial<GradientConfig> {
  return {
    color1: randomRGBA(),
    color2: randomRGBA(),
    color3: randomRGBA(),
  }
}
