import { Component, OnInit, OnDestroy } from '@angular/core';
import { IQuote } from 'src/model/quote.model';
import { QuoteService } from '../services/quote.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit, OnDestroy {

  collection : { qid: number,  category: string, quotes: IQuote[], icon: string };

  constructor(private quoteService : QuoteService, 
            private alertCtrl : AlertController ) { }

  ngOnInit() {
    this.collection = this.quoteService.getSelectedCollection();
  }

  onFavorite(quote : IQuote){
    this.alertCtrl.create({
      header : "Are you sure?",
      subHeader : "Are you really sure to make this favorite?",
      buttons : [{
        text : 'Yes, please go ahead',
        handler : () =>{
          this.quoteService.addQuoteToFavorite(quote);
        }
      }, {
        text :  'No, I changed my mind.',
        role  : 'cancel'
      }]
    }).then(alert => {
      alert.present();
    })
  }

  onUnfavorite(quote : IQuote){
    this.quoteService.removeQuoteFromFavorite(quote);
  }

  ngOnDestroy(){console.log("DESTROY"); }

  // ionViewWillEnter(){console.log("ionViewWillEnter")}
  // ionViewDidEnter(){console.log("ionViewDidEnter")}
  // ionViewWillLeave(){console.log("ionViewWillLeave")}
  // ionViewDidLeave(){console.log("ionViewDidLeave")}



}
