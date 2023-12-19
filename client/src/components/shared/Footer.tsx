'use client'
import FooterLinks from "./footer/footerLinks";
import FooterButtons from "./footer/footerButtons";
import FooterBottom from "./footer/footerBottom";
import FooterHeroSection from "./footer/footerHeroSection";

const Footer = () => {
  return (
    <div className="bg-tertiary-bg text-white px-4 lg:px-12 font-primary">
      <div className="grid grid-cols-1 space-y-12 xs:space-y-20 ss:space-y-0 ss:grid-cols-2 md:grid-cols-3 col-auto py-16 mx-auto ss:mx-0">

        {/* Logo and Quote */}
        <FooterHeroSection />

        {/* Links */}
        <FooterLinks />

        {/* Buttons */}
        <FooterButtons />
        
      </div>

      {/* Footer Bottom */}
      <FooterBottom />

    </div>
  );
};

export default Footer;
