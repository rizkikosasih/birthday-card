import { IconButton } from '@material-tailwind/react';
import { useEffect, useRef, useState } from 'react';
import { Animate, AnimateGroup } from 'react-simple-animate';
import { HeartIcon } from '@heroicons/react/24/solid';

const SecondQuote = ({ data, setData }) => {
  const secondRef = useRef(null);
  const [heart, setHeart] = useState(0);
  const { stage } = data;

  useEffect(() => {
    const handleHeartClick = (evt) => {
      evt.currentTarget.classList.add('hidden');
      setHeart(heart + 1);
      if (heart + 1 >= 4) {
        setData({ ...data, ...{ stage: 2 } });
      }
    };

    const btnHeart = document.querySelectorAll('.btn-heart');

    btnHeart.forEach((btn) => {
      btn.addEventListener('click', handleHeartClick);
    });
    return () => {
      btnHeart.forEach((btn) => {
        btn.removeEventListener('click', handleHeartClick);
      });
    };
  }, [heart]);

  return (
    <div className="second-quote" ref={secondRef}>
      <Animate play={stage === 1} start={{ opacity: 0 }} end={{ opacity: 1 }}>
        <div className="text-xl font-semibold">Tekan hati dibawah ini ya! 👇</div>
        <div className="flex justify-center mt-4 gap-4">
          <AnimateGroup play={stage === 1}>
            {[1, 2, 3, 4].map((item) => {
              return (
                <Animate
                  key={item}
                  sequenceIndex={item}
                  start={{ opacity: 0, transform: 'translateY(-10px)' }}
                  end={{ opacity: 1, transform: 'translateY(0)' }}>
                  <IconButton variant="gradient" color="red" className="btn-heart">
                    <HeartIcon />
                  </IconButton>
                </Animate>
              );
            })}
          </AnimateGroup>
        </div>
      </Animate>
    </div>
  );
};

export default SecondQuote;
