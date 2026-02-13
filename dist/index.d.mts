import * as react_jsx_runtime from 'react/jsx-runtime';

type RGB = {
    r: number;
    g: number;
    b: number;
};
type RGBA = RGB & {
    a: number;
};
type GradientType = 'linear' | 'animated' | 'conic' | 'wave' | 'silk' | 'smoke' | 'stripe';
type ColorInput = string | RGB | {
    color: string | RGB;
    opacity?: number;
};
type GradientConfig = {
    color1: RGBA;
    color2: RGBA;
    color3: RGBA;
    speed: number;
    scale: number;
    type: GradientType;
    noise: number;
};
type GradientConfigInput = {
    color1?: ColorInput;
    color2?: ColorInput;
    color3?: ColorInput;
    speed?: number;
    scale?: number;
    type?: GradientType;
    noise?: number;
};
type GradFlowProps = {
    config?: GradientConfigInput;
    preset?: 'cosmic' | 'matrix' | 'electric' | 'inferno' | 'mystic' | 'cyber' | 'neon' | 'plasma';
    className?: string;
};

declare function GradFlow({ config: initialConfig, className, }: GradFlowProps): react_jsx_runtime.JSX.Element;

declare const DEFAULT_CONFIG: GradientConfig;
declare const GRADIENT_TYPE_NUMBER: Record<GradientType, number>;
declare const PRESETS: Record<string, GradientConfig>;

/**
 * Converts a hex color string to RGB object
 * @param hex - Hex color string (e.g., '#ff0000' or 'ff0000')
 * @returns RGB object with r, g, b values (0-255)
 */
declare function hexToRgb(hex: string): RGB;
/**
 * Converts RGB object to hex color string
 * @param rgb - RGB object with r, g, b values (0-255)
 * @returns Hex color string with # prefix
 */
declare function rgbToHex(rgb: RGB): string;
/**
 * Normalizes color input to RGB object (legacy, for backward compatibility)
 * @param color - Hex string or RGB object
 * @returns RGB object
 */
declare function normalizeColor(color: string | RGB): RGB;
/**
 * Normalizes color input to RGBA object with alpha support
 * @param input - Color input in various formats:
 *   - string: '#3ac3f6' → { r, g, b, a: 1 }
 *   - RGB: { r, g, b } → { r, g, b, a: 1 }
 *   - ColorWithOpacity: { color: '#3ac3f6', opacity: 0.5 } → { r, g, b, a: 0.5 }
 * @returns RGBA object with r, g, b values (0-255) and a value (0-1)
 */
declare function normalizeColorWithAlpha(input: ColorInput): RGBA;

declare function randomRGBA(): RGBA;
declare function generateRandomColors(): Partial<GradientConfig>;

export { type ColorInput, DEFAULT_CONFIG, GRADIENT_TYPE_NUMBER, GradFlow, type GradFlowProps, type GradientConfig, type GradientConfigInput, type GradientType, PRESETS, type RGB, type RGBA, GradFlow as default, generateRandomColors, hexToRgb, normalizeColor, normalizeColorWithAlpha, randomRGBA, rgbToHex };
