import { Injectable } from "@angular/core";
import { IQuote } from 'src/model/quote.model';

@Injectable()
export class QuoteService{
    private selectedCollection : { qid: number,  category: string, quotes: IQuote[], icon: string };

    getSelectedCollection(){
        return {...this.selectedCollection};
    }

    setSelectedCollection(coll : { qid: number,  category: string, quotes: IQuote[], icon: string }){
        this.selectedCollection = coll;
    }

}