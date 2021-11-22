export default () =>  
  Promise.all([...document.images].map(img => {
    console.log(img.complete)
    const pr = img.decode().then(() => console.log('decoded')).catch(error => console.log(img.src + ' error: ', error))
    return pr
  })
)

