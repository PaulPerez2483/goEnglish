/* eslint-disable no-case-declarations */
require('./styles.css');
// require('./styles_v2.css');
setTimeout(()=>{
  require('./tobi.min.css');
const T = require('./tobi.min.js');

const tobi = new T({
  autoplayVideo: false
});
},1000)


const countries = [{
    brazil:{
      w: 110,
      h: 110,
      t: 70,
      l: 5,

    },
    china:{
      w: 110,
      h: 110,
      t: 10,
      l: 3
    },
    egypt:{
      w: 110,
      h: 120
    },
    germany:{
      w: 120,
      h: 100
    },
    hongkong:{
      w: 100,
      h: 100
    },
    hungary:{
      w: 130,
      h: 140
    },    
    india:{
      w: 120,
      h: 100
    },
    indonesia:{
      w: 130,
      h: 140
    },
    jerusalem:{
      w: 110,
      h: 120
    },
    jordan:{
      w: 150,
      h: 140
    },
    malaysia:{
      w: 130,
      h: 140
    },
    mexico:{
      w: 120,
      h: 140
    },
    pakistan:{
      w: 120,
      h: 140
    },
    palestine:{
      w: 120,
      h: 140
    },
    srilanka:{
      w: 120,
      h: 140
    },
    taiwan:{
      w: 120,
      h: 140
    },
    thailand:{
      w: 120,
      h: 140
    },
    turkey:{
      w: 120,
      h: 140
    },
    venezuela:{
      w: 120,
      h: 140
    },
    vietnam:{
      w: 120,
      h: 140
    }

}];

function windowSize(w, h){
  console.log(w, h)
  const allButtons =  document.querySelectorAll('.bg_img')

  if(w > 950) {
    document.querySelector('button > img').setAttribute('style', 'display:block');
    document.querySelector('button span').setAttribute('style', 'display:none');
    document.getElementsByTagName('body')[0].setAttribute('style', 'overflow: hidden');

    allButtons.forEach((el) => {
     let country = el.getAttribute('data-group')
     console.log(country);

     switch (country) {
       case 'brazil':
          el.setAttribute(`style`, `width: ${countries[0].brazil.w}px; height:${countries[0].brazil.h}px; background-size:cover; background-position:center;`);
          el.parentElement.setAttribute( `style`,  `top: ${countries[0].brazil.t}%; left: ${countries[0].brazil.l}%;`);
          break;
       case 'china':
        el.setAttribute(`style`, `width: ${countries[0].china.w}px; height:${countries[0].china.h}px; background-size:cover; background-position:center;`);
        console.dir(el)
        el.parentElement.setAttribute( `style`,  `top: ${countries[0].china.t}%; left: ${countries[0].china.l}%;`); 
        break;
       case 'egypt':
        el.setAttribute(`style`,  `width: ${countries[0].egypt.w}px; height:${countries[0].egypt.h}px; background:${countries[0].egypt.bg}; background-size:cover; background-position:center;`);
          break;
       case 'germany':
        el.setAttribute(`style`, `width: ${countries[0].germany.w}px; height:${countries[0].germany.h}px; background:${countries[0].germany.bg}; background-size:cover; background-position:center;`);
       break;
       case 'hongkong':
        el.setAttribute(`style`, `width: ${countries[0].hongkong.w}px; height:${countries[0].hongkong.h}px; background:${countries[0].hongkong.bg}; background-size:cover; background-position:center;`);
       break;
       case 'hungary':
        el.setAttribute(`style`, `width: ${countries[0].hungary.w}px; height:${countries[0].hungary.h}px; background:${countries[0].hungary.bg}; background-size:cover; background-position:center;`);
       break;
       case 'india':
        el.setAttribute(`style`, `width: ${countries[0].india.w}px; height:${countries[0].india.h}px; background:${countries[0].india.bg}; background-size:cover; background-position:center;`);
       break;
       case 'indonesia':
        el.setAttribute(`style`, `width: ${countries[0].indonesia.w}px; height:${countries[0].indonesia.h}px; background:${countries[0].indonesia.bg}; background-size:cover; background-position:center;`);
       break;
       case 'jerusalem':
        el.setAttribute(`style`, `width: ${countries[0].jerusalem.w}px; height:${countries[0].jerusalem.h}px; background:${countries[0].jerusalem.bg}; background-size:cover; background-position:center;`);
       break;
       case 'jordan':
        el.setAttribute(`style`, `width: ${countries[0].jordan.w}px; height:${countries[0].jordan.h}px; background:${countries[0].jordan.bg}; background-size:cover; background-position:center;`);
       break;
       case 'malaysia':
        el.setAttribute(`style`, `width: ${countries[0].malaysia.w}px; height:${countries[0].malaysia.h}px; background:${countries[0].malaysia.bg}; background-size:cover; background-position:center;`);
       break;
       case 'mexico':
        el.setAttribute(`style`, `width: ${countries[0].mexico.w}px; height:${countries[0].mexico.h}px; background:${countries[0].mexico.bg}; background-size:cover; background-position:center;`);
       break;
       case 'pakistan':
        el.setAttribute(`style`, `width: ${countries[0].pakistan.w}px; height:${countries[0].pakistan.h}px; background:${countries[0].pakistan.bg}; background-size:cover; background-position:center;`);
       break;
       case 'palestine':
        el.setAttribute(`style`, `width: ${countries[0].palestine.w}px; height:${countries[0].palestine.h}px; background:${countries[0].palestine.bg}; background-size:cover; background-position:center;`);
       break;
       case 'srilanka':
        el.setAttribute(`style`, `width: ${countries[0].srilanka.w}px; height:${countries[0].srilanka.h}px; background:${countries[0].srilanka.bg}; background-size:cover; background-position:center;`);
       break;
       case 'taiwan':
        el.setAttribute(`style`, `width: ${countries[0].taiwan.w}px; height:${countries[0].taiwan.h}px; background:${countries[0].taiwan.bg}; background-size:cover; background-position:center;`);
       break;
       case 'thailand':
        el.setAttribute(`style`, `width: ${countries[0].thailand.w}px; height:${countries[0].thailand.h}px; background:${countries[0].thailand.bg}; background-size:cover; background-position:center;`);
       break;
       case 'turkey':
        el.setAttribute(`style`, `width: ${countries[0].turkey.w}px; height:${countries[0].turkey.h}px; background:${countries[0].turkey.bg}; background-size:cover; background-position:center;`);
       break;
       case 'venezuela':
        el.setAttribute(`style`, `width: ${countries[0].venezuela.w}px; height:${countries[0].venezuela.h}px; background:${countries[0].venezuela.bg}; background-size:cover; background-position:center;`);
       break;
       case 'vietnam':
        el.setAttribute(`style`, `width: ${countries[0].vietnam.w}px; height:${countries[0].vietnam.h}px; background:${countries[0].vietnam.bg}; background-size:cover; background-position:center;`);
       break;
       default:
         break;
     }

   })

  } else {
    allButtons.forEach( (el) => {
      el.removeAttribute('style');
      document.querySelector('button span').setAttribute('style', 'display:block');
      document.querySelector('button > img').setAttribute('style', 'display:none');
      document.getElementsByTagName('body')[0].setAttribute('style', 'overflow: visible');

    })
  }

}

window.addEventListener('resize', reSize);
window.addEventListener('load', reLoad);

function reSize(){
  let width = this.innerWidth;
  let height = this.innerHeight;
  windowSize(width, height)
}


function reLoad() {
  let width = this.innerWidth;
  windowSize(width, 'load')
}