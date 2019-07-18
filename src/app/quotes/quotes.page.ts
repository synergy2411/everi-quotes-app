import { Component, OnInit } from '@angular/core';
import { IQuote } from 'src/model/quote.model';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

  collection : { qid: number,  category: string, quotes: IQuote[], icon: string };

  constructor(private quoteService : QuoteService) { }

  ngOnInit() {
    this.collection = this.quoteService.getSelectedCollection();
  }

}
