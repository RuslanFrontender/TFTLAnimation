import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export default () => {
  const animationOptions = {
    yPercent: 0,
    duration: 2,
    ease: 'power2.inOut',
  }

  const elements = [...document.querySelectorAll("[data-tftl-title-line-container]")]
  elements.forEach(element => {

    // animation delay
    const delay = +element.dataset.tftlDelay || 0

    // moving text element
    const text = element.querySelector('[data-tftl-title-line]')  

    // setup text & container
    gsap.set(element, {overflow: 'hidden', display: 'block'})

    gsap.set(text, {
      position: 'relative',
      yPercent: 100,
      transformOrigin: "left center"
    })

    // scrollTrigger for text
    gsap.to(text, {
      scrollTrigger: {
        trigger: element,
        start: () => 'top bottom',
        toggleActions: 'restart none none none'
      },
      ...animationOptions,
      delay
    })
  })
}