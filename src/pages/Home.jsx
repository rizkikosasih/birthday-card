import { useEffect, useState } from 'react';
import Opening from '../components/Opening';
import { mySwal } from '../constants';
import Greeting from '../components/Greeting';

const Home = ({ audioRef }) => {
  audioRef.current.pause();
  const [data, setData] = useState({ open: false, name: null });
  const { open, name, stage = 0 } = data;

  const showInputName = async () => {
    const { value: inputName } = await mySwal.fire({
      title: 'Masukkan Nama Kamu',
      input: 'text',
      inputPlaceholder: 'Nama Kamu',
      allowEscapeKey: false,
      allowOutsideClick: false,
      showConfirmButton: true,
      confirmButtonColor: '#378CE7',
      customClass: {
        title: 'text-lg sm:text-xl md:text-2xl'
      }
    });

    if (inputName && inputName.trim()) {
      setData({ open: data.open, name: inputName });
    } else {
      mySwal
        .fire({
          icon: 'error',
          title: 'Ups',
          html: `Masukin nama kamu<br/>Terlebih dahulu ya!`,
          showConfirmButton: true,
          confirmButtonColor: '#378CE7'
        })
        .then(() => showInputName());
    }
  };

  useEffect(() => {
    if (open && !name) {
      setTimeout(() => showInputName(), 250);
    }

    if (stage > 1 && audioRef.current.paused) {
      audioRef.current.play();
    }

    const wallpaper = document.querySelector('.wallpaper');
    if (stage % 2 === 1) {
      wallpaper.style.transform = 'scale(1.3)';
    } else {
      wallpaper.style.transform = 'scale(1)';
    }
  }, [data]);

  return (
    <div className="container-parallax-stars">
      <img loading="lazy" className="wallpaper" />

      <Opening data={data} setData={setData} />

      {open && name && <Greeting data={data} setData={setData} />}
    </div>
  );
};

export default Home;
