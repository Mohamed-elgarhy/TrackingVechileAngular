import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {MatTableDataSource,MatSortable,MatSort}  from '@angular/material';
import { VechileService } from '../vechile.service';
import {Vechile}  from '../models/vechile.model';
@Component({
  selector: 'app-vechile-table',
  templateUrl: './vechile-table.component.html',
  styleUrls: ['./vechile-table.component.css']
})
export class VechileTableComponent implements OnInit {

  dataSource;
  optionsArray : Vechile[];
  displayedColumns = ['customerName','vechileId','registerationNumber','status'];
  backFilter;

  constructor(private vehileService : VechileService,private changeDetectorRefs: ChangeDetectorRef) { }

  

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    this.backFilter = filterValue;
  }

  public applySelectFilter(event: Event, filterValue: string) {
    //filterValue = filterValue.trim();
    //filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  refresh() {
    
    this.vehileService.getVehiles().subscribe(results => {
      if (!results)
      {
        return;
      }
      
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.filter = this.backFilter;
    })

  }

  

  ngOnInit() {

    setInterval(() => {
      this.refresh();
      this.changeDetectorRefs.markForCheck();
    }, 25000);
    

    
    
  }

}
