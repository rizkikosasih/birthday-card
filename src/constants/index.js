import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const MySwal = withReactContent(Swal);
export const Toast = MySwal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
});

import catBye from './../assets/gif/catBye.gif';
import catDancing from './../assets/gif/catDancing.gif';
import catForYou from './../assets/gif/catForYou.gif';
import catHeart from './../assets/gif/catHeart.gif';
import catMochi from './../assets/gif/catMochi.gif';
import catPeach from './../assets/gif/catPeach.gif';
import catPeekABoo from './../assets/gif/catPeekABoo.gif';
import catPlease from './../assets/gif/catPlease.gif';
import catWink from './../assets/gif/catWink.gif';
import catXD from './../assets/gif/catXD.gif';
import catYeah from './../assets/gif/catYeah.gif';

export {
  catBye,
  catDancing,
  catForYou,
  catHeart,
  catMochi,
  catPeach,
  catPeekABoo,
  catPlease,
  catWink,
  catXD,
  catYeah
};

export const stickers = [
  {
    name: 'catWink',
    src: catWink
  },
  {
    name: 'catPlease',
    src: catPlease
  },
  {
    name: 'catHeart',
    src: catHeart
  },
  {
    name: 'catDancing',
    src: catDancing
  },
  {
    name: 'catForYou',
    src: catForYou
  },
  {
    name: 'catMochi',
    src: catMochi
  },
  {
    name: 'catPeach',
    src: catPeach
  },
  {
    name: 'catPeekABoo',
    src: catPeekABoo
  },
  {
    name: 'catXD',
    src: catXD
  },
  {
    name: 'catYeah',
    src: catYeah
  },
  {
    name: 'catBye',
    src: catBye
  }
];

export const greetingText = ['Aku punya sesuatu nih 😜💝'];
