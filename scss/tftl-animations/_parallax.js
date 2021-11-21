import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default () => {

  const containers = document.querySelectorAll('[data-tftl-parallax-container]')

	containers.forEach(el => {
		const img = el.querySelector('[data-tftl-parallax-image]')

		gsap.set(el, {overflow: 'hidden'})
		gsap.set(img, {top: -120, position: 'relative', zIndex: 0})

		gsap.to(img, {
			scrollTrigger: {
				trigger: el,
				scrub: true,
				start: () => "top bottom",
				end: () => "bottom top"
			},
			ease: 'none',
			duration: 0.1,
			y: 240,
		})
	})
}