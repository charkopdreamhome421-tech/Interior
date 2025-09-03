import Link from 'next/link';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-white">
          <Link href="/">Karni Interior</Link>
        </div>
        <div>
          <button className="px-6 py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
