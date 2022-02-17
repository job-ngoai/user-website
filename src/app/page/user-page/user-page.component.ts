import { RestClientService } from './../../service/rest-client.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserFb } from 'src/app/models/user-fb.model';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'password', 'hasCheckpoint','ipAddress','cookie','createdTime'];
  dataSource : any[] = [];
  listUser : UserFb[] | undefined = [] ;
  totalPages: number|undefined = 0;
  pageLength: number | undefined = 0;
  pageIndex: number | undefined = 0;
  sizePage :number | undefined = 0;
  @ViewChild("matpagination") paginator!: MatPaginator;

  constructor(private restClient: RestClientService) {
   }

  ngOnInit()  {
    this.loadData(0);

  }

  loadData(numberPage: number)  {
    this.restClient.getAllUser(numberPage).subscribe((value) => {
      this.listUser = value.result?.content;
      if(this.listUser?.length != 0) {
        this.dataSource = this.listUser!;
        this.sizePage= value.result?.pageable?.pageSize;
        this.totalPages =  value.result?.totalPages;
        this.pageLength = value.result?.totalElements;
        this.pageIndex = value.result?.pageable?.pageNumber;
      }
    });
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.paginator.nextPage = () => {
      this.loadData(this.pageIndex! + 1);
   }
   this.paginator.previousPage = () => {
    this.loadData(this.pageIndex! - 1);
 }

  }




}
