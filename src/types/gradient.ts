export type RGB = {
  r: number
  g: number
  b: number
}

export type RGBA = RGB & {
  a: number
}

export type GradientType =
  | 'linear'
  | 'animated'
  | 'conic'
  | 'wave'
  | 'silk'
  | 'smoke'
  | 'stripe'

// Input format for colors - supports multiple formats
export type ColorInput =
  | string                                    // '#3ac3f6'
  | RGB                                       // { r: 58, g: 195, b: 246 }
  | { color: string | RGB; opacity?: number } // { color: '#3ac3f6', opacity: 0.5 }

export type GradientConfig = {
  color1: RGBA
  color2: RGBA
  color3: RGBA
  speed: number
  scale: number
  type: GradientType
  noise: number
}

export type GradientConfigInput = {
  color1?: ColorInput
  color2?: ColorInput
  color3?: ColorInput
  speed?: number
  scale?: number
  type?: GradientType
  noise?: number
}

export type GradFlowProps = {
  config?: GradientConfigInput
  preset?: 'cosmic' | 'matrix' | 'electric' | 'inferno' | 'mystic' | 'cyber' | 'neon' | 'plasma'
  className?: string
}
