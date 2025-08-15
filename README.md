# Studio Vroom Vroom - 3D Helmet Showcase

A 3D web application showcasing motorcycle helmet designs with immersive WebGL rendering and professional web standards.

**🚀 Live Demo**: [https://studio-vroom.vercel.app/](https://studio-vroom.vercel.app/)

## Tech Stack

**Frontend**
- React 19.1 + TypeScript 5.8
- Vite 7.1 (build tool)
- Modern CSS (no frameworks)

**3D Graphics**
- Three.js 0.179 + React Three Fiber 9.3
- @react-three/drei 10.6 (helpers)
- WebGL rendering with GLTF models

## Implemented Features

### Core Functionality
- **3D Model Visualization**: Interactive helmet rendering with OrbitControls
- **Model Selection**: Multiple helmet configurations via dropdown
- **Desktop Wheel Navigation**: Infinite scroll wheel for helmet selection (desktop only)
- **Responsive Design**: Adaptive UI and controls for mobile/desktop

### Business Features
- **Brand Showcase**: Studio Vroom branding and contact information
- **Custom Design Section**: Expandable section with pricing information
- **Contact Integration**: 
  - Email copy functionality (martin@studiovroom.fr)
  - Instagram link (@studio.vroom)

### Web Standards & SEO
- **Semantic HTML**: Proper use of semantic elements (header, section, nav, etc.)
- **ARIA Accessibility**: Comprehensive ARIA labels and roles
- **Schema.org Markup**: Structured data for pricing and business information
- **SEO Optimization**: Meta tags, proper heading hierarchy, and descriptive content
- **Performance**: Optimized loading, lazy loading, and responsive images

## Technical Implementation

### 3D Rendering System
```typescript
// Efficient scene management with cloning
const clonedScene = scene.clone();

useEffect(() => {
  // Dynamic material updates with proper cleanup
  clonedScene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      const materials = Array.isArray(child.material) ? child.material : [child.material];
      materials.forEach((material) => {
        if (material instanceof THREE.MeshStandardMaterial) {
          material.needsUpdate = true;
        }
      });
    }
  });
}, [clonedScene]);
```

### Responsive Architecture
```typescript
// Desktop detection for conditional features
const useIsDesktop = (): boolean => {
  const [isDesktop, setIsDesktop] = useState(false);
  
  useEffect(() => {
    const updateIsDesktop = () => setIsDesktop(window.innerWidth > 768);
    updateIsDesktop();
    window.addEventListener("resize", updateIsDesktop);
    return () => window.removeEventListener("resize", updateIsDesktop);
  }, []);
  
  return isDesktop;
};
```

### Semantic HTML Example
```tsx
// Proper semantic structure with accessibility
<section
  className="custom-design-section"
  aria-labelledby="custom-design-heading"
>
  <header
    className="custom-design-header"
    role="button"
    tabIndex={0}
    aria-expanded={isExpanded}
    aria-controls="custom-design-content"
  >
    <h2 id="custom-design-heading">Exclusive Custom Helmet</h2>
  </header>
  
  <div
    id="custom-design-content"
    aria-hidden={!isExpanded}
    itemScope
    itemType="https://schema.org/Offer"
  >
    <span itemProp="price" content="1500">€1,500</span>
    <meta itemProp="priceCurrency" content="EUR" />
  </div>
</section>
```

## Project Structure

```
src/
├── components/
│   ├── 3d/
│   │   ├── HelmetModel.tsx      # 3D rendering and animations
│   │   └── Scene3D.tsx          # Three.js scene setup
│   ├── ui/
│   │   ├── BrandHeader.tsx      # Semantic branding header
│   │   ├── ContactIcons.tsx     # Accessible contact interface
│   │   ├── ControlsContainer.tsx # Layout container
│   │   ├── CustomDesignSection.tsx # Business showcase with schema
│   │   ├── HelmetWheel.tsx      # Desktop wheel navigation
│   │   ├── LoadingSpinner.tsx   # Loading state management
│   │   └── ModelSelector.tsx    # Accessible dropdown
│   ├── icons/                   # Optimized SVG components
│   └── HelmetConfigurator.tsx   # Main app orchestrator
├── hooks/
│   ├── useIsDesktop.ts          # Responsive detection
│   └── useResponsiveControls.ts # Adaptive 3D controls
├── constants/
│   └── helmets.ts               # Configuration data
├── types/                       # TypeScript definitions
└── styles/                      # Modular CSS architecture
```

## Performance & SEO Features

### Performance Optimizations
- **Model Preloading**: GLTF models loaded upfront
- **Scene Cloning**: Efficient memory management
- **Lazy Loading**: React Suspense for 3D components
- **Responsive Controls**: Device-adaptive interactions

### SEO & Accessibility
- **Semantic Markup**: Proper HTML5 semantic elements
- **ARIA Implementation**: Screen reader compatibility
- **Schema.org**: Structured data for search engines
- **Meta Tags**: Proper document metadata
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Logical tab order

### Web Standards
- **WCAG Compliance**: Accessibility guidelines adherence
- **Progressive Enhancement**: Core functionality without JavaScript
- **Mobile-First**: Responsive design approach
- **Clean URLs**: SEO-friendly routing structure

## Development

```bash
git clone https://github.com/hallya/studio-vroom.git
cd studio-vroom-vroom
pnpm install
pnpm dev        # Development server
pnpm build      # Production build
pnpm preview    # Preview build
pnpm lint       # Code quality check
```

## Architecture Principles

- **Component Isolation**: Single responsibility, one file per component
- **Type Safety**: Comprehensive TypeScript coverage
- **CSS Architecture**: Organized modular stylesheets
- **Performance First**: Optimized 3D rendering pipeline
- **Accessibility First**: WCAG compliant implementation
- **SEO Optimized**: Search engine friendly structure

---

*Professional web application with modern standards and accessibility compliance.*