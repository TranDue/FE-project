import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book Here';
  searchshow = false;
  constructor() {
    window.addEventListener("click", () => {
      this.searchshow == true;
    });
  }
  showSearchBox(): void {
      console.log(this.searchshow);
    this.searchshow = !this.searchshow;
    
  }
  onClick(event: Event): void {
    event.stopPropagation();
    this.searchshow = !this.searchshow;
  }
  
}
  
