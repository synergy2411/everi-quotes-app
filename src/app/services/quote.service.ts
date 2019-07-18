import { Injectable } from "@angular/core";
import { IQuote } from 'src/model/quote.model';

@Injectable()
export class QuoteService{
    private selectedCollection : { qid: number,  category: string, quotes: IQuote[], icon: string };
    private favoriteQuotes : IQuote[] = [];

    addQuoteToFavorite(quote : IQuote){
        this.favoriteQuotes.push(quote)
        console.log(this.favoriteQuotes);
    }

    removeQuoteFromFavorite(quote : IQuote){
        const position = this.favoriteQuotes.findIndex(q => q.id == quote.id);
        this.favoriteQuotes.splice(position, 1);
        console.log(this.favoriteQuotes);
    }

    getFavoriteQuotes(){
        return [...this.favoriteQuotes];
    }

    getSelectedCollection(){
        return {...this.selectedCollection};
    }

    setSelectedCollection(coll : { qid: number,  category: string, quotes: IQuote[], icon: string }){
        this.selectedCollection = coll;
    }

}