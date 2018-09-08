import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mat-Table';

  ngOnInit() {
    // setTimeout(() => {
    //   window.location.reload();
    // }, 11000); // Activate after 11 seconds
  }
}
