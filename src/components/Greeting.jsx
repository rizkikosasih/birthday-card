import TypeIt from 'typeit-react';
import { stickers } from './../constants';
import { useEffect, useState } from 'react';
import { Animate } from 'react-simple-animate';
import FirstQuote from './quotes/FirstQuote';
import SecondQuote from './quotes/SecondQuote';
import ThirdQuote from './quotes/ThirdQuote';
import FourthQuote from './quotes/FourthQuote';

const Greeting = ({ data, setData }) => {
  const [imageLoad, setImageLoad] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const { stage = 0, name } = data;

  useEffect(() => {
    const handleQuoteClick = () => {
      if (stage === 0) {
        setData({ ...data, ...{ stage: 1 } });
      }
    };

    const blockquote = document.querySelector('blockquote#quote');

    blockquote.addEventListener('click', handleQuoteClick);
    return () => {
      blockquote.removeEventListener('click', handleQuoteClick);
    };
  }, [data]);

  return (
    <div
      className="centered-content"
      style={{ height: 'inherit', top: stage === 2 ? '45%' : '50%' }}>
      <div className="stickers">
        {stickers.map((item, index) => {
          return (
            <img
              key={index}
              src={item.src}
              style={{
                display: index === stage ? 'block' : null,
                filter: imageLoad ? 'blur(0)' : 'blur(10px)'
              }}
              onLoad={() => setImageLoad(true)}
            />
          );
        })}
      </div>

      <p className="head-greeting">
        <TypeIt
          options={{
            afterComplete: (instance) => {
              setTimeout(() => (instance.cursor.style.display = 'none'), 100);
              setShowNext(true);
            }
          }}>
          Halo {name} 👋🪅
        </TypeIt>
      </p>

      <Animate
        play={showNext}
        start={{ opacity: 0, transform: 'scale(0)', transition: 'all 1s ease' }}
        end={{ opacity: 1, transform: 'scale(1)', transition: 'all 1s ease' }}>
        <blockquote data-text="㋡" id="quote">
          {stage === 0 && <FirstQuote />}

          {stage === 1 && <SecondQuote data={data} setData={setData} />}

          {stage === 2 && <ThirdQuote data={data} setData={setData} />}

          {stage === 3 && <FourthQuote data={data} />}
        </blockquote>
      </Animate>
    </div>
  );
};

export default Greeting;
