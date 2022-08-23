// Import non minified version, later minifier will make sure minified version
// is provided, while still allowing debugging to use the non minified version.
import {Tab, Popover, Tooltip, Dropdown, Toast} from "bootstrap/dist/js/bootstrap.bundle"

export default class UiBibzInterface {

  constructor(node) {
    this.node = node || document

    // //this.nav()
    this.tooltip()
    // this.dropdown()
    this.popover()
    this.notify()
    this.toast()
  }

  nav(){
    this.node.querySelectorAll('.nav-tabs .nav-item .nav-link').forEach(function(el){
      let tabTrigger = new Tab(el)
      el.addEventListener('click', function (e) {
        e.preventDefault()
        tabTrigger.show()
      })
    })
  }

  popover() {
    this.node.querySelectorAll('[data-bs-toggle="popover"]').forEach(x => new Popover(x))
  }

  tooltip() {
    this.node.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(x => new Tooltip(x))
  }

  dropdown() {
    this.node.querySelectorAll('[data-bs-toggle="dropdown"]').forEach(x => new Dropdown(x))
  }

  toast() {
    this.node.querySelectorAll('.toast').forEach(x => new Toast(x))
  }

  notify() {
    this.node.querySelectorAll('.alert[data-timeout]').forEach(function(alertElement) {
      setTimeout(function() {
        alertElement.classList.add('fade')
      }, alertElement.getAttribute("data-timeout") )
    })
  }
}
