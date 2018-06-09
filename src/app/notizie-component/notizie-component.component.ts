import { Component, OnInit } from '@angular/core';
interface Articolo
{
  titolo:string
  descrizione:string
}

@Component({
  selector: 'ca-notizie',
  templateUrl: './notizie-component.component.html',
  styleUrls: ['./notizie-component.component.css']
})

export class NotizieComponentComponent implements OnInit {

  
  titoli:Array<Articolo>;

  constructor() {
    this.titoli = new Array<Articolo>();
   }

  ngOnInit() {

    let i: number = 0;
    for(i = 0 ; i<=3 ; i++){
         this.titoli.push({ titolo: "Titolo "+i, descrizione: "desc "+i+10})
    }
  }

}
