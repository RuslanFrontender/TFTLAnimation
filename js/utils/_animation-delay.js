export default (el) => {
  if(!(el instanceof HTMLElement)) {
    return 0
  }
  return el.dataset.tftlDelay || 0
}