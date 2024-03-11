import { useRef } from 'react';
import { Animate } from 'react-simple-animate';
import gift from './../assets/svg/gift.svg';

const Opening = ({ data, setData }) => {
  const contentRef = useRef(null);
  const { open = false } = data;

  return (
    <div
      className="centered-content"
      ref={contentRef}
      style={{ height: 'inherit', display: !open ? 'flex' : null }}>
      <Animate
        play={open}
        sequenceIndex={0}
        start={{ opacity: 1, transform: 'scale(1)' }}
        end={{ opacity: 0, transform: 'scale(3)' }}
        onComplete={() => (contentRef.current.style.display = 'none')}>
        <img
          loading="lazy"
          src={gift}
          className="opening-image"
          id="gift"
          onClick={() => setData({ open: !open, name: null })}
        />
      </Animate>
      <div className="opening-text">
        <Animate
          play={open}
          start={{ opacity: 1, transform: 'translateY(0)' }}
          end={{ opacity: 0, transform: 'translateY(-100px)' }}>
          Buka Kadonya!
        </Animate>
      </div>
    </div>
  );
};

export default Opening;
