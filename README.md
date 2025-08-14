# 🏍️ Studio Vroom Vroom - 3D Helmet Configurator

An interactive 3D helmet configurator for motorcycles built with React Three Fiber.

## ✨ Features

- 🎯 **3D Visualization**: High-quality GLTF/GLB model rendering
- 🎮 **Interactive Controls**: OrbitControls for rotation, zoom, and navigation
- 🎨 **Helmet Selection**: Simple interface to switch between models
- 🌈 **Retro Color Palette**: Authentic MotoGP racing colors from the 80s-90s era
- 💡 **Realistic Lighting**: HDRI environment with professional studio lighting
- 🎬 **Animations**: Support for 3D model animations
- ⚡ **Performance Optimized**: Lazy loading and model preloading
- 📱 **Modern UI**: Clean, elegant interface with CSS-only styling

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <your-repo>
cd studio-vroom-vroom

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The application will be available at `http://localhost:5173`

## 🛠️ Tech Stack

- **React 19** - UI Framework
- **TypeScript** - Type Safety
- **React Three Fiber** - 3D rendering in React
- **Three.js** - WebGL 3D engine
- **@react-three/drei** - 3D helpers and components
- **Vite** - Build tool and dev server

## 📁 Project Structure

```
src/
├── components/
│   ├── 3d/
│   │   └── HelmetModel.tsx           # 3D model component
│   ├── icons/
│   │   ├── EmailIcon.tsx             # SVG email icon
│   │   ├── InstagramIcon.tsx         # SVG Instagram icon
│   │   └── index.ts                  # Icon exports
│   ├── ui/
│   │   ├── ColorPicker.tsx           # Retro color selection
│   │   ├── InfoPanel.tsx             # Contact panel
│   │   ├── LoadingSpinner.tsx        # Loading indicator
│   │   └── ModelSelector.tsx         # Helmet selection
│   └── HelmetConfigurator.tsx        # Main orchestrator
├── constants/
│   └── helmets.ts                    # Configuration data
├── types/
│   ├── components/                   # Component type definitions
│   ├── ui/                          # UI component types
│   ├── helmet.ts                    # Core types
│   ├── materials.ts                 # Material types
│   └── index.ts                     # Centralized exports
├── utils/
│   ├── preloader.ts                 # Model preloading
│   └── styles.ts                    # Style utilities
├── App.tsx                          # Application entry point
└── main.tsx                         # React bootstrap

public/
└── models/
    └── motorcycle_helmet_-_racing_helmet.glb  # 3D helmet model
```

## 🎮 Controls

### 3D Viewport
- **Click + Drag**: Rotate the helmet
- **Mouse Wheel**: Zoom in/out
- **Full 360° rotation** in all directions

### Interface Controls
- **Model Selector**: Choose helmet type
- **Color Picker**: Retro MotoGP color palette with authentic racing colors
- **Contact Panel**: Interactive email and Instagram icons with hover animations

## 🔧 Configuration

### Adding New Helmets

Modify the `HELMETS` array in `src/constants/helmets.ts`:

```typescript
export const HELMETS: Helmet[] = [
  {
    id: "racing",
    name: "Racing Helmet",
    modelPath: "/models/motorcycle_helmet_-_racing_helmet.glb",
    color: "#ff0000",
  },
  // Add your new helmets here
];
```

### Customizing Colors

Update the retro color palette in `src/constants/helmets.ts`:

```typescript
export const COLOR_PALETTE = [
  "#DC143C", // Crimson red (Ferrari, Ducati style)
  "#FFD700", // Gold yellow (Yamaha Kenny Roberts)
  "#1E90FF", // Dodger blue (Suzuki classic)
  // Add your authentic racing colors
];
```

## 🎨 Styling

### CSS Architecture
- **No inline styles** - All styling through CSS classes
- **Semantic class names** - Component-specific and state-based
- **Modular approach** - Easy to maintain and extend

### Key CSS Classes
- `.helmet-configurator` - Main container
- `.control-section` - Form control groups
- `.color-button.selected` - Active color state
- `.elegant-font` - Typography consistency

## ⚡ Performance

### Optimization Features
- **Model Preloading**: Instant helmet switching
- **Lazy Loading**: Suspense boundaries for async components
- **Memory Management**: Proper scene cloning and cleanup
- **Efficient Rendering**: Optimized 3D pipeline

### 3D Model Optimization
For best performance:
- Use optimized GLTF/GLB models
- Reduce polygon count when necessary
- Compress textures appropriately
- Use efficient image formats (WebP, AVIF)

## 📦 Build & Deploy

```bash
# Create production build
pnpm build

# Preview production build
pnpm preview

# Type checking
pnpm type-check
```

## 🏗️ Architecture

This project follows clean architecture principles:

- **Single Responsibility**: One component per file
- **Type Safety**: Comprehensive TypeScript coverage
- **Modular Design**: Organized by domain and responsibility
- **Performance First**: Optimized for 3D rendering

See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed documentation.

## 🤝 Contributing

Contributions are welcome! Please feel free to open an issue or pull request.

### Development Guidelines
1. Follow the established architecture patterns
2. Use CSS classes instead of inline styles
3. Keep comments minimal and essential
4. Maintain type safety throughout
5. Test thoroughly before submitting

## 📄 License

MIT License - see the LICENSE file for details.