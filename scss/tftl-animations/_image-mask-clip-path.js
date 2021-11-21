import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { animationDelay } from '../utils/index'

gsap.registerPlugin(ScrollTrigger)

export default () => {
  [...document.querySelectorAll('[data-tftl-image-clip-path]')].forEach( image => {

    const delay = animationDelay(image)
    const direction = image.dataset.tftlDirection || 'left'

    if(direction === 'left') {
      gsap.set(image, {
        clipPath: 'polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%, 100% 0%)',
        scale: 1.2
      })
        gsap.timeline({
          scrollTrigger: {
            trigger: image,
            toggleActions: 'restart none none none'
          },
          delay
        })
        .to(image, {
          clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%, 100% 0%)',
          scale: 1,
          duration: 1.2
        })
    }
    if(direction === 'right') {
      gsap.set(image, {
        clipPath: 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%, 0% 0%)',
        scale: 1.2,
      })
      gsap.timeline({
        scrollTrigger: {
          trigger: image,
          toggleActions: 'restart none none none'
        },
        delay
      })
      .to(image, {
        clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        scale: 1,
        duration: 1.2
      })
    }
  })
}
