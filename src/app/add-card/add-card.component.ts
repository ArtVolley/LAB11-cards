import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  id: number;
  name: string = '';
  status: string = 'green';

  @Output() addCard = new EventEmitter<Card>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddCard()
  {
    this.addCard.emit
    ({
      id: this.id,
      name: this.name,
      status: this.status,
    });
  }
}
