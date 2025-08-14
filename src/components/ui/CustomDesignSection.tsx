interface CustomDesignSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
}

export default function CustomDesignSection({
  isExpanded,
  onToggle,
  onKeyDown,
}: CustomDesignSectionProps) {
  return (
    <section
      className={`custom-design-section ${
        isExpanded ? "expanded" : "collapsed"
      }`}
      aria-labelledby="custom-design-heading"
    >
      <header
        className="custom-design-header"
        onClick={onToggle}
        onKeyDown={onKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        aria-controls="custom-design-content"
      >
        <div className="custom-design-header-content">
          <h2
            id="custom-design-heading"
            className="custom-design-title elegant-font"
          >
            Exclusive Custom Helmet
          </h2>
          <p className="custom-design-subtitle elegant-font">
            Your vision, our expertise
          </p>
        </div>
        <div
          className={`expand-indicator ${isExpanded ? "expanded" : ""}`}
        >
          <span className="expand-arrow">▼</span>
        </div>
      </header>

      <div
        id="custom-design-content"
        className={`custom-design-content ${
          isExpanded ? "expanded" : "collapsed"
        }`}
        aria-hidden={!isExpanded}
      >
        <p className="custom-design-description elegant-font">
          Create a <strong>unique design</strong> for your racing helmet.
          Our specialized workshop crafts <em>bespoke artwork</em>
          exclusively for you.
        </p>

        <div
          className="pricing-info"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <span className="price-label elegant-font">Starting from</span>
          <span className="price-amount" itemProp="price" content="1500">
            €1,500
          </span>
          <meta itemProp="priceCurrency" content="EUR" />
          <meta
            itemProp="availability"
            content="https://schema.org/InStock"
          />
        </div>

        <div
          className="custom-design-features"
          role="list"
          aria-label="Custom design service benefits"
        >
          <span className="feature-item" role="listitem">
            ✨ 100% unique design
          </span>
          <span className="feature-item" role="listitem">
            🎨 Handcrafted artwork
          </span>
          <span className="feature-item" role="listitem">
            🏁 Competition approved
          </span>
        </div>
      </div>
    </section>
  );
}
