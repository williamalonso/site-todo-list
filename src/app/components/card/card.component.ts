import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  items: string[] = [];
  description: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    this.items.push(this.description);
    this.description = '';
  }

  removeTask(index: string) {
    this.items.splice( this.items.indexOf(index), 1 );
  }

}
