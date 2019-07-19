// uses specific scss per page
import './../css/home.scss'

$(document).ready(() => {
  // uses specific js per page
  console.log('Hello from the home page')

  // ensure Toastr via JS is working
  Toastr.info('No place like HOOOOME')

  // ensure bootstrap js is working
  $('#modal-test').modal('show')

  // test js translations
  console.log('Js Translator is not ready yet, ie no translations are attached to it...', Translator.trans('home'), ' is not translated :(')
  console.log('Now click the button "Write a translated word" and see what happen in console...')
  const btn = document.getElementById('write-to-console')
  btn.addEventListener('click', () => {
    console.log('Now the transaltor is ready to translate...', Translator.trans('home'), ' is indeed the translated value for "home" key')
  })

  // ensure Routinh is working
  const url = Routing.generate('test')
  console.log('Javascript generated route', url)
  
})