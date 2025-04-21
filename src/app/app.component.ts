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

  flippedCards: CardInfo[] = [];

  cols: number = 4;

  ngOnInit(): void {
    console.log(this.cards);
    this.cards = [...this.cards, ...this.cards];
    console.log(this.cards);

    this.cards = this.cards.map((card, index) => ({
      ...card,
      id: index,
    }));

    console.log('Number of columns:', this.cols);
  }

  cardClicked(i: number): void {
    console.log('Card clicked at index:', i);
    console.log('Card clicked:', this.cards[i]);

    let selectedCard = this.cards[i];

    if (selectedCard.state === "default") {
      selectedCard.state = "flipped";
      this.flippedCards.push(selectedCard);
    } else {
      selectedCard.state = "default";
    }

    console.log(this.flippedCards);

    if(this.flippedCards.length === 2){
      const [firstFlippedCard, secondFlippedCard] = this.flippedCards;

      if(this.flippedCards[0].imageId === this.flippedCards[1].imageId){

        setTimeout(() => {
          firstFlippedCard.state = "matched";
          secondFlippedCard.state = "matched";
          console.log("Matched!");
        }, 1000);
      } else {
        setTimeout(() => {
          firstFlippedCard.state = "default";
          const otherCard = this.cards.find(
            (card) => card.imageId === firstFlippedCard.imageId
          );
          if (otherCard) {
            otherCard.state = "default";
          }
          secondFlippedCard.state = "default";
          console.log("No match!");
        }, 1000);
      }
      this.flippedCards = [];
    }

    console.log(this.cards);
  }
}
