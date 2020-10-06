import UiBibzInterface from './js/interface'
import UiBibzForm from './js/form'
import UiBibzTable from './js/table'

export default class UiBibzJs {

  constructor(){}

  start(){
    document.addEventListener("turbolinks:load", this.init)
  }

  init(){
    new UiBibzTable()
    new UiBibzForm()
    new UiBibzInterface()
  }
}
