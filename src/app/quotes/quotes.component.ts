import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'welcome to tech quotes';
  quotes:Quote[] = [
    new Quote (1,'Tommy','Experience','What Does Not Kill you makes you Stronger.','gregory issacs', new Date(2022,2,12),0,0),
    new Quote (2,'Mary Jane','mindsate…','Madness is like gravity all it needs is a little Push.','The joker',new Date(2022,2,14),0,0),
    new Quote (3,'Mikey','Plans','Nobody panics when things go “according to plan”. Even if the plan is horrifying.','immanuel kant',new Date(2022,1,3),0,0),
    new Quote (4,'Beatrice','LIFE','There is only one good, knowledge, and one evil, ignorance.','Socrates',new Date(2022,2,2),0,0),
    new Quote (5,'Jake','Truth and Error','It is one thing to show a man that he is in error, and another to put him in possession of truth.','Plato',new Date(2022,7,17),0,0),
    new Quote (6,'Alex','Tech and life','There is only one thing a philosopher can be relied upon to do, and that is to contradict other philosophers, please press three.','William james',new Date(2022,1,16),0,0)
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() { }

  ngOnInit() {
  }

}
