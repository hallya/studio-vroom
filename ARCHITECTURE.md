# Architecture - Helmet Configurator

## Project Structure

```
src/
├── components/
│   ├── 3d/
│   │   └── HelmetModel.tsx
│   ├── icons/
│   │   ├── EmailIcon.tsx
│   │   ├── InstagramIcon.tsx
│   │   └── index.ts
│   ├── ui/
│   │   ├── ColorPicker.tsx
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
│   ├── helmet.ts
│   └── index.ts
├── utils/
│   ├── preloader.ts
│   └── styles.ts
├── App.tsx
└── main.tsx
```

## Design Principles

### 1. Single Responsibility
Each component has one clear purpose and is in its own file.

### 2. No Inline Styles
All styling is handled through CSS classes for better maintainability.

### 3. Organized Types
Types are grouped logically in separate files by domain.

### 4. Minimal Comments
Only essential comments for complex logic, all in English.

## Components

### Core Components
- **`HelmetConfigurator`**: Main orchestrator
- **`HelmetModel`**: 3D model renderer with material system

### UI Components
- **`ModelSelector`**: Helmet selection dropdown
- **`ColorPicker`**: Color selection with retro MotoGP palette
- **`InfoPanel`**: Contact panel with interactive email and Instagram icons
- **`LoadingSpinner`**: 3D loading indicator

### Icon Components
- **`EmailIcon`**: SVG email icon with customizable size and styling
- **`InstagramIcon`**: SVG Instagram icon with customizable size and styling

## Type Organization

### Domain Types
- **`helmet.ts`**: Core helmet and background types

### Component Types
- **`components/helmet-model.ts`**: 3D component props
- **`components/icons.ts`**: Icon component props
- **`ui/controls.ts`**: UI component props

### Centralized Exports
- **`index.ts`**: Single import point for all types

## Styling Strategy

### CSS Classes Only
All components use semantic CSS classes instead of inline styles.

### Class Naming
- Component-specific: `.helmet-configurator`, `.color-picker-row`
- State-based: `.selected`, `.active`
- Utility: `.control-section`, `.elegant-font`

## State Management

### Local State
Each piece of state has a clear owner and flows down through props.

### No Global State
Simple prop drilling for this scale - easier to debug and test.

## Performance

### Lazy Loading
- 3D models preloaded for instant switching
- Suspense boundaries for async components

### Memory Management
- Scene cloning prevents model conflicts
- Proper cleanup in useEffect hooks

## Development Guidelines

### Adding Components
1. Create single-purpose component
2. Define types in appropriate domain file
3. Use CSS classes for styling
4. Minimal, essential comments only
5. Update centralized exports

### Styling
1. Add CSS classes to `index.css`
2. Use semantic class names
3. Leverage CSS custom properties for dynamic values
4. No inline styles except for truly dynamic content

### Types
1. Group related types in domain files
2. Use type-only imports (`import type`)
3. Export through central index for easy imports
4. Keep interfaces focused and minimal