import { gsap } from 'gsap'
import SplitText from 'gsap/SplitText'
import { readyFonts } from '../utils/index'

gsap.registerPlugin(SplitText)

export default async () => {

  await readyFonts();

  [...document.querySelectorAll('[data-tftl-title-lines]')].forEach(title => {

    const delay = +title.dataset.tftlDelay || 0

    const splits = new SplitText(title, {type: 'word'})

    splits.split({type: 'lines'}).lines.forEach( line => {

      const wrapper = document.createElement('div')

      gsap.set(wrapper, {
        overflow: 'hidden',
      })
      wrapper.appendChild(line)
      title.prepend(wrapper)
      line.classList.add('a-line')
    })

    gsap.timeline({
      delay,
      scrollTrigger: {
        trigger: title,
        toggleActions: 'restart none non none',
      }
    })
    .from(title.querySelectorAll('.a-line'), {    
      duration: 0.6,
      yPercent: 100,
      stagger: 0.1
    })
  })
}