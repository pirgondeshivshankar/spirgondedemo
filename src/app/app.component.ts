import {AfterViewInit,Component,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'name','team','designation'];
//  dataSource = ELEMENT_DATA;
  dataSource =  new MatTableDataSource<Employee>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator
  }
}

export interface Employee {
  id          : number;
  name        : string;
  team        : string;
  designation : string;
}

const ELEMENT_DATA: Employee[] = [
  { id: 1  , name: 'shiv'      ,team: 'DEV' , designation:'junior' },
  { id: 2  , name: 'sweta'     ,team: 'DEV' , designation:'junior' },
  { id: 3  , name: 'Mayur'     ,team: 'DEV' , designation:'junior' },
  { id: 4  , name: 'Rahul'     ,team: 'QA'  , designation:'junior' },
  { id: 5  , name: 'Sree'      ,team: 'BA'  , designation:'junior' },
  { id: 6  , name: 'Om'        ,team: 'DEV' , designation:'junior' },
  { id: 7  , name: 'KK'        ,team: 'BA'  , designation:'junior' },
  { id: 8  , name: 'Tejashri'  ,team: 'DEV' , designation:'junior' },
  { id: 9  , name: 'Dharam'    ,team: 'MNG' , designation:'junior' },
  { id: 10 , name: 'Megha'     ,team: 'QA'  , designation:'junior' },
  { id: 11 , name: 'Bhagyashri',team: 'DEV' , designation:'junior' },
  { id: 12 , name: 'Smita'     ,team: 'DEV' , designation:'junior' },

];
