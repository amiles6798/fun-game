import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardInfo } from '../interfaces/cardInfo';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger("cardflip", [
      state(
        "default",
        style({
          transform: "none"
        })
      ),
      state(
        "flipped",
        style({
          transform: "rotateY(180deg)"
        })
      ),
      state(
        "matched",
        style({
          visibility: "false",
          transform: "scale(0.05)",
          opacity: 0
        })
      ),
      transition("default => flipped", [animate("400ms")]),
      transition("flipped => default", [animate("400ms")]),
      transition("* => matched", [animate("400ms")])
    ])
  ]
})
export class CardComponent implements OnInit {

  @Input() card!: CardInfo;
  // sends event back to parent component
  @Output() cardClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onCardClick(): void {
    this.cardClicked.emit(); // Emit the event when the card is clicked
  }
}
