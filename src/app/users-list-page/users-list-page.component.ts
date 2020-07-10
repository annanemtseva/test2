// @ts-ignore
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpService, Stats, User} from '../http.service';


@Component({
  selector: 'app-users-list-page',
  templateUrl: './users-list-page.component.html',
  styleUrls: ['./users-list-page.component.scss']
})
export class UsersListPageComponent implements OnInit {
  users: Stats[] = [];

  pageOfItems: Stats[];

  pageSize = 16;
  totalPages: number;

  @ViewChild('mydiv', {static: false}) public mydiv: ElementRef<any>;


  constructor(
    private http: HttpService
  ) {
  }

  ngOnInit() {
    this.http.getUsers(0, this.pageSize).subscribe(response => {
      this.totalPages = response.totalPages;
      this.users = response.content.concat(Array((this.totalPages - 1) * this.pageSize) );

    });
  }


  onChangePage(pageOfItems: Array<any>) {
    // @ts-ignore
    const currentPage = this.mydiv.pager.currentPage - 1;
    if (currentPage >= 0 ) {
      this.http.getUsers(currentPage, this.pageSize).subscribe(response => {
        this.pageOfItems = response.content;
      });
      this.pageOfItems = pageOfItems;
    }

  }


}


