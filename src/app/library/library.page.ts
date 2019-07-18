import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IQuote } from 'src/model/quote.model';
import { QUOTES_DATA } from 'src/model/quotes';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {

  quotesData: { 
    qid: number, 
    category: string, 
    quotes: IQuote[], 
    icon: string }[] = [];

  constructor( private router : Router, 
            private quoteService : QuoteService) { }

  ngOnInit() {
    this.quotesData = QUOTES_DATA;
  }

  onSelectedCategory(collection : { qid: number,  category: string, quotes: IQuote[], icon: string }){
    
    this.quoteService.setSelectedCollection(collection);

    this.router.navigate(['tabs/quotes']);
  }
}
