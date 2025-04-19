
// https://infinum.com/handbook/frontend/angular/angular-guidelines-and-best-practices/formatting-naming-and-best-practices#prefer-interface-over-type
// Prefer types unless you're extending or implementing
export interface CardInfo {
  imageId: string;
  state: "default" | "flipped" | "matched"
}

// list of states
