import { Link } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-[95%] mx-auto rounded-full transition-shadow duration-300 ${
            scrolled ? "shadow-xl" : "shadow-lg"
          }`}
          style={{ backgroundColor: 'rgb(39, 89, 83)' }}
        >
          <div className="flex items-center justify-between h-16 sm:h-20 px-6 sm:px-8">
            <Link to="/" className="flex-shrink-0" onClick={closeMenu}>
              <Logo className="h-10 sm:h-12 w-auto" />
            </Link>

            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/services"
                className="bg-white text-[rgb(39,89,83)] px-4 py-2 rounded-full hover:bg-[rgb(39,89,83)] hover:text-white hover:border-2 hover:border-white transition-all duration-200"
              >
                Services
              </Link>
              <Link
                to="/about-us"
                className="bg-white text-[rgb(39,89,83)] px-4 py-2 rounded-full hover:bg-[rgb(39,89,83)] hover:text-white hover:border-2 hover:border-white transition-all duration-200"
              >
                About Us
              </Link>
              <Link
                to="/our-work"
                className="bg-white text-[rgb(39,89,83)] px-4 py-2 rounded-full hover:bg-[rgb(39,89,83)] hover:text-white hover:border-2 hover:border-white transition-all duration-200"
              >
                Our Work
              </Link>
              <Link
                to="/contact-us"
                className="bg-white text-[rgb(39,89,83)] px-4 py-2 rounded-full hover:bg-[rgb(39,89,83)] hover:text-white hover:border-2 hover:border-white transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>

            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
          />
          <div className="fixed top-24 left-4 right-4 rounded-3xl overflow-hidden shadow-2xl max-h-[80vh] overflow-y-auto" style={{ backgroundColor: 'rgb(39, 89, 83)' }}>
            <div className="px-4 py-6 space-y-3">
              <Link
                to="/services"
                className="block text-[rgb(39,89,83)] text-center border-2 border-[rgb(39,89,83)] px-4 py-3 rounded-full hover:bg-[rgb(39,89,83)] hover:text-white transition-all duration-200"
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link
                to="/about-us"
                className="block text-[rgb(39,89,83)] text-center border-2 border-[rgb(39,89,83)] px-4 py-3 rounded-full hover:bg-[rgb(39,89,83)] hover:text-white transition-all duration-200"
                onClick={closeMenu}
              >
                About Us
              </Link>
              <Link
                to="/our-work"
                className="block text-[rgb(39,89,83)] text-center border-2 border-[rgb(39,89,83)] px-4 py-3 rounded-full hover:bg-[rgb(39,89,83)] hover:text-white transition-all duration-200"
                onClick={closeMenu}
              >
                Our Work
              </Link>
              <Link
                to="/contact-us"
                className="block text-[rgb(39,89,83)] text-center border-2 border-[rgb(39,89,83)] px-4 py-3 rounded-full hover:bg-[rgb(39,89,83)] hover:text-white transition-all duration-200"
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
