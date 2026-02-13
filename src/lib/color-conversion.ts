import { RGB, RGBA, ColorInput } from '@/types/gradient'

/**
 * Converts a hex color string to RGB object
 * @param hex - Hex color string (e.g., '#ff0000' or 'ff0000')
 * @returns RGB object with r, g, b values (0-255)
 */
export function hexToRgb(hex: string): RGB {
  // Remove # if present
  const cleaned = hex.replace('#', '')

  // Parse hex string
  const bigint = parseInt(cleaned, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return { r, g, b }
}

/**
 * Converts RGB object to hex color string
 * @param rgb - RGB object with r, g, b values (0-255)
 * @returns Hex color string with # prefix
 */
export function rgbToHex(rgb: RGB): string {
  const { r, g, b } = rgb
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

/**
 * Normalizes color input to RGB object (legacy, for backward compatibility)
 * @param color - Hex string or RGB object
 * @returns RGB object
 */
export function normalizeColor(color: string | RGB): RGB {
  if (typeof color === 'string') {
    return hexToRgb(color)
  }
  return color
}

/**
 * Checks if an object has color and optional opacity properties
 */
function isColorWithOpacity(input: ColorInput): input is { color: string | RGB; opacity?: number } {
  return typeof input === 'object' && 'color' in input
}

/**
 * Checks if an object is an RGB object
 */
function isRGB(input: ColorInput): input is RGB {
  return typeof input === 'object' && 'r' in input && 'g' in input && 'b' in input && !('color' in input)
}

/**
 * Normalizes color input to RGBA object with alpha support
 * @param input - Color input in various formats:
 *   - string: '#3ac3f6' → { r, g, b, a: 1 }
 *   - RGB: { r, g, b } → { r, g, b, a: 1 }
 *   - ColorWithOpacity: { color: '#3ac3f6', opacity: 0.5 } → { r, g, b, a: 0.5 }
 * @returns RGBA object with r, g, b values (0-255) and a value (0-1)
 */
export function normalizeColorWithAlpha(input: ColorInput): RGBA {
  // Handle string input: '#3ac3f6'
  if (typeof input === 'string') {
    const rgb = hexToRgb(input)
    return { ...rgb, a: 1 }
  }

  // Handle { color, opacity } input
  if (isColorWithOpacity(input)) {
    const rgb = typeof input.color === 'string' ? hexToRgb(input.color) : input.color
    const alpha = input.opacity !== undefined ? Math.max(0, Math.min(1, input.opacity)) : 1
    return { ...rgb, a: alpha }
  }

  // Handle RGB input: { r, g, b }
  if (isRGB(input)) {
    return { ...input, a: 1 }
  }

  // Fallback (should never reach here with proper types)
  return { r: 0, g: 0, b: 0, a: 1 }
}
