import { Component, OnInit } from '@angular/core';
import { Quote } from './../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote("Isaac Newton", 'I do not know what I may appear to the world, but to myself I seem to have been only like a boy playing on the sea-shore, and diverting myself in now and then finding a smoother pebble or a prettier shell than ordinary, whilst the great ocean of truth lay all undiscovered before me', 'Isaac Newton'),
    new Quote("Barak", 'We can acknowledge that oppression will always be with us, and still strive for justice.  We can admit the intractability of depravation, and still strive for dignity.  Clear-eyed, we can understand that there will be war, and still strive for peace.  We can do that -- for that is the story of human progress; that is the hope of all the world; and at this moment of challenge, that must be our work here on Earth.', 'Barak Obama'),
    ];

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  //delete button
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  toggleDescription(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
