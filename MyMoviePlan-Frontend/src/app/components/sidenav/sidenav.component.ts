import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor( private filter:FilterService) { }
  filterContainer: Array<string> = [];
  genres:Array<string> = [];
  ngOnInit(): void {
  }

  Filter(filter:any) {
     if ( this.filterContainer.includes(filter.value )) {

       this.filterContainer = this.filterContainer.filter((e) => {
        return e != filter.value
      })
    }
    else {
    this.filterContainer.push(filter.value);
    }

 console.log(this.filterContainer);
    this.filter.Filter(this.filterContainer);

  }

}
