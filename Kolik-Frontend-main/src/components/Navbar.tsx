import { Link } from 'react-router-dom';

const Navbar = ({
  onLoginClick,
  onRegisterClick,
}: {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}) => {
  return (
    <nav className="bg-gradient-to-r from-sky-500 to-purple-500 px-6 py-2 text-white flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 min-h-[64px]">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <div className="w-28 h-auto"> {/* Logo size reduced from w-32 to w-28 */}
          <img
            src="/logos/Kolik_final_design-03.svg"
            alt="Kolik Logo"
            className="w-full h-auto invert"
            style={{
              WebkitMaskImage: 'url(/logos/Kolik_final_design-03.svg)',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskSize: 'contain',
              WebkitMaskPosition: 'center',
              backgroundImage: 'linear-gradient(to right, white, #c084fc)',
              backgroundClip: 'text',
              maskImage: 'url(/logos/Kolik_final_design-03.svg)',
              maskRepeat: 'no-repeat',
              maskSize: 'contain',
              maskPosition: 'center',
              backgroundSize: '100% 100%',
            }}
          />
        </div>
      </Link>

      {/* Search bar */}
      <div className="flex-1 max-w-2xl w-full">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 rounded-full text-black focus:outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 items-center">
        <button onClick={onLoginClick} className="hover:underline">
          Log in
        </button>
        <button
          onClick={onRegisterClick}
          className="bg-white text-blue-600 px-4 py-1 rounded-full font-semibold hover:bg-gray-100"
        >
          Registration
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
