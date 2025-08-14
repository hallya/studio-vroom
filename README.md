# 🏍️ Studio Vroom Vroom - Art on Helmet

Showcase website featuring Studio Vroom Vroom's custom motorcycle helmet creations. An immersive 3D experience with elegant retro MotoGP style to discover our racing-dedicated designs.

**🚀 Live Demo**: [https://studio-vroom.vercel.app/](https://studio-vroom.vercel.app/)  
**📁 Repository**: [https://github.com/hallya/studio-vroom](https://github.com/hallya/studio-vroom)

## ✨ Features

### 🎯 **3D Visualization**
- High-quality GLTF/GLB model rendering with Three.js
- Realistic lighting with HDRI environment mapping
- Smooth 360° rotation with optimized controls
- Professional studio lighting setup

### 🎨 **Elegant Retro MotoGP Theme**
- Authentic 80s-90s racing aesthetic
- Curated color palette inspired by legendary MotoGP liveries
- Sophisticated typography with custom fonts
- Smooth animations and transitions

### 🎮 **Interactive Features**
- Intuitive OrbitControls for helmet visualization
- Navigation between different helmet models
- Preview of creations with signature colors
- Contact panel with elegant animations
- Email and Instagram integration for orders

### ⚡ **Performance & Architecture**
- Lazy loading with React Suspense
- Modular CSS architecture (no inline styles)
- TypeScript for type safety
- Component-based architecture (one per file)
- Optimized 3D rendering pipeline

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/hallya/studio-vroom.git
cd studio-vroom

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The application will be available at `http://localhost:5173`

## 🛠️ Tech Stack

### **Frontend & UI**
- **React 19** - Modern UI framework with latest features
- **TypeScript 5.6** - Type safety and developer experience
- **Vite 6** - Lightning-fast build tool and dev server

### **3D Graphics & Rendering**
- **React Three Fiber** - React renderer for Three.js
- **Three.js** - WebGL 3D graphics engine
- **@react-three/drei** - Useful helpers and abstractions

### **Styling & Design**
- **Modern CSS** - Custom properties, animations, grid/flexbox
- **Modular Architecture** - Organized CSS structure
- **No Dependencies** - Pure CSS without frameworks

### **Development Tools**
- **ESLint** - Code linting and quality
- **TypeScript Config** - Strict type checking
- **Git** - Version control

## 📁 Project Structure

```
src/
├── components/                       # React components (one per file)
│   ├── 3d/
│   │   └── HelmetModel.tsx          # 3D helmet rendering & animations
│   ├── icons/                       # SVG icon components
│   │   ├── EmailIcon.tsx            # Contact email icon
│   │   ├── InstagramIcon.tsx        # Social media icon
│   │   ├── CopyIcon.tsx            # Copy to clipboard icon
│   │   └── index.ts                 # Centralized exports
│   ├── ui/                          # User interface components
│   │   ├── ColorPicker.tsx          # Retro color palette
│   │   ├── InfoPanel.tsx            # Contact & social links
│   │   ├── LoadingSpinner.tsx       # 3D loading indicator
│   │   └── ModelSelector.tsx        # Helmet model selection
│   └── HelmetConfigurator.tsx       # Main orchestrator component
│
├── styles/                          # Modular CSS architecture
│   ├── animations/
│   │   └── keyframes.css           # CSS animations & keyframes
│   ├── base/
│   │   ├── reset.css               # CSS reset & normalize
│   │   └── variables.css           # CSS custom properties
│   ├── components/
│   │   ├── layout.css              # Layout & positioning
│   │   ├── theme.css               # Theme-specific styles
│   │   └── ui.css                  # UI component styles
│   └── utilities/
│       └── typography.css          # Typography utilities
│
├── types/                           # TypeScript definitions
│   ├── components/                  # Component-specific types
│   │   ├── helmet-model.ts         # 3D model types
│   │   └── icons.ts                # Icon component types
│   ├── ui/
│   │   └── controls.ts             # UI control types
│   ├── helmet.ts                   # Core helmet types
│   └── index.ts                    # Type exports
│
├── constants/
│   └── helmets.ts                  # Configuration & data
├── utils/
│   ├── preloader.ts               # 3D model preloading
│   └── styles.ts                  # Style utilities
├── App.tsx                        # Application root
└── main.tsx                       # React bootstrap

public/
├── models/
│   └── motorcycle_helmet_-_racing_helmet.glb  # 3D helmet model
└── background assets/              # Theme background images
```

## 🎮 User Experience

### 🖱️ **3D Interaction**
- **Click + Drag**: Smooth helmet rotation in all directions
- **Mouse Wheel**: Zoom in/out with momentum
- **Responsive Controls**: Optimized for both desktop and mobile

### 🎨 **Creative Portfolio**
- **Model Gallery**: Discover our different helmet creations
- **Retro MotoGP Palette**: Authentic colors inspired by legends:
  - Crimson Red (Ferrari/Ducati style)
  - Gold Yellow (Yamaha Kenny Roberts)
  - Dodger Blue (Suzuki classic)
  - Deep Purple (Honda NSR inspiration)
  - And many more authentic racing colors...

### 📞 **Contact & Orders**
- **Email Icon**: Click to copy `martin@studiovroom.fr`
  - Icon animation when copying
  - Gradient effect on hover
  - Dynamic 360° rotation on click
- **Instagram Icon**: Direct link to [@studio.vroom](https://www.instagram.com/studio.vroom/)
  - Color animations on hover
  - Smooth gradient effects
  - Gallery of our latest creations

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
  "#800080", // Deep purple (Honda NSR inspiration)
  "#FF6347", // Tomato red (Aprilia style)
  "#32CD32", // Lime green (Kawasaki classic)
  "#FF1493", // Deep pink (Racing liveries)
  "#000000", // Classic black
  // Add your authentic racing colors
];
```

### Camera Configuration

Customize the 3D camera in `HelmetConfigurator.tsx`:

```typescript
<Canvas
  camera={{
    position: [0, 0, 2],  // Camera position [x, y, z]
    fov: 50,              // Field of view (35-75 typical)
    near: 0.1,            // Near clipping plane
    far: 1000,            // Far clipping plane
  }}
  gl={{
    antialias: true,           // Smooth edges
    alpha: true,               // Transparent background
    powerPreference: "high-performance" // GPU optimization
  }}
>
```

## 🎨 CSS Architecture

### **Modular Design Philosophy**
```
src/styles/
├── base/           # Foundation (reset, variables)
├── components/     # Component-specific styles  
├── utilities/      # Reusable utility classes
└── animations/     # Keyframes & transitions
```

### **Key Principles**
- **✅ Zero Inline Styles** - All styling through CSS classes
- **🎯 Semantic Naming** - Component-specific and state-based classes
- **🔧 CSS Custom Properties** - For dynamic theming and animations
- **📱 Mobile-First** - Responsive design patterns
- **⚡ Performance Optimized** - Minimal CSS bundle size

### **Advanced CSS Features Used**
```css
/* Animatable custom properties */
@property --gradient-angle {
  syntax: "<angle>";
  inherits: true;
  initial-value: 135deg;
}

/* Smooth color transitions */
.contact-icon {
  transition: 
    --icon-color-primary 0.4s ease,
    --gradient-angle 0.4s ease;
}

/* Complex animations */
@keyframes emailClick360 {
  0% { --gradient-angle: 45deg; }
  100% { --gradient-angle: 405deg; }
}
```

### **Key CSS Classes**
- `.helmet-configurator` - Main application container
- `.contact-icon` - Interactive social icons
- `.elegant-font` - Retro typography styling
- `.main-title` - Branded title with animations
- `.color-button.selected` - Active color state

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

## 🎯 Design Philosophy

### **Elegant Retro MotoGP Aesthetic**
- Inspired by the golden age of motorcycle racing (80s-90s)
- Sophisticated color palette from legendary racing liveries
- Clean, minimal interface that doesn't distract from the 3D model
- Professional typography and spacing

### **Performance-First Development**
- Optimized 3D rendering pipeline
- Lazy loading for better initial load times
- Modular architecture for maintainability
- TypeScript for development confidence

## 🤝 Contributing

Contributions are welcome! Please feel free to open an issue or pull request.

### **Development Guidelines**
1. **Architecture**: One component per file, organized by domain
2. **Styling**: CSS classes only - no inline styles
3. **Comments**: Minimal and essential, in English only
4. **Types**: Comprehensive TypeScript coverage
5. **Testing**: Verify 3D interactions and responsive design

### **Getting Started**
```bash
# Fork the repository
git clone https://github.com/hallya/studio-vroom.git
cd studio-vroom

# Create a feature branch
git checkout -b feature/your-feature-name

# Make your changes and test thoroughly
pnpm dev

# Submit a pull request
```

## 📄 License

MIT License - see the LICENSE file for details.