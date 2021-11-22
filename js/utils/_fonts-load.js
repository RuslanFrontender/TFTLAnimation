export default () => 
  new Promise((resolve) => {
    document.fonts.ready.then(() => {
      console.log('Fonts loaded!!!')
      resolve()
    }).catch( error => {
      console.error('Error on downloading fonts: ', error)
    })    
  })
