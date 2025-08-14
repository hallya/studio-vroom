# Architecture - Studio Vroom Helmet Showcase

## Project Structure

```
src/
├── components/
│   ├── 3d/
│   │   └── HelmetModel.tsx
│   ├── icons/
│   │   ├── EmailIcon.tsx
│   │   ├── InstagramIcon.tsx
│   │   ├── CopyIcon.tsx
│   │   └── index.ts
│   ├── ui/
│   │   ├── InfoPanel.tsx
│   │   ├── LoadingSpinner.tsx
│   │   └── ModelSelector.tsx
│   └── HelmetConfigurator.tsx
├── constants/
│   └── helmets.ts
├── types/
│   ├── components/
│   │   ├── helmet-model.ts
│   │   └── icons.ts
│   ├── ui/
│   │   └── controls.ts
│   ├── hooks.ts
│   ├── helmet.ts
│   └── index.ts
├── hooks/
│   └── useResponsiveControls.ts
├── utils/
│   ├── preloader.ts
│   └── styles.ts
├── styles/
│   ├── base/
│   │   ├── variables.css
│   │   └── reset.css
│   ├── components/
│   │   ├── layout.css
│   │   ├── theme.css
│   │   └── ui.css
│   ├── utilities/
│   │   └── typography.css
│   └── animations/
│       └── keyframes.css
├── assets/
│   └── react.svg
├── App.css
├── App.tsx
├── index.css
├── main.tsx
└── vite-env.d.ts
```

## Design Principles

### 1. Single Responsibility
Each component has one clear purpose and is in its own file.

### 2. No Inline Styles
All styling is handled through CSS classes for better maintainability.

### 3. Organized Types
Types are grouped logically in separate files by domain.

### 4. Clean Code
No unnecessary comments, code is self-documenting.

## Components

### Core Components
- **`HelmetConfigurator`**: Main orchestrator with 3D scene and interaction management
- **`HelmetModel`**: 3D model renderer with rotation animation control

### UI Components
- **`ModelSelector`**: Helmet selection dropdown
- **`InfoPanel`**: Contact panel with interactive email and Instagram icons
- **`LoadingSpinner`**: 3D loading indicator

### Icon Components
- **`EmailIcon`**: SVG email icon with gradient animation
- **`InstagramIcon`**: SVG Instagram icon with gradient animation
- **`CopyIcon`**: SVG copy icon for email interaction feedback

### Custom Hooks
- **`useResponsiveControls`**: Adaptive 3D controls configuration for different screen sizes

## Type Organization

### Domain Types
- **`helmet.ts`**: Core helmet interface with scale and position properties
- **`hooks.ts`**: Hook-related type definitions

### Component Types
- **`components/helmet-model.ts`**: 3D component props including interaction state
- **`components/icons.ts`**: Icon component props
- **`ui/controls.ts`**: UI component props

### Centralized Exports
- **`index.ts`**: Single import point for all types

## State Management

### Local State
Each piece of state has a clear owner and flows down through props.

### Interaction State
- User interaction detection for animation pause/resume
- Timer-based animation restoration after 5 seconds of inactivity

### No Global State
Simple prop drilling for this scale - easier to debug and test.

## Styling Strategy

### Modular CSS Architecture
- **Base**: Variables, reset styles
- **Components**: Layout, theme, UI-specific styles
- **Utilities**: Typography helpers
- **Animations**: Keyframe definitions

### CSS Custom Properties
- Extensive use of CSS variables for theming
- `@property` declarations for smooth gradient animations
- Responsive design with media queries

### Class Naming
- Component-specific: `.helmet-configurator`, `.contact-icon`
- State-based: `.copying`, `.selected`
- Utility: `.control-section`, `.elegant-font`

## Performance

### 3D Optimization
- Model preloading for instant switching
- Scene cloning prevents model conflicts
- Suspense boundaries for async components

### Memory Management
- Proper cleanup in useEffect hooks
- Timer management for interaction state

### Animation Performance
- CSS transforms for smooth animations
- RequestAnimationFrame-based rotation
- Optimized for 60fps on mobile devices

## Responsive Design

### Breakpoints
- Mobile portrait: `max-width: 480px`
- Tablet: `max-width: 768px`
- Desktop: `min-width: 1200px`

### Adaptive Controls
- Touch-optimized for mobile
- Zoom/pan restrictions on small screens
- Dynamic spacing and sizing

## Development Guidelines

### Adding Components
1. Create single-purpose component
2. Define types in appropriate domain file
3. Use CSS classes for styling
4. Update centralized exports

### Styling
1. Add CSS classes to modular files
2. Use semantic class names
3. Leverage CSS custom properties
4. No inline styles

### Types
1. Group related types in domain files
2. Use type-only imports (`import type`)
3. Export through central index
4. Keep interfaces focused and minimal

## 3D Integration

### Three.js Setup
- React Three Fiber for declarative 3D
- @react-three/drei for helpers
- OrbitControls with interaction detection

### Model Management
- GLTF format for 3D models
- Individual scale and position configuration
- Animation state management

### Camera Configuration
- Responsive field of view
- Adaptive target positioning
- Interaction-based controls
