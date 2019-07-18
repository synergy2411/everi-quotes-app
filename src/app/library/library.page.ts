import { Component, OnInit } from '@angular/core';
import { IQuote } from 'src/model/quote.model';
import { QUOTES_DATA } from 'src/model/quotes';

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

  constructor() { }

  ngOnInit() {
    this.quotesData = QUOTES_DATA;
  }

}
