import { Button } from '@material-tailwind/react';
import z404z from './../assets/svg/z404z.svg';
import { Link } from 'react-router-dom';

const PageNotFound = ({ audioRef }) => {
  audioRef.current.pause();

  return (
    <div className="centered-content">
      <img src={z404z} loading="lazy" className="w-60 h-60" />
      <p className="font-semibold text-red-500 my-3 mx-auto">Page Not Found</p>
      <Link to="/" className="mx-auto">
        <Button variant="gradient" color="blue" className="px-8 mx-auto">
          Home
        </Button>
      </Link>
    </div>
  );
};

export default PageNotFound;
