import UiBibzInterfaces from './js/interfaces'
import UiBibzForms from './js/forms'
import UiBibzTables from './js/tables'

export default class UiBibzJs {

  constructor(){}

  start(){
    document.addEventListener("turbolinks:load", (e) => this.init())
    document.addEventListener("turbo:load", (e) => this.init())
  }

  init(node){
    if(node === undefined) node = document

    new UiBibzTables(node)
    new UiBibzForms(node)
    new UiBibzInterfaces(node)
  }
}

let uiBibzJs

export function start(){
  uiBibzJs = new UiBibzJs
  uiBibzJs.start()
}

export function init(node) {
  uiBibzJs.init(node)
  return uiBibzJs
}
