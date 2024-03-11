import { Button } from '@material-tailwind/react';
import { useEffect, useRef, useState } from 'react';
import { Animate } from 'react-simple-animate';
import TypeIt from 'typeit-react';
import { mySwal, catForYou, catPeekABoo } from '../../constants';

const ThirdQuote = ({ data, setData }) => {
  const thirdRef = useRef(null);
  const [thirdStage, setThirdStage] = useState(0);
  const { stage, name } = data;

  useEffect(() => {
    const handleButtonNext = (evt) => {
      if (thirdStage === 6) {
        evt.currentTarget.classList.remove('show');
        evt.currentTarget.classList.add('hidden');

        mySwal
          .fire({
            imageUrl: catPeekABoo,
            imageWidth: 150,
            imageHeight: 150,
            allowOutsideClick: false,
            allowEscapeKey: false,
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonColor: '#378CE7',
            cancelButtonColor: '#FF407D',
            confirmButtonText: 'Mau',
            cancelButtonText: 'Engga',
            title: `${name}, mau kado gak nih? 🫣`,
            html: `<span>Ayo jawab 😆</span>`,
            customClass: {
              title: 'text-sm sm:text-lg md:text-xl',
              image: 'rounded-full shadow-lg'
            }
          })
          .then((result) => {
            mySwal.fire({
              imageUrl: catForYou,
              imageWidth: 150,
              imageHeight: 150,
              allowEnterKey: false,
              allowOutsideClick: false,
              allowEscapeKey: false,
              showCancelButton: false,
              showConfirmButton: false,
              title: result.isConfirmed
                ? 'Gajadi deh soalnya kamu bau wleee 😜'
                : 'Yaudah kalo gamau mah 😅',
              timer: 3000,
              timerProgressBar: true,
              customClass: {
                title: 'text-sm sm:text-lg md:text-xl',
                image: 'rounded-full shadow-lg'
              },
              willClose: () =>
                setData({ ...data, ...{ stage: 3, isConfirmed: result.isConfirmed } })
            });
          });
      }
    };

    const btnNext = document.querySelector('.btn-next');

    btnNext.addEventListener('click', handleButtonNext);
    return () => {
      btnNext.removeEventListener('click', handleButtonNext);
    };
  }, [thirdStage]);

  return (
    <div className="third-quote" ref={thirdRef}>
      <Animate play={stage === 2} start={{ opacity: 0 }} end={{ opacity: 1 }}>
        <TypeIt
          className="text-lg"
          options={{
            afterComplete: (instance) => {
              instance.cursor.style.display = 'none';
              setTimeout(() => {
                instance.element.style.display = 'none';
                setThirdStage(1);
              }, 500);
            }
          }}>
          Tunggu bentar...
        </TypeIt>

        {thirdStage > 0 && (
          <TypeIt
            className="text-lg"
            options={{
              afterComplete: (instance) => {
                instance.cursor.style.display = 'none';
                setTimeout(() => {
                  instance.element.style.display = 'none';
                  setThirdStage(2);
                }, 500);
              }
            }}>
            Ciee... <br />
            ada yang ultah nih 🤣🤩
          </TypeIt>
        )}

        {thirdStage > 1 && (
          <TypeIt
            className="text-xl font-semibold mb-2"
            options={{
              afterComplete: (instance) => {
                instance.cursor.style.display = 'none';
                setTimeout(() => {
                  setThirdStage(3);
                }, 500);
              }
            }}>
            Happy Birthday <br />
            {name} 🥳
          </TypeIt>
        )}

        {thirdStage > 2 && (
          <TypeIt
            className="text-lg mb-2"
            options={{
              afterComplete: (instance) => {
                instance.cursor.style.display = 'none';
                setTimeout(() => {
                  setThirdStage(4);
                }, 500);
              }
            }}>
            Nambah tua aja ya, hehe
          </TypeIt>
        )}

        {thirdStage > 3 && (
          <TypeIt
            className="text-lg mb-2"
            options={{
              afterComplete: (instance) => {
                instance.cursor.style.display = 'none';
                setTimeout(() => {
                  setThirdStage(5);
                }, 500);
              }
            }}>
            Moga panjang umur 🤲🏼
          </TypeIt>
        )}

        {thirdStage > 4 && (
          <TypeIt
            className="text-lg mb-2"
            options={{
              afterComplete: (instance) => {
                instance.cursor.style.display = 'none';
                setTimeout(() => setThirdStage(6), 500);
              }
            }}>
            Sehat selalu ya!
          </TypeIt>
        )}

        <Button
          variant="gradient"
          color="white"
          size="sm"
          className={`btn-next rounded-full ${thirdStage === 6 ? 'show cursor-pointer' : 'hidden cursor-default'}`}>
          &#128140; lanjut
        </Button>
      </Animate>
    </div>
  );
};

export default ThirdQuote;
