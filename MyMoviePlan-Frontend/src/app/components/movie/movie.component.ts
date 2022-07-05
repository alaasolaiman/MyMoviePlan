import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card-service';
import { ShareInfoService } from 'src/app/services/share-info.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})


export class MovieComponent implements OnInit {
  id:any = ""
  card:any = {}
  constructor(private shareInfo: ShareInfoService, private cardService: CardService) {
    this.shareInfo.shareSearch.subscribe(rep => {
       if(this.shareInfo.allow){
         localStorage.setItem("id", rep.toString())
         }
      })

    this.id =   localStorage.getItem("id")
   }

  ngOnInit(): void {
    this.cardService.getCard(parseInt(this.id)).subscribe(rep => {
      this.card = rep
    })

  }

}
