import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CardService } from 'src/app/services/card-service';
import { ShareInfoService } from 'src/app/services/share-info.service';

@Component({
  selector: 'app-update-card',
  templateUrl: './update-card.component.html',
  styleUrls: ['./update-card.component.css']
})
export class UpdateCardComponent implements OnInit {
  card :any = {};
  cardId: number = 1;
  public cardForm:FormGroup;
  constructor(private formBuilder: FormBuilder, private shareInfo: ShareInfoService, private cardService:CardService, private router:Router) {

      this.cardForm = this.formBuilder.group({
      imageUrl:["",[Validators.required]],
      title:["",[Validators.required]],
      genre:["",[Validators.required]],
      language:["",[Validators.required]],
      price:["",[Validators.required]],
      date:["",[Validators.required]],
      place:["",[Validators.required]],
      description:["",[Validators.required]]
    })


    this.shareInfo.shareSearch.subscribe(rep => {
      if (this.shareInfo.allow) {
        localStorage.setItem("cardId", rep.toString());

      }
    })
      this.cardId = parseInt(localStorage.getItem('cardId')!);

      this.cardService.getCard(this.cardId).subscribe(res => {
        this.card = res


        // for (const each in this.card) {
        //     // this.cardForm.setValue({each:this.card[each]})
        //   console.log(each);
        //   console.log(this.card[each]);


        //   }
        let movie= this.card
        delete movie["id"];
        this.cardForm.setValue(movie)

        })

  }

  ngOnInit(): void {


  }

   cardSubmit(cardForm: any) {
    const updated = {id:this.cardId, ...cardForm.value}
    this.cardService.updateCard(this.cardId, updated).subscribe((res) => {
    })
    alert("card update successfully")
    this.router.navigateByUrl("/admin")
   }



}
