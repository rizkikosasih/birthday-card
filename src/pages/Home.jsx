import { useEffect, useState } from 'react';
import Opening from '../components/Opening';
import { MySwal, Toast } from '../constants';
import ParallaxStars from '../components/ParallaxStars';
import Greeting from '../components/Greeting';

const Home = () => {
  const [data, setData] = useState({ open: false, name: null });

  // const hmr = import.meta.hot;
  // hmr.on('vite:beforeUpdate', () => setData({ open: false, name: null }));

  const showInputName = async () => {
    const { value: inputName } = await MySwal.fire({
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
      MySwal.fire({
        icon: 'error',
        title: 'Ups',
        html: `Masukin nama kamu<br/>Terlebih dahulu ya!`,
        showConfirmButton: true,
        confirmButtonColor: '#378CE7'
      }).then(() => showInputName());
    }
  };

  useEffect(() => {
    if (data.open && !data.name) {
      setTimeout(() => showInputName(), 250);
    }
  }, [data]);

  return (
    <div className="container-parallax-stars overflow-hidden">
      <ParallaxStars />

      <Opening data={data} setData={setData} />

      {data.open && data.name && <Greeting data={data} setData={setData} />}
    </div>
  );
};

export default Home;
