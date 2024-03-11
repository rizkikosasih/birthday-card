import { useRef, useState } from 'react';
import { Animate } from 'react-simple-animate';
import TypeIt from 'typeit-react';

const FirstQuote = () => {
  const firstRef = useRef(null);
  const [showNext, setShowNext] = useState(false);

  return (
    <div className="first-quote" ref={firstRef}>
      <TypeIt
        as="span"
        options={{
          afterComplete: (instance) => {
            setTimeout(() => (instance.cursor.style.display = 'none'), 100);
            setShowNext(true);
          }
        }}>
        Aku punya sesuatu nih 😜💝
      </TypeIt>

      {showNext && (
        <Animate
          play={showNext}
          start={{
            opacity: 0,
            textAlign: 'center',
            margin: '0 24px 0'
          }}
          end={{
            opacity: 1,
            textAlign: 'right',
            margin: '24px 0 0'
          }}>
          <span className="text-xs">Ketuk untuk lanjut</span>
        </Animate>
      )}
    </div>
  );
};

export default FirstQuote;
