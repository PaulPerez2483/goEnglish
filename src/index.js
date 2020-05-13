/* eslint-disable no-case-declarations */
// require('./styles.css');

const countries = [{
    brazil:{
      w: 110,
      h: 110,
      t: 46,
      l: 83,

    },
    china:{
      w: 120,
      h: 120,
      t: 17,
      l: 8
    },
    egypt:{
      w: 110,
      h: 110,
      t: 30,
      l: 19
    },
    germany:{
      w: 110,
      h: 110,
      t: 63,
      l: 60.5
    },
    guatemala:{
      w: 110,
      h: 110,
      t: 60,
      l: 8
    },
    
    hongkong:{
      w: 110,
      h: 110,
      t: 31,
      l: 84
    },
    hungary:{
      w: 100,
      h: 100,
      t: 58,
      l: 72
    },    
    india:{
      w: 110,
      h: 110,
      t: 65,
      l: 35
    },
    indonesia:{
      w: 100,
      h: 100,
      t: 5,
      l: 47.1,
    },

    japan:{
      w: 110,
      h: 110,
      t: 60,
      l: 83
    },
    jerusalem:{
      w: 110,
      h: 110,
      t: 4,
      l: 35
    },
    jordan:{
      w: 135,
      h: 135,
      t: 13,
      l: 20
    },
    malaysia:{
      w: 110,
      h: 110,
      t: 44,
      l: 19
    },
    mexico:{
      w: 135,
      h: 135,
      t: 65,
      l: 47
    },
    pakistan:{
      w: 135,
      h: 135,
      t: 58,
      l: 20
    },
    palestine:{
      w: 135,
      h: 135,
      t: 31,
      l: 6
    },
    singapore:{
      w: 110,
      h: 110,
      t: 4,
      l: 10
    },
    srilanka:{
      w: 120,
      h: 120,
      t: 5,
      l: 58
    },
    taiwan:{
      w: 135,
      h: 135,
      t: 26,
      l: 70
    },
    thailand:{
      w: 100,
      h: 100,
      t: 47,
      l: 8
    },
    turkey:{
      w: 100,
      h: 100,
      t: 13,
      l: 71
    },
    venezuela:{
      w: 135,
      h: 135,
      t: 42,
      l : 71
    },
    vietnam:{
      w: 100,
      h: 100,
      t: 17,
      l: 83             
    },
}];

function windowSize(w, h){
  // console.log(w, h)
  const allButtons =  document.querySelectorAll('.bg_img')

  if(w >= 950 ) {
      document.querySelectorAll('button > img').forEach(img => img.setAttribute('style', 'display:block'))
    // document.querySelector('button > img').setAttribute('style', 'display:block');
    document.getElementsByTagName('body')[0].setAttribute('style', 'overflow: hidden');

    allButtons.forEach((el) => {
     let country = el.getAttribute('data-group')
    //  console.log(country);

     switch (country) {
       case 'brazil':
          el.firstElementChild.setAttribute('style', 'display:none');
          el.setAttribute(`style`, `width: ${countries[0].brazil.w}px; height:${countries[0].brazil.h}px; background-size:cover; background-position:center;`);
          el.parentElement.setAttribute( `style`,  `top: ${countries[0].brazil.t}%; left: ${countries[0].brazil.l}%;`);
          if(w <= 1080) el.parentElement.style.left = `${countries[0].brazil.l + 3}%`;
          break;
       case 'china':
        el.firstElementChild.setAttribute('style', 'display:none');
        el.setAttribute(`style`, `width: ${countries[0].china.w}px; height:${countries[0].china.h}px; background-size:cover; background-position:center;`);
        el.parentElement.setAttribute( `style`,  `top: ${countries[0].china.t}%; left: ${countries[0].china.l}%;`); 
        if(w <= 1080) el.parentElement.style.left = `${countries[0].china.l - 4}%`;

        break;
       case 'egypt':
        el.firstElementChild.setAttribute('style', 'display:none');
        el.setAttribute(`style`,  `width: ${countries[0].egypt.w}px; height:${countries[0].egypt.h}px; background-size:cover; background-position:center;`);
        el.parentElement.setAttribute( `style`,  `top: ${countries[0].egypt.t}%; left: ${countries[0].egypt.l}%;`);
          break;
       case 'germany':
        el.firstElementChild.setAttribute('style', 'display:none');
        el.setAttribute(`style`, `width: ${countries[0].germany.w}px; height:${countries[0].germany.h}px; background-size:cover; background-position:center;`);
        el.parentElement.setAttribute( `style`,  `top: ${countries[0].germany.t}%; left: ${countries[0].germany.l}%;`);
        break;
        case 'guatemala':
          el.firstElementChild.setAttribute('style', 'display:none');
          el.setAttribute(`style`, `width: ${countries[0].guatemala.w}px; height:${countries[0].guatemala.h}px; background-size:cover; background-position:center;`);
          el.parentElement.setAttribute( `style`,  `top: ${countries[0].guatemala.t}%; left: ${countries[0].guatemala.l}%;`);
          if(w <= 1080) el.parentElement.style.left = `${countries[0].guatemala.l - 3}%`;

        break;
       case 'hongkong':
        el.firstElementChild.setAttribute('style', 'display:none');
        el.setAttribute(`style`, `width: ${countries[0].hongkong.w}px; height:${countries[0].hongkong.h}px; background-size:cover; background-position:center;`);
        el.parentElement.setAttribute( `style`,  `top: ${countries[0].hongkong.t}%; left: ${countries[0].hongkong.l}%;`);
       break;
       case 'hungary':
        el.firstElementChild.setAttribute('style', 'display:none');
        el.setAttribute(`style`, `width: ${countries[0].hungary.w}px; height:${countries[0].hungary.h}px; background-size:cover; background-position:center;`);
        el.parentElement.setAttribute( `style`,  `top: ${countries[0].hungary.t}%; left: ${countries[0].hungary.l}%;`);
       break;
       case 'india':
        el.firstElementChild.setAttribute('style', 'display:none');
        el.setAttribute(`style`, `width: ${countries[0].india.w}px; height:${countries[0].india.h}px; background-size:cover; background-position:center;`);
        el.parentElement.setAttribute( `style`,  `top: ${countries[0].india.t}%; left: ${countries[0].india.l}%;`);
        if(w <= 1080) el.parentElement.style.left = `${countries[0].india.l - 3}%`;

       break;
       case 'indonesia':
        el.firstElementChild.setAttribute('style', 'display:none');
        el.setAttribute(`style`, `width: ${countries[0].indonesia.w}px; height:${countries[0].indonesia.h}px; background-size:cover; background-position:center;`);
        el.parentElement.setAttribute( `style`,  `top: ${countries[0].indonesia.t}%; left: ${countries[0].indonesia.l}%;`);
        if(w <= 1080) el.parentElement.style.left = `${countries[0].indonesia.l - 3}%`;

       break;

       case 'japan':
        el.firstElementChild.setAttribute('style', 'display:none');
        el.setAttribute(`style`, `width: ${countries[0].japan.w}px; height:${countries[0].japan.h}px; background-size:cover; background-position:center;`);
        el.parentElement.setAttribute( `style`,  `top: ${countries[0].japan.t}%; left: ${countries[0].japan.l}%;`);
        break;

        case 'jerusalem':
        el.firstElementChild.setAttribute('style', 'display:none');
        el.setAttribute(`style`, `width: ${countries[0].jerusalem.w}px; height:${countries[0].jerusalem.h}px; background-size:cover; background-position:center;`);
        el.parentElement.setAttribute( `style`,  `top: ${countries[0].jerusalem.t}%; left: ${countries[0].jerusalem.l}%;`);
        if(w <= 1080) el.parentElement.style.left = `${countries[0].jerusalem.l - 6}%`;

       break;
       case 'jordan':
        el.firstElementChild.setAttribute('style', 'display:none');
        el.setAttribute(`style`, `width: ${countries[0].jordan.w}px; height:${countries[0].jordan.h}px; background-size:cover; background-position:center;`);
        el.parentElement.setAttribute( `style`,  `top: ${countries[0].jordan.t}%; left: ${countries[0].jordan.l}%;`);        
        if(w <= 1080) el.parentElement.style.left = `${countries[0].jordan.l - 4}%`;
        break;
       case 'malaysia':
        el.firstElementChild.setAttribute('style', 'display:none');
        el.setAttribute(`style`, `width: ${countries[0].malaysia.w}px; height:${countries[0].malaysia.h}px; background-size:cover; background-position:center;`);
        el.parentElement.setAttribute( `style`,  `top: ${countries[0].malaysia.t}%; left: ${countries[0].malaysia.l}%;`);
       break;
       case 'mexico':
        el.firstElementChild.setAttribute('style', 'display:none');
        el.setAttribute(`style`, `width: ${countries[0].mexico.w}px; height:${countries[0].mexico.h}px; background-size:cover; background-position:center;`);
        el.parentElement.setAttribute( `style`,  `top: ${countries[0].mexico.t}%; left: ${countries[0].mexico.l}%;`);
        if(w <= 1080) el.parentElement.style.left = `${countries[0].mexico.l - 2}%`;

       break;
       case 'pakistan':
        el.firstElementChild.setAttribute('style', 'display:none');
        el.setAttribute(`style`, `width: ${countries[0].pakistan.w}px; height:${countries[0].pakistan.h}px; background-size:cover; background-position:center;`);
        el.parentElement.setAttribute( `style`,  `top: ${countries[0].pakistan.t}%; left: ${countries[0].pakistan.l}%;`);
        if(w <= 1080) el.parentElement.style.left = `${countries[0].pakistan.l - 4}%`;

       break;
       case 'palestine':
        el.firstElementChild.setAttribute('style', 'display:none');
        el.setAttribute(`style`, `width: ${countries[0].palestine.w}px; height:${countries[0].palestine.h}px; background-size:cover; background-position:center;`);
        el.parentElement.setAttribute( `style`,  `top: ${countries[0].palestine.t}%; left: ${countries[0].palestine.l}%;`);
        if(w <= 1080) el.parentElement.style.left = `${countries[0].palestine.l - 4}%`;

       break;
       case 'singapore':
        el.firstElementChild.setAttribute('style', 'display:none');
        el.setAttribute(`style`, `width: ${countries[0].singapore.w}px; height:${countries[0].singapore.h}px; background-size:cover; background-position:center;`);
        el.parentElement.setAttribute( `style`,  `top: ${countries[0].singapore.t}%; left: ${countries[0].singapore.l}%;`);
        if(w <= 1080) el.parentElement.style.left = `${countries[0].singapore.l - 4}%`;
        
       break;
       case 'srilanka':
        el.firstElementChild.setAttribute('style', 'display:none');
        el.setAttribute(`style`, `width: ${countries[0].srilanka.w}px; height:${countries[0].srilanka.h}px; background-size:cover; background-position:center;`);
        el.parentElement.setAttribute( `style`,  `top: ${countries[0].srilanka.t}%; left: ${countries[0].srilanka.l}%;`);
       break;
       case 'taiwan':
        el.firstElementChild.setAttribute('style', 'display:none');
        el.setAttribute(`style`, `width: ${countries[0].taiwan.w}px; height:${countries[0].taiwan.h}px; background-size:cover; background-position:center;`);
        el.parentElement.setAttribute( `style`,  `top: ${countries[0].taiwan.t}%; left: ${countries[0].taiwan.l}%;`);
       break;
       case 'thailand':
        el.firstElementChild.setAttribute('style', 'display:none');
        el.setAttribute(`style`, `width: ${countries[0].thailand.w}px; height:${countries[0].thailand.h}px; background-size:cover; background-position:center;`);
        el.parentElement.setAttribute( `style`,  `top: ${countries[0].thailand.t}%; left: ${countries[0].thailand.l}%;`);
       break;
       case 'turkey':
        el.firstElementChild.setAttribute('style', 'display:none');
        el.setAttribute(`style`, `width: ${countries[0].turkey.w}px; height:${countries[0].turkey.h}px; background-size:cover; background-position:center;`);
        el.parentElement.setAttribute( `style`,  `top: ${countries[0].turkey.t}%; left: ${countries[0].turkey.l}%;`);
       break;
       case 'venezuela':
        el.firstElementChild.setAttribute('style', 'display:none');
        el.setAttribute(`style`, `width: ${countries[0].venezuela.w}px; height:${countries[0].venezuela.h}px; background-size:cover; background-position:center;`);
        el.parentElement.setAttribute( `style`,  `top: ${countries[0].venezuela.t}%; left: ${countries[0].venezuela.l}%;`);
       break;
       case 'vietnam':
        el.firstElementChild.setAttribute('style', 'display:none');
        el.setAttribute(`style`, `width: ${countries[0].vietnam.w}px; height:${countries[0].vietnam.h}px; background-size:cover; background-position:center;`);
        el.parentElement.setAttribute( `style`,  `top: ${countries[0].vietnam.t}%; left: ${countries[0].vietnam.l}%;`);
       break;
       default:
         break;
     }

   })

  } else {
    allButtons.forEach( (el) => {
      el.removeAttribute('style');
      el.children[0].setAttribute('style', 'display:block');
      el.children[1].setAttribute('style', 'display:none' );
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


let videoLinks = [...document.querySelectorAll('[data-type=video]')];
let imageLinks = [...document.querySelectorAll('[data-type=image]')];
// console.log(videoLinks);
console.log(imageLinks)

imageLinks.forEach(img => {
  img.addEventListener('click', (img)=>{   
  document.getElementById("lightbox").className = "open";
  document.getElementById('lightbox_content').tabIndex = 1;
  document.getElementById('lightbox').focus();
    console.log(img.currentTarget)
  renderImages(img.currentTarget);
});
});

videoLinks.forEach(video => {
    video.addEventListener('click', (video)=>{   
    document.getElementById("lightbox").className = "open";
    document.getElementById('lightbox_content').tabIndex = 1;
    document.getElementById('lightbox').focus();
      console.log(video.currentTarget)
    renderVideos(video.currentTarget);
  });
});

document.getElementById("close").addEventListener("click", ()=> {
    document.getElementById("lightbox").className = "";
    let iframe = [...document.querySelectorAll('iframe')];
    iframe.forEach(i => i.src = iframe.src);
});

document.getElementById("lightbox").addEventListener("click", (e) => {
  // console.dir(e.target.parentElement);
  let eClick = e.target.parentElement.id;
  if (eClick === "lightbox") {
    document.getElementById("lightbox").className = "";
    let iframe = [...document.querySelectorAll('iframe')];
    iframe.forEach(i => i.src = iframe.src);
  }
});

const renderImages= (img) => {
  let dataEntryId = img.getAttribute('data-entryId').split(',')
  console.log(dataEntryId);
  // console.log(video)
  console.log(img)
  let schoolName = img.getAttribute('data-school-name');
  console.log(img)
  let videoHolder = document.getElementById('video-holder');
  let renderVideo = dataEntryId.map( (_id, idx) => {
    console.log(_id, idx)
    return `<section id="${idx}" class="video-parent ${idx === 0 ? 'show' : 'hide' }" tabindex="${idx + 1}" aria-label="video ${idx + 1} ${schoolName}">
    <div class="img-responsive">  
    <img width="80%" src="src/images/${_id}" alt="${schoolName} - ${idx}">
    <div>
    </section>`

  }).join('');
  document.getElementsByTagName('H2')[0].textContent = schoolName;

  videoHolder.innerHTML = `<div class="video-flex">
  
  ${renderVideo}

    <button tabindex="1" id="right" class="show" aria-label="next item">
       <i class="fa fa-chevron-right" aria-hidden="true"></i>
    </button>

    <button tabindex="2" id="left" class="show" aria-label="previous item">
       <i class="fa fa-chevron-left" aria-hidden="true"></i>
    </button>

  </div>`;
    displayVideo(img)
}


const renderVideos = (video) => {
    let dataEntryId = video.getAttribute('data-entryId').split(',')
    // console.log(dataEntryId);
    let schoolName = video.getAttribute('data-school-name')
    console.log(video)
    let videoHolder = document.getElementById('video-holder');
    let renderVideo = dataEntryId.map( (_id, idx) => {
      console.log(_id, idx)
      return `<section id="${idx}" class="video-parent ${idx === 0 ? 'show' : 'hide' }" tabindex="${idx + 1}" aria-label="video ${idx + 1} for school ${schoolName}">
        <iframe 
          id="kaltura_player_${idx}"
          src="https://cdnapisec.kaltura.com/p/1407311/sp/140731100/embedIframeJs/uiconf_id/45010862/partner_id/1407311?iframeembed=true&playerId=kaltura_player_${idx}&entry_id=${_id}"
          allowfullscreen webkitallowfullscreen mozAllowFullScreen
          allow="false *;
          fullscreen *;
          encrypted-media *"
          frameborder="0">
        </iframe>
      </section>`

    }).join('');



    videoHolder.innerHTML = `<div class="video-flex">
    
    ${renderVideo}

      <button tabindex="1" id="right" class="show" aria-label="next item">
         <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </button>

      <button tabindex="2" id="left" class="show" aria-label="previous item">
         <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </button>

    </div>`;
      displayVideo(video)
}


const schoolTitle = (video, count) => {
  // console.log('line 440 ', video);
  // console.log('line 441 ',count)
  let schoolName = video.getAttribute('data-school-name').split(',')
  // console.log(schoolName)
  document.getElementsByTagName('H2')[0].textContent = schoolName[count];
}


const displayVideo = (video) => {
    
    let count = 0;
    const videos = [...document.querySelectorAll('.video-flex > section')];
    const left = document.getElementById('left');
    const right = document.getElementById('right');
    schoolTitle(video, count)
    right.addEventListener('click', (ev)=> {
      if(count !== videos.length - 1){
     
        console.log('right')
        count = count  +  1
        schoolTitle(video, count)
        let videosID = [...ev.path[2].children].filter(el => el.tagName === 'SECTION');
        console.log(videosID)
        console.log('keeping track of count', count)
        videosID.forEach(video => {
          console.dir(video)
          if(video.id * 1 === count && video.classList.contains('hide')) {
            video.classList.add('show')
            video.classList.remove('hide')
          }else{
            video.classList.remove('show');
            video.classList.add('hide');
          }
        
        });
      }
    })

    left.addEventListener('click', (ev)=> {
      if (count > 0) {
        // schoolTitle(click, count)
        console.log('left')
        count = count - 1
        schoolTitle(video, count)
        let videosID = [...ev.path[2].children].filter(el => el.tagName === 'SECTION');
        console.log(videosID)
        console.log('keeping track of count', count)
        videosID.forEach(video => {
          console.dir(video)
          console.log(count)
          if(video.id * 1 === count && video.classList.contains('hide')) {
            video.classList.add('show')
            video.classList.remove('hide')
          }else{
            video.classList.remove('show');
            video.classList.add('hide');
          }
        
        });
      }
     
  })

}





