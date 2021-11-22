import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import {animationDelay} from './utils/index'

gsap.registerPlugin(ScrollTrigger)

export default () => {
  [...document.querySelectorAll('[data-tftl-image-mask]')].forEach( box => {

    const delay = animationDelay(box)
    const color = box.dataset.tftlImageMaskColor || '#ffffff'
    const direction = box.dataset.tftlDirection || 'right'
    const image = box.querySelector('img')

    gsap.set(box, {
      overflow: 'hidden',
      position: 'relative'
    })
    gsap.set(image, {
      scale: 1.2
    })

    const mask = document.createElement('div')

    gsap.set(mask, {
      backgroundColor: color,
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 1
    })
    box.append(mask)

    gsap.timeline({
      delay: delay + 0.2, 
      scrollTrigger: {
        trigger: box,
        toggleActions: 'restart none none reset'
      }      
    })
    .to(mask, {
      xPercent: (direction === 'left') ? -101 : 101,
      duration: 1.2
    })
    .to(image, {
      scale: 1,
      duration: 1.2
    },0)
  })
}
