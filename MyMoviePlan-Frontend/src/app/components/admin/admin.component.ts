import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardService } from 'src/app/services/card-service';
import { SearchService } from 'src/app/services/search.service';
import { ShareInfoService } from 'src/app/services/share-info.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public cardForm:FormGroup;

  constructor(private formBuilder: FormBuilder, private cardService:CardService, private searchService:SearchService, private shareInfo:ShareInfoService) {
    this.cardForm = this.formBuilder.group({
      imageUrl:['', [Validators.required]],
      title:['', [Validators.required]],
      genre:['action', [Validators.required]],
      language:['english', [Validators.required]],
      price:['', [Validators.required]],
      date:['', [Validators.required]],
      place:['', [Validators.required]],
      description:['', [Validators.required]]
    })
   }
  search = "";
   public cards: any;

  ngOnInit(): void {
    this.cardService.getCards().subscribe((cards) => {
      this.cards = cards;
    })

    this.searchService.shareSearch.subscribe(rep => this.search = rep)
  }

  cardSubmit(card: any) {

    this.cardService.postCards(card.value).subscribe((res) => {
      console.log(res);
    })
    this.cardForm.reset();
    location.reload()
  }
  sendDataToMovie(cardID: number) {
    this.shareInfo.allow = true
    this.shareInfo.exchangeData(cardID)
  }

  deleteCard(cardID:number) {
    this.cardService.deleteCard(cardID).subscribe(rep => { })
    location.reload();
  }

}
