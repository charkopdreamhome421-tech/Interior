import Link from 'next/link';

const Header = () => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/client-showcase', label: 'Client Showcase' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          <Link href="/">Karni Interior</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-800 hover:text-blue-500">
              {link.label}
            </Link>
          ))}
        </div>
        {/* Mobile menu button will be added later if needed */}
      </nav>
    </header>
  );
};

export default Header;
