import App from './src/components/App.js'
import {initialRoutes, routerPush} from './src/utils/router.js'

new App(document.querySelector('#App'))
initialRoutes()

const aboutLinker = document.querySelector('#about')
aboutLinker.addEventListener('click', () => {
  routerPush('/about')
})