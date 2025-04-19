import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { CardComponent } from "./card/card.component";

@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
