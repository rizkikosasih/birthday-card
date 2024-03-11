import { Button } from '@material-tailwind/react';
import { useEffect, useRef, useState } from 'react';
import { Animate } from 'react-simple-animate';
import TypeIt from 'typeit-react';
import { MySwal, myNumber } from '../../constants';

const FourthQuote = ({ data }) => {
  const fourthRef = useRef(null);
  const { stage, name, isConfirmed } = data;
  const [fourthStage, setFourthStage] = useState(isConfirmed ? 0 : 1);

  useEffect(() => {
    const handleButtonReply = (evt) => {
      evt.currentTarget.classList.remove('show');
      evt.currentTarget.classList.add('hidden');

      MySwal.fire({
        icon: 'success',
        title: `Kirim jawabannya ke WhatsApp aku, ya!`,
        allowOutsideClick: false,
        allowEscapeKey: false,
        confirmButtonColor: '#378CE7',
        showConfirmButton: true,
        confirmButtonText: 'Ya',
        customClass: {
          title: 'text-sm sm:text-lg md:text-xl'
        }
      }).then(() => {
        const textWA = encodeURIComponent(`Terima kasih ya ucapannya! :)`);
        location.href = `https://api.whatsapp.com/send?phone=${myNumber}&text=${textWA}`;
      });
    };

    const btnReply = document.querySelector('.btn-reply');

    btnReply.addEventListener('click', handleButtonReply);
    return () => {
      btnReply.removeEventListener('click', handleButtonReply);
    };
  }, []);

  return (
    <div className="fourth-quote" ref={fourthRef}>
      <Animate
        play={stage === 3}
        start={{ opacity: 0, transform: 'scale(0)' }}
        end={{ opacity: 1, transform: 'scale(1)' }}>
        <span
          className="text-xl font-semibold mb-2"
          style={{ display: fourthStage === 0 ? 'none' : 'inline-block' }}>
          Happy Birthday <br />
          {name} 🥳
        </span>

        {fourthStage === 0 && (
          <TypeIt
            className="text-lg mb-2"
            options={{
              afterComplete: (instance) => {
                instance.cursor.style.display = 'none';
                setTimeout(() => {
                  instance.element.style.display = 'none';
                  setFourthStage(1);
                }, 500);
              }
            }}>
            canda... wkwkwk
          </TypeIt>
        )}

        {fourthStage > 0 && (
          <TypeIt
            className="text-lg mb-2"
            options={{
              afterComplete: (instance) => {
                instance.cursor.style.display = 'none';
                setFourthStage(2);
              }
            }}>
            Oh ya, semoga di hari spesialmu ini kamu dapat menjadi pribadi yang lebih baik
            yaa.. 🪄🎉🎊
          </TypeIt>
        )}

        <Button
          variant="gradient"
          color="white"
          size="sm"
          className={`btn-reply rounded-full ${fourthStage === 2 ? 'show' : 'hidden'}`}>
          &#128140; balas
        </Button>
      </Animate>
    </div>
  );
};

export default FourthQuote;
