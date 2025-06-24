import Footer from '../sections/Footer'; // Adjusted path since Footer is in sections/
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="min-h-screen flex justify-center flex-col items-center">
      <div className="w-[1000px] mx-8 max-[1064px]:w-full max-[548px]:mx-4">
        <nav className="mb-8">
          <Link to="/" className="text-white hover:text-[var(--gray1)] transition-colors duration-300">
            Back to Home
          </Link>
        </nav>
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <p className="text-base text-[var(--gray2)] mb-4">
          Welcome to our Terms of Service. This page outlines the rules and regulations for using our website.
        </p>
        <p className="text-base text-[var(--gray2)] mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;