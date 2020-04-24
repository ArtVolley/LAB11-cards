import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardStatus: boolean = true;
  @Input() cards: Card[] = [];
  @Output() deleteCard = new EventEmitter<number>();
  constructor() {
  }

  ngOnInit(): void {
  }

  onDeleteCard(id: number)
  {
    this.deleteCard.emit(id);
  }

}
