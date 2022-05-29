import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card-service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cards: any = [{}];
  constructor(private cardService: CardService) {

   }
  ngOnInit(): void {
    this.cardService.getCards().subscribe((cards) => {
      this.cards = cards;
    })


  }



 }
