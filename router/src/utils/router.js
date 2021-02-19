import Home from '../components/home.js'
import About from '../components/about.js'
import App from '../components/App.js'

const app = document.querySelector('#App');
console.log(app)

const routes = {
  '/' : new Home(),
  '/about' : new About(),
}

export function initialRoutes() {
  renderHTML(routes['/'])
  console.log(window.location.pathname)
  window.onpopstate = () => renderHTML(routes[window.location.pathname]) 
}

export function routerPush(pathName) {
  window.history.pushState({}, pathName, window.location.origin + pathName)
  renderHTML(routes[pathName])
}

function renderHTML(route) {
  app.innerHTML = route.render()
}