import Footer from '../sections/Footer'; // Adjusted path
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen flex justify-center flex-col items-center">
      <div className="w-[1000px] mx-8 max-[1064px]:w-full max-[548px]:mx-4">
        <nav className="mb-8">
          <Link to="/" className="text-white hover:text-[var(--gray1)] transition-colors duration-300">
            Back to Home
          </Link>
        </nav>
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <p className="text-base text-[var(--gray2)] mb-4">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
        </p>
        <p className="text-base text-[var(--gray2)] mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;