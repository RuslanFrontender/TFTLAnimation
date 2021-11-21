import {gsap} from 'gsap'
import SplitText from 'gsap/SplitText'
import ScrollTrigger from 'gsap/ScrollTrigger'

import {readyFonts} from '../utils/index'

gsap.registerPlugin([SplitText, ScrollTrigger])
export default async () => {

  await readyFonts();

  [...document.querySelectorAll('[data-tftl-text]')].forEach(text => {

    const delay = +text.dataset.tftlDelay || 0

    const parts = new SplitText(text, {type: 'words'})

    gsap.timeline({
      delay,
       scrollTrigger: {
        trigger: text,
        toggleActions: 'restart none none none'
      },
      })
    .from(parts.split({type: 'lines'}).lines, {
      duration: 0.4,
      stagger: 0.1,
      autoAlpha: 0,
      yPercent: 100
    })
  })
}