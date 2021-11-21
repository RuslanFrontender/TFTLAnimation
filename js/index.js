import parallax from './_parallax'
import titleLines from './_title-line'
import titleSplitLines from './_title-split-lines'
import text from './_text'
import imageMask from './_image-mask'

const TFTLAnimation = {
  init() {
    parallax()
    titleLines()
    titleSplitLines()
    text()
    imageMask()    
  }
}

export default  TFTLAnimation