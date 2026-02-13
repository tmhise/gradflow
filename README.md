# GradFlow

Beautiful animated WebGL gradients for React. Create stunning, performant gradient backgrounds with multiple animation styles.

## Features

- 🎨 **7 Gradient Types**: Linear, Conic, Animated, Wave, Silk, Smoke, and Stripe
- 🚀 **High Performance**: WebGL-powered rendering with optimized shaders
- 🎛️ **Fully Customizable**: Control colors, animation speed, scale, and noise
- 🔮 **Per-Color Opacity**: Fine-grained transparency control for each color
- 📱 **Responsive**: Automatically adapts to container size
- 🔧 **TypeScript Support**: Fully typed API
- 🎭 **Easy Integration**: Simple npm install and import

## Demo

Visit [gradflow.meera.dev](https://gradflow.meera.dev) to see GradFlow in action and experiment with different configurations.

## Installation

```bash
npm install gradflow
```

## Quick Start

```tsx
import { GradFlow } from 'gradflow'

function App() {
  return (
    <div className='relative h-screen'>
      <GradFlow />
      {/* Your content here */}
    </div>
  )
}
```

## Usage Examples

### With Custom Configuration

```tsx
import { GradFlow } from 'gradflow'

function App() {
  return (
    <GradFlow
      config={{
        color1: { r: 226, g: 98, b: 75 },
        color2: { r: 255, g: 255, b: 255 },
        color3: { r: 30, g: 34, b: 159 },
        speed: 0.4,
        scale: 1,
        type: 'stripe',
        noise: 0.08,
      }}
    />
  )
}
```

### Using Hex Colors

```tsx
import { GradFlow } from 'gradflow'

function App() {
  return (
    <GradFlow
      config={{
        color1: '#e2624b',
        color2: '#ffffff',
        color3: '#1e229f',
      }}
    />
  )
}
```

### Using Per-Color Opacity

Control the transparency of each color individually for more nuanced gradient effects:

```tsx
import { GradFlow } from 'gradflow'

function App() {
  return (
    <GradFlow
      config={{
        color1: { color: '#1a1a1a', opacity: 1 },      // Fully opaque
        color2: { color: '#3ac3f6', opacity: 0.5 },    // 50% transparent
        color3: { color: '#1a1a1a', opacity: 0.8 },    // 80% opaque
        speed: 0.5,
        scale: 0.4,
        type: 'smoke',
        noise: 0.08,
      }}
    />
  )
}
```

You can also mix RGB objects with opacity:

```tsx
<GradFlow
  config={{
    color1: { color: { r: 58, g: 195, b: 246 }, opacity: 0.7 },
    color2: '#ffffff',  // Full opacity (default)
    color3: { color: '#1a1a1a', opacity: 0.9 },
  }}
/>
```

### Using Presets

```tsx
import { GradFlow, PRESETS } from 'gradflow'

function App() {
  return <GradFlow config={PRESETS.cosmic} />
}
```

Available presets: `cosmic`, `matrix`, `electric`, `inferno`, `mystic`, `cyber`, `neon`, `plasma`

## API Reference

### GradFlow Component

| Prop        | Type                  | Default          | Description                   |
| ----------- | --------------------- | ---------------- | ----------------------------- |
| `config`    | `GradientConfigInput` | `DEFAULT_CONFIG` | Gradient configuration object |
| `className` | `string`              | `''`             | Additional CSS classes        |

### GradientConfigInput

All properties are optional. Colors support multiple formats including per-color opacity.

```typescript
type GradientConfigInput = {
  color1?: ColorInput    // First gradient color
  color2?: ColorInput    // Second gradient color
  color3?: ColorInput    // Third gradient color
  speed?: number         // Animation speed (0-2)
  scale?: number         // Pattern scale (0.5-3)
  type?: GradientType    // Gradient pattern type
  noise?: number         // Noise intensity (0-0.5)
}

// Color can be specified in multiple formats
type ColorInput =
  | string                                      // Hex: '#3ac3f6'
  | RGB                                         // RGB object: { r: 58, g: 195, b: 246 }
  | { color: string | RGB; opacity?: number }   // With opacity: { color: '#3ac3f6', opacity: 0.5 }

type RGB = {
  r: number  // 0-255
  g: number  // 0-255
  b: number  // 0-255
}

type RGBA = RGB & {
  a: number  // 0-1 (opacity)
}
```

### Gradient Types

- `linear` - Classic linear gradient with wave distortion
- `animated` - Dynamic flowing patterns with rotation
- `conic` - Circular/radial gradient patterns
- `wave` - Wave-based undulating patterns
- `silk` - Smooth silk-like flowing textures
- `smoke` - Organic smoke-like patterns
- `stripe` - Warped stripe patterns (default)

## Utility Functions

### Color Conversion

```tsx
import { hexToRgb, rgbToHex, normalizeColor, normalizeColorWithAlpha } from 'gradflow'

// Convert hex to RGB
const rgb = hexToRgb('#ff0000') // { r: 255, g: 0, b: 0 }

// Convert RGB to hex
const hex = rgbToHex({ r: 255, g: 0, b: 0 }) // '#ff0000'

// Normalize color (accepts both string and RGB)
const normalized = normalizeColor('#ff0000') // { r: 255, g: 0, b: 0 }

// Normalize color with alpha support
const withAlpha = normalizeColorWithAlpha({ color: '#ff0000', opacity: 0.5 })
// { r: 255, g: 0, b: 0, a: 0.5 }
```

### Random Colors

```tsx
import { randomRGBA, generateRandomColors } from 'gradflow'

// Generate single random RGBA color (full opacity)
const color = randomRGBA()

// Generate random gradient colors
const colors = generateRandomColors()
// Returns: { color1: RGBA, color2: RGBA, color3: RGBA }
```

## Performance Tips

- Use `scale` values between 0.5-2.0 for optimal performance
- Lower `noise` values (< 0.2) perform better
- Consider using `will-change: transform` CSS for smooth animations
- The component automatically limits device pixel ratio to 2 for performance

## Requirements

- React >= 18.0.0
- react-dom >= 18.0.0
- Modern browser with WebGL support

## Browser Support

GradFlow works in all modern browsers that support WebGL:

- Chrome 56+
- Firefox 51+
- Safari 15+
- Edge 79+

## License

MIT License - feel free to use in your projects!

## Credits

Created by [Meer](https://www.meera.dev/)

---

**Note**: This component requires WebGL support. It gracefully handles unsupported environments but won't render gradients in very old browsers.
