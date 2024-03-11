import { Button } from '@material-tailwind/react';
import { useRef, useState } from 'react';
import { Animate } from 'react-simple-animate';
import TypeIt from 'typeit-react';

const ThirdQuote = ({ data, setData }) => {
  const thirdRef = useRef(null);
  const [thirdStage, setThirdStage] = useState(0);
  const { stage, name } = data;

  return (
    <>
      <div className="third-quote" ref={thirdRef}>
        <Animate play={stage === 2} start={{ opacity: 0 }} end={{ opacity: 1 }}>
          <TypeIt
            as="span"
            className="font-semibold"
            options={{
              afterComplete: (instance) => {
                instance.cursor.style.display = 'none';
                setTimeout(() => {
                  instance.element.style.display = 'none';
                  setThirdStage(1);
                }, 1000);
              }
            }}>
            Tunggu bentar...
          </TypeIt>

          {thirdStage > 0 && (
            <TypeIt
              as="span"
              className="text-lg"
              options={{
                startDelay: 1000,
                afterComplete: (instance) => {
                  instance.cursor.style.display = 'none';
                  setTimeout(() => {
                    instance.element.style.display = 'none';
                    setThirdStage(2);
                  }, 1000);
                }
              }}>
              Ciee... <br />
              ada yang ultah nih 🤣❤️
            </TypeIt>
          )}

          {thirdStage > 1 && (
            <TypeIt
              as="span"
              className="text-lg mb-2"
              options={{
                afterComplete: (instance) => {
                  instance.cursor.style.display = 'none';
                  setTimeout(() => {
                    setThirdStage(3);
                  }, 1000);
                }
              }}>
              Happy Birthday <br />
              {name} 🥳
            </TypeIt>
          )}

          {thirdStage > 2 && (
            <TypeIt
              as="span"
              className="text-lg mb-2"
              options={{
                afterComplete: (instance) => {
                  instance.cursor.style.display = 'none';
                  setTimeout(() => {
                    setThirdStage(4);
                  }, 1000);
                }
              }}>
              Nambah tua aja ya, hehe
            </TypeIt>
          )}

          {thirdStage > 3 && (
            <TypeIt
              as="span"
              className="text-lg mb-2"
              options={{
                afterComplete: (instance) => {
                  instance.cursor.style.display = 'none';
                  setTimeout(() => {
                    setThirdStage(5);
                  }, 1000);
                }
              }}>
              Moga panjang umur ❤️
            </TypeIt>
          )}

          {thirdStage > 4 && (
            <TypeIt
              as="span"
              className="text-lg mb-2"
              options={{
                afterComplete: (instance) => {
                  instance.cursor.style.display = 'none';
                  setTimeout(() => setThirdStage(6), 1000);
                }
              }}>
              Sehat selalu ya!
            </TypeIt>
          )}
        </Animate>
      </div>

      {thirdStage === 6 && (
        <Button variant="gradient" color="white" size="sm" className="rounded-full">
          &#128140; lanjut
        </Button>
      )}
    </>
  );
};

export default ThirdQuote;
