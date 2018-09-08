import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule,MatSortModule,MatTreeModule,MatOptionModule,MatSelectModule } from '@angular/material';
import { MatFormFieldModule,MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VechileService } from './vechile.service';


import { AppComponent } from './app.component';
import { VechileTableComponent } from './vechile-table/vechile-table.component';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [
    AppComponent,
    VechileTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatTreeModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule
    


  ],
  providers: [VechileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
