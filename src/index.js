/* eslint-disable no-case-declarations */
// require('./styles.css');

const countries = [{
  armenia: {
    w: 110,
    h: 110,
    t: 63,
    l: 35
  },

  brazil: {
    w: 110,
    h: 110,
    t: 44,
    l: 70,

  },
  ecuador: {
    w: 120,
    h: 120,
    t: 18,
    l: 8
  },
  egypt: {
    w: 110,
    h: 110,
    t: 31,
    l: 18
  },
  gaza: {
    w: 110,
    h: 110,
    t: 63,
    l: 60.5
  },
  guatemala: {
    w: 135,
    h: 135,
    t: 60,
    l: 20
  },

  hongkong: {
    w: 110,
    h: 110,
    t: 41,
    l: 82
  },
  india: {
    w: 110,
    h: 110,
    t: 65,
    l: 35
  },
  indonesia: {
    w: 100,
    h: 100,
    t: 5,
    l: 47.1,
  },

  japan: {
    w: 110,
    h: 110,
    t: 60,
    l: 73
  },
  macau: {
    w: 135,
    h: 135,
    t: 13,
    l: 20
  },
  malaysia: {
    w: 110,
    h: 110,
    t: 45,
    l: 21
  },
  mexico: {
    w: 135,
    h: 135,
    t: 65,
    l: 47
  },
  palestine: {
    w: 135,
    h: 135,
    t: 43,
    l: 7
  },
  poland: {
    w: 120,
    h: 120,
    t: 5,
    l: 58
  },
  singapore: {
    w: 110,
    h: 110,
    t: 4,
    l: 34
  },

  taiwan: {
    w: 135,
    h: 135,
    t: 26,
    l: 70
  },
  turkey: {
    w: 100,
    h: 100,
    t: 13,
    l: 71
  },
}];

function windowSize(w, h) {
  // console.log(w, h)
  const allButtons = document.querySelectorAll('.bg_img')

  if (w >= 950) {
    document.querySelectorAll('button > img').forEach(img => img.setAttribute('style', 'display:block'))
    // document.querySelector('button > img').setAttribute('style', 'display:block');
    document.getElementsByTagName('body')[0].setAttribute('style', 'overflow: hidden');

    allButtons.forEach((el) => {
      let country = el.getAttribute('data-group')
      //  console.log(country);

      switch (country) {
        case 'armenia':
          el.firstElementChild.setAttribute('style', 'display:none');
          el.setAttribute(`style`, `width: ${countries[0].armenia.w}px; height:${countries[0].armenia.h}px; background-size:cover; background-position:center;`);
          el.parentElement.setAttribute(`style`, `top: ${countries[0].armenia.t}%; left: ${countries[0].armenia.l}%;`);
          break;
        case 'brazil':
          el.firstElementChild.setAttribute('style', 'display:none');
          el.setAttribute(`style`, `width: ${countries[0].brazil.w}px; height:${countries[0].brazil.h}px; background-size:cover; background-position:center;`);
          el.parentElement.setAttribute(`style`, `top: ${countries[0].brazil.t}%; left: ${countries[0].brazil.l}%;`);
          if (w <= 1080) el.parentElement.style.left = `${countries[0].brazil.l + 3}%`;
          break;
        case 'ecuador':
          el.firstElementChild.setAttribute('style', 'display:none');
          el.setAttribute(`style`, `width: ${countries[0].ecuador.w}px; height:${countries[0].ecuador.h}px; background-size:cover; background-position:center;`);
          el.parentElement.setAttribute(`style`, `top: ${countries[0].ecuador.t}%; left: ${countries[0].ecuador.l}%;`);
          if (w <= 1080) el.parentElement.style.left = `${countries[0].ecuador.l - 4}%`;

          break;
        case 'egypt':
          el.firstElementChild.setAttribute('style', 'display:none');
          el.setAttribute(`style`, `width: ${countries[0].egypt.w}px; height:${countries[0].egypt.h}px; background-size:cover; background-position:center;`);
          el.parentElement.setAttribute(`style`, `top: ${countries[0].egypt.t}%; left: ${countries[0].egypt.l}%;`);
          break;
        case 'gaza':
          el.firstElementChild.setAttribute('style', 'display:none');
          el.setAttribute(`style`, `width: ${countries[0].gaza.w}px; height:${countries[0].gaza.h}px; background-size:cover; background-position:center;`);
          el.parentElement.setAttribute(`style`, `top: ${countries[0].gaza.t}%; left: ${countries[0].gaza.l}%;`);
          break;
        case 'guatemala':
          el.firstElementChild.setAttribute('style', 'display:none');
          el.setAttribute(`style`, `width: ${countries[0].guatemala.w}px; height:${countries[0].guatemala.h}px; background-size:cover; background-position:center;`);
          el.parentElement.setAttribute(`style`, `top: ${countries[0].guatemala.t}%; left: ${countries[0].guatemala.l}%;`);
          if (w <= 1080) el.parentElement.style.left = `${countries[0].guatemala.l - 3}%`;

          break;
        case 'hongkong':
          el.firstElementChild.setAttribute('style', 'display:none');
          el.setAttribute(`style`, `width: ${countries[0].hongkong.w}px; height:${countries[0].hongkong.h}px; background-size:cover; background-position:center;`);
          el.parentElement.setAttribute(`style`, `top: ${countries[0].hongkong.t}%; left: ${countries[0].hongkong.l}%;`);
          break;

        case 'india':
          el.firstElementChild.setAttribute('style', 'display:none');
          el.setAttribute(`style`, `width: ${countries[0].india.w}px; height:${countries[0].india.h}px; background-size:cover; background-position:center;`);
          el.parentElement.setAttribute(`style`, `top: ${countries[0].india.t}%; left: ${countries[0].india.l}%;`);
          if (w <= 1080) el.parentElement.style.left = `${countries[0].india.l - 3}%`;

          break;
        case 'indonesia':
          el.firstElementChild.setAttribute('style', 'display:none');
          el.setAttribute(`style`, `width: ${countries[0].indonesia.w}px; height:${countries[0].indonesia.h}px; background-size:cover; background-position:center;`);
          el.parentElement.setAttribute(`style`, `top: ${countries[0].indonesia.t}%; left: ${countries[0].indonesia.l}%;`);
          if (w <= 1080) el.parentElement.style.left = `${countries[0].indonesia.l - 3}%`;

          break;

        case 'japan':
          el.firstElementChild.setAttribute('style', 'display:none');
          el.setAttribute(`style`, `width: ${countries[0].japan.w}px; height:${countries[0].japan.h}px; background-size:cover; background-position:center;`);
          el.parentElement.setAttribute(`style`, `top: ${countries[0].japan.t}%; left: ${countries[0].japan.l}%;`);
          break;

        case 'macau':
          el.firstElementChild.setAttribute('style', 'display:none');
          el.setAttribute(`style`, `width: ${countries[0].macau.w}px; height:${countries[0].macau.h}px; background-size:cover; background-position:center;`);
          el.parentElement.setAttribute(`style`, `top: ${countries[0].macau.t}%; left: ${countries[0].macau.l}%;`);
          if (w <= 1080) el.parentElement.style.left = `${countries[0].macau.l - 4}%`;
          break;
        case 'malaysia':
          el.firstElementChild.setAttribute('style', 'display:none');
          el.setAttribute(`style`, `width: ${countries[0].malaysia.w}px; height:${countries[0].malaysia.h}px; background-size:cover; background-position:center;`);
          el.parentElement.setAttribute(`style`, `top: ${countries[0].malaysia.t}%; left: ${countries[0].malaysia.l}%;`);
          break;
        case 'mexico':
          el.firstElementChild.setAttribute('style', 'display:none');
          el.setAttribute(`style`, `width: ${countries[0].mexico.w}px; height:${countries[0].mexico.h}px; background-size:cover; background-position:center;`);
          el.parentElement.setAttribute(`style`, `top: ${countries[0].mexico.t}%; left: ${countries[0].mexico.l}%;`);
          if (w <= 1080) el.parentElement.style.left = `${countries[0].mexico.l - 2}%`;

          break;
        case 'palestine':
          el.firstElementChild.setAttribute('style', 'display:none');
          el.setAttribute(`style`, `width: ${countries[0].palestine.w}px; height:${countries[0].palestine.h}px; background-size:cover; background-position:center;`);
          el.parentElement.setAttribute(`style`, `top: ${countries[0].palestine.t}%; left: ${countries[0].palestine.l}%;`);
          if (w <= 1080) el.parentElement.style.left = `${countries[0].palestine.l - 4}%`;

          break;

        case 'poland':
          el.firstElementChild.setAttribute('style', 'display:none');
          el.setAttribute(`style`, `width: ${countries[0].poland.w}px; height:${countries[0].poland.h}px; background-size:cover; background-position:center;`);
          el.parentElement.setAttribute(`style`, `top: ${countries[0].poland.t}%; left: ${countries[0].poland.l}%;`);
          break;

        case 'singapore':
          el.firstElementChild.setAttribute('style', 'display:none');
          el.setAttribute(`style`, `width: ${countries[0].singapore.w}px; height:${countries[0].singapore.h}px; background-size:cover; background-position:center;`);
          el.parentElement.setAttribute(`style`, `top: ${countries[0].singapore.t}%; left: ${countries[0].singapore.l}%;`);
          if (w <= 1080) el.parentElement.style.left = `${countries[0].singapore.l - 4}%`;

          break;
        case 'taiwan':
          el.firstElementChild.setAttribute('style', 'display:none');
          el.setAttribute(`style`, `width: ${countries[0].taiwan.w}px; height:${countries[0].taiwan.h}px; background-size:cover; background-position:center;`);
          el.parentElement.setAttribute(`style`, `top: ${countries[0].taiwan.t}%; left: ${countries[0].taiwan.l}%;`);
          break;
        case 'turkey':
          el.firstElementChild.setAttribute('style', 'display:none');
          el.setAttribute(`style`, `width: ${countries[0].turkey.w}px; height:${countries[0].turkey.h}px; background-size:cover; background-position:center;`);
          el.parentElement.setAttribute(`style`, `top: ${countries[0].turkey.t}%; left: ${countries[0].turkey.l}%;`);
          break;
        default:
          break;
      }

    })

  } else {
    allButtons.forEach((el) => {
      el.removeAttribute('style');
      el.children[0].setAttribute('style', 'display:block');
      el.children[1].setAttribute('style', 'display:none');
      document.getElementsByTagName('body')[0].setAttribute('style', 'overflow: visible');

    })
  }

}

window.addEventListener('resize', reSize);
window.addEventListener('load', reLoad);

function reSize() {
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
// let dataEntryId = img.getAttribute('data-entryId').split(',');
let mixLinks = [...document.querySelectorAll('[data-mix=mix]')];
// console.log(mixLinks)
// console.log(videoLinks);
// console.log(imageLinks)

mixLinks.forEach(mix => {
  mix.addEventListener('click', (mix) => {
    document.getElementById("lightbox").className = "open";
    document.getElementById('lightbox_content').tabIndex = 1;
    document.getElementById('lightbox').focus();
    renderMix(mix.currentTarget)

  })
})

imageLinks.forEach(img => {
  img.addEventListener('click', (img) => {
    document.getElementById("lightbox").className = "open";
    document.getElementById('lightbox_content').tabIndex = 1;
    document.getElementById('lightbox').focus();
    // console.log(img.currentTarget)
    renderImages(img.currentTarget);
  });
});

videoLinks.forEach(video => {
  video.addEventListener('click', (video) => {
    document.getElementById("lightbox").className = "open";
    document.getElementById('lightbox_content').tabIndex = 1;
    document.getElementById('lightbox').focus();
    console.log(video.currentTarget)
    renderVideos(video.currentTarget);
  });
});


document.getElementById("close").addEventListener("click", () => {
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

const renderMix = (mix) => {
  let dataEntryId = mix.getAttribute('data-entryId').split(',');
  let datatype = mix.getAttribute('data-type').split(',');
  let videoHolder = document.getElementById('video-holder');
  let schoolName = mix.getAttribute('data-school-name').split(',');
  
  // comments
  console.log(datatype, 'dataType')
  console.log(dataEntryId, 'dataEntryId');
  console.log(mix, 'button object')

  let count = 0
  let renderImg = dataEntryId.map((_id, idx) => {
    console.log(_id, idx)
    if (_id.includes('.jpg')) {
      return `<section id="${idx}" class="video-parent ${idx === 0 ? 'show' : 'hide'}" tabindex="${idx + 1}" aria-label="video ${idx + 1} ${schoolName[idx]}">
    <div class="img-responsive">  
    <img width="80%"  src="src/images/${_id}" alt="${schoolName[idx]} - ${idx}">
    <div>
    </section>`
    } else {
      return `<section id="${idx}" class="video-parent ${idx === 0 ? 'show' : 'hide'}" tabindex="${idx + 1}" aria-label="video ${idx + 1} for school ${schoolName}">
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
    }

  }).join('');
  // console.log(renderImg)

  // document.getElementsByTagName('H2')[0].textContent = schoolName[count];

  videoHolder.innerHTML = `<div class="video-flex">
  
  ${count % 2 === 0 ? renderImg : 'hi'}
  ${dataEntryId.length > 1 ? `<button tabindex="1" id="right" class="show" aria-label="next item">
  <i class="fa fa-chevron-right" aria-hidden="true"></i>
</button>

<button tabindex="2" id="left" class="show" aria-label="previous item">
  <i class="fa fa-chevron-left" aria-hidden="true"></i>
</button>`: ``}


  </div>`;
  displayVideo(mix)
}

const renderImages = (img) => {
  let dataEntryId = img.getAttribute('data-entryId').split(',');
  // console.log(dataEntryId.length);
  // console.log(video)
  // console.log(img)
  let schoolName = img.getAttribute('data-school-name');
  // let imageHeight = img.getAttribute('data-height');
  // console.log(imageHeight, 'line 328')
  // console.log(img, 'whats img? ')
  let videoHolder = document.getElementById('video-holder');
  // console.log(videoHolder, 'line 329')
  let renderVideo = dataEntryId.map((_id, idx) => {
    // console.log(_id, idx)
    return `<section id="${idx}" class="video-parent ${idx === 0 ? 'show' : 'hide'}" tabindex="${idx + 1}" aria-label="video ${idx + 1} ${schoolName}">
    <div class="img-responsive">  
    <img width="80%"  src="src/images/${_id}" alt="${schoolName} - ${idx}">
    <div>
    </section>`

  }).join('');
  document.getElementsByTagName('H2')[0].textContent = schoolName;

  videoHolder.innerHTML = `<div class="video-flex">
  
  ${renderVideo}
  ${dataEntryId.length > 1 ? `<button tabindex="1" id="right" class="show" aria-label="next item">
  <i class="fa fa-chevron-right" aria-hidden="true"></i>
</button>

<button tabindex="2" id="left" class="show" aria-label="previous item">
  <i class="fa fa-chevron-left" aria-hidden="true"></i>
</button>`: ``}


  </div>`;
  displayVideo(img)
}





const renderVideos = (video) => {
  let dataEntryId = video.getAttribute('data-entryId').split(',')
  // console.log(dataEntryId);
  let schoolName = video.getAttribute('data-school-name')
  // let videoHeight = video.getAttribute('data-height');
  console.log(video)
  let videoHolder = document.getElementById('video-holder');
  videoHolder.setAttribute(`style`, `height:100%`);
  let renderVideo = dataEntryId.map((_id, idx) => {
    console.log(_id, idx)
    return `<section id="${idx}" class="video-parent ${idx === 0 ? 'show' : 'hide'}" tabindex="${idx + 1}" aria-label="video ${idx + 1} for school ${schoolName}">
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

    ${dataEntryId.length > 1 ? `<button tabindex="1" id="right" class="show" aria-label="next item">
    <i class="fa fa-chevron-right" aria-hidden="true"></i>
  </button>
  
  <button tabindex="2" id="left" class="show" aria-label="previous item">
    <i class="fa fa-chevron-left" aria-hidden="true"></i>
  </button>`: ``}

    </div>`;
  displayVideo(video)
}


const schoolTitle = (video, count) => {
  console.log(count, 'school title')
  let schoolName = video.getAttribute('data-school-name').split(',');
  let setDifferentSizeImgs = video.getAttribute('data-height') ? video.getAttribute('data-height').split(',') : 450
  let id = document.getElementById('video-holder');
  let num = Number(setDifferentSizeImgs[count])
  id.setAttribute('style', `height:${num}vh`);
  document.getElementsByTagName('H2')[0].textContent = schoolName[count];
}




const displayVideo = (video) => {
  console.log(video, 'line 481')
  let count = 0;
  const videos = [...document.querySelectorAll('.video-flex > section')];
  const left = document.getElementById('left');
  const right = document.getElementById('right');
  schoolTitle(video, count)
  if (right !== null) {
    right.addEventListener('click', (ev) => {
      if (count !== videos.length - 1) {

        console.log('right')
        count = count + 1
        schoolTitle(video, count);

        let videosID = [...ev.path[2].children].filter(el => el.tagName === 'SECTION');
        console.log(videosID)
        console.log('keeping track of count', count)
        videosID.forEach(video => {
          console.dir(video)
          if (video.id * 1 === count && video.classList.contains('hide')) {
            video.classList.add('show')
            video.classList.remove('hide')
          } else {
            video.classList.remove('show');
            video.classList.add('hide');
          }

        });


      }
    })
  }

  if (left !== null) {
    left.addEventListener('click', (ev) => {
      if (count > 0) {
        // schoolTitle(click, count)
        // console.log('left')
        count = count - 1
        schoolTitle(video, count)

        let videosID = [...ev.path[2].children].filter(el => el.tagName === 'SECTION');
        console.log(videosID)
        console.log('keeping track of count', count)
        videosID.forEach(video => {
          // console.dir(video)
          // console.log(count)
          if (video.id * 1 === count && video.classList.contains('hide')) {
            video.classList.add('show')
            video.classList.remove('hide')
          } else {
            video.classList.remove('show');
            video.classList.add('hide');
          }

        });
      }

    })
  }

}





