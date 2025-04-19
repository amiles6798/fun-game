import { Component, OnInit } from '@angular/core';
import { CardInfo } from './interfaces/cardInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-card-game';

  cards: CardInfo[] = [
    { imageId: 'cheesepopcycle.jpg', state: 'default' },
    { imageId: 'afaceonlyamothercouldlove.jpg', state: 'default' },
    { imageId: 'cheesetongueout.jpg', state: 'default' },
    { imageId: 'doodleHam.jpg', state: 'default' },
  ];

  cols: number = 4;

  ngOnInit(): void {
    console.log(this.cards);
    this.cards = [...this.cards, ...this.cards];
    console.log(this.cards);

    console.log('Number of columns:', this.cols);
  }

  cardClicked(i: number): void {
    console.log('Card clicked at index:', i);
    console.log('Card clicked:', this.cards[i]);

    let selectedCard = this.cards[i];

    if (selectedCard.state === "default") {
      selectedCard.state = "flipped";
    } else {
      selectedCard.state = "default";
    }
  }
}
