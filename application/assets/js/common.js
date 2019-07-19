
import 'bootstrap'
import './../css/global.scss'

import Translator from './modules/translator'

//import './../../node_modules/toastr/build/toastr.min.css'

/*$(document).ready( () => {
    console.log('hello from the common.js script')
    Toastr.info('coucou')
})*/
$(document).ready(() => {
  /*******************
      BOOTSTRAP TOOLTIP & POPOVER
    *******************/
  $('[data-toggle="popover"]').popover()
  $('[data-toggle="tooltip"]').tooltip()

  console.log(Translator.trans('home'))
  
  $('#flashes .flash').each(function () {
    let flash = $(this)
    let type = flash.data('label')
    let msg = flash.data('message')
    switch (type) {
      case 'notice':
        Toastr.info(msg)
        break
      case 'warning':
        Toastr.warning(msg)
        break
      case 'error':
        Toastr.error(msg)
        break
    }
  })
})
  
