export default function BrandHeader() {
  return (
    <header className="main-title-section" role="banner">
      <div className="brand-header">
        <h1
          className="main-title motogp-title"
          aria-label="Studio Vroom - Custom Helmet Design Studio"
        >
          Studio Vroom
        </h1>
        <p
          className="main-tagline elegant-font"
          role="text"
          aria-describedby="main-description"
        >
          Art on helmet
        </p>
        <p
          id="main-description"
          className="main-description elegant-font"
          role="text"
        >
          Designs dedicated to racing
        </p>
      </div>
    </header>
  );
}
