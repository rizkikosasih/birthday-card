import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const mySwal = withReactContent(Swal);
export const Toast = mySwal.mixin({
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
import catPeekABoo from './../assets/gif/catPeekABoo.gif';
import catPlease from './../assets/gif/catPlease.gif';
import catWink from './../assets/gif/catWink.gif';

export { catForYou, catPeekABoo, catBye };

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
    name: 'catBye',
    src: catBye
  }
];

export const myNumber = '62 nomornya';
