import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Karni Interior</h2>
            <p className="text-gray-400">
              Your one-stop solution for all your interior design needs.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-brand-primary transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-brand-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Modular Kitchen</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Wardrobes</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Living Room Design</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Full Home Interior</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">123 Interior Lane, Mumbai, IN</p>
            <p className="text-gray-400">contact@karniinterior.com</p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Karni Interior. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
