import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  search:String = ""
  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
  }

  searchFun(value: any) {
    this.searchService.updateData(value)
  }
}
