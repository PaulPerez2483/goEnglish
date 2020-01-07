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
    lebanon:{
      w: 120,
      h: 100
    },
    italy:{
      w: 130,
      h: 110
    },
    mexico:{
      w: 110,
      h: 120
    },
    spain:{
      w: 120,
      h: 100
    },
    arabia:{
      w: 100,
      h: 100
    },
    denmark:{
      w: 130,
      h: 140
    },    
    chile:{
      w: 120,
      h: 100
    },
    france:{
      w: 130,
      h: 140
    },
    brazil:{
      w: 110,
      h: 120
    },
    martinique:{
      w: 150,
      h: 140
    },
    egypt:{
      w: 130,
      h: 140
    }
}];

function windowSize(w, h){
  console.log(w, h)
  const allButtons =  document.querySelectorAll('.bg_img')

  if(w > 950) {
   allButtons.forEach((el) => {
     let country = el.getAttribute('data-group')
     console.log(country);

     switch (country) {
       case 'lebanon':
          el.setAttribute(`style`, `width: ${countries[0].lebanon.w}px; height:${countries[0].lebanon.h}px;`);
         break;
       case 'italy':
        el.setAttribute(`style`, `width: ${countries[0].italy.w}px; height:${countries[0].italy.h}px;`);
         break;
       case 'mexico':
        el.setAttribute(`style`, `width: ${countries[0].mexico.w}px; height:${countries[0].mexico.h}px;`);
          break;
       case 'spain':
        el.setAttribute(`style`, `width: ${countries[0].spain.w}px; height:${countries[0].spain.h}px;`);
       break;
       case 'arabia':
        el.setAttribute(`style`, `width: ${countries[0].arabia.w}px; height:${countries[0].arabia.h}px;`);
       break;
       case 'denmark':
        el.setAttribute(`style`, `width: ${countries[0].denmark.w}px; height:${countries[0].denmark.h}px;`);
       break;
       case 'chile':
        el.setAttribute(`style`, `width: ${countries[0].chile.w}px; height:${countries[0].chile.h}px;`);
       break;
       case 'france':
        el.setAttribute(`style`, `width: ${countries[0].france.w}px; height:${countries[0].france.h}px;`);
       break;
       case 'brazil':
        el.setAttribute(`style`, `width: ${countries[0].brazil.w}px; height:${countries[0].brazil.h}px;`);
       break;
       case 'martinique':
        el.setAttribute(`style`, `width: ${countries[0].martinique.w}px; height:${countries[0].martinique.h}px;`);
       break;
       case 'egypt':
        el.setAttribute(`style`, `width: ${countries[0].egypt.w}px; height:${countries[0].egypt.h}px;`);
       break;
       default:
         break;
     }

   })

  } else {
    allButtons.forEach( (el) => {
      el.removeAttribute('style');
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