import Footer from '../sections/Footer';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex justify-center flex-col items-center">
      <div className="w-[1000px] mx-8 max-[1064px]:w-full max-[548px]:mx-4">
        <h1 className="text-4xl font-bold text-white mb-8">404 - Page Not Found</h1>
        <p className="text-base text-[var(--gray2)] mb-4">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link to="/" className="text-white hover:text-[var(--gray1)] transition-colors duration-300">
          Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;