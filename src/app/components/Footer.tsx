import { Link } from 'react-router-dom';
import { Linkedin, Github, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-transparent to-gold-darker/5 border-t border-gold-light/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl text-gold-deepest">Ella Mae Hecto</h3>
            <p className="text-gold-dark">
              Operations & Customer Experience Specialist
            </p>
            <p className="text-sm text-gold-medium">
              Transforming chaos into streamlined excellence, one workflow at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-gold-darker">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/about"
                className="text-gold-dark hover:text-gold-deepest transition-colors w-fit"
              >
                About
              </Link>
              <Link
                to="/work"
                className="text-gold-dark hover:text-gold-deepest transition-colors w-fit"
              >
                Case Studies
              </Link>
              <Link
                to="/services"
                className="text-gold-dark hover:text-gold-deepest transition-colors w-fit"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-gold-dark hover:text-gold-deepest transition-colors w-fit"
              >
                Get in Touch
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-gold-darker">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:hectoellamae@gmail.com"
                className="flex items-center space-x-2 text-gold-dark hover:text-gold-deepest transition-colors w-fit group"
              >
                <Mail size={18} className="group-hover:text-gold-highlight transition-colors" />
                <span>hectoellamae@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/ellamae-hecto/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gold-dark hover:text-gold-deepest transition-colors w-fit group"
              >
                <Linkedin size={18} className="group-hover:text-gold-highlight transition-colors" />
                <span>LinkedIn</span>
              </a>
              <div className="flex items-center space-x-2 text-gold-medium">
                <MapPin size={18} />
                <span>Bacolod City, Philippines</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gold-light/20">
          <p className="text-center text-sm text-gold-medium">
            © {currentYear} Ella Mae Hecto. Built with precision and care.
          </p>
        </div>
      </div>
    </footer>
  );
}
