import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card-service';
import { FilterService } from 'src/app/services/filter.service';
import { SearchService } from 'src/app/services/search.service';
import { ShareInfoService } from 'src/app/services/share-info.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  search = "";
  filterContainer: Array<string> = [];

  public cards: any = [{}];

  constructor(private cardService: CardService, private searchService: SearchService, private filter:FilterService, private shareInfo:ShareInfoService) {
   }
  ngOnInit(): void {
    this.cardService.getCards().subscribe((cards) => {
      this.cards = cards;

    })

    this.searchService.shareSearch.subscribe(rep => this.search = rep)
    this.filter.shareSearch.subscribe(rep => {
      this.filterContainer = rep


    })

  }

  sendDataToMovie(cardID: number) {
    this.shareInfo.allow = true
    this.shareInfo.exchangeData(cardID)

  }

}
