import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services/quote.service';
import { IQuote } from 'src/model/quote.model';
import { Plugins, Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
  quotes : IQuote[] = [];
  constructor(private quoteService : QuoteService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.quotes = this.quoteService.getFavoriteQuotes();
  }


  
  getLocation(){
    console.log("clicked");
    if(Capacitor.isPluginAvailable('Geolocation')){
      Plugins.Geolocation.getCurrentPosition()
        .then(position => {
          console.log("Latitude : ", position.coords.latitude );
          console.log("Longitude : ", position.coords.longitude );
        })
        .catch(err => console.log(err));
    }else{
      console.log("Plugin not ready");
    }
  }


}
