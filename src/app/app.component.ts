import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { Card, CardDatabase } from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  
  title = 'LAB11';
  cards: Card[] = CardDatabase;

  constructor()
  {
    setTimeout(() => {
      this.fontSize = 30;
    }, 2000);
  }

  onDeleteById(id: number)
  {
    let index = this.cards.findIndex((card) => card.id === id);
    if(index !== -1)
    {
      this.cards.splice(index, 1);
    }
  }

  onAddCard(card)
  {
    // let id = this.cards.length > 0
    // ? this.cards[this.cards.length - 1].id + 1 : 0;
    // card.id = id;
    this.cards.push(card);
  }

  ngOnInit()
  {

  }

  ngAfterViewInit()
  {}

  hello()
  {
    return 'Hi bitch'
  }

  @ViewChild('someInput') someInputName : ElementRef;
  blockX = 0;
  blockY = 0;
  inputValue = 'Start typing';
  flag = true;
  someArray : string[] = ['третий', 'воторй', 'первый'];
  fontSize = 15;

  getCoords(e: MouseEvent)
  {
    this.blockX = e.offsetX;
    this.blockY = e.offsetY;
  }

  getData(elm : HTMLInputElement)
  {
    // console.log(elm.value)
    console.log(this.someInputName.nativeElement.value)
  }
}
