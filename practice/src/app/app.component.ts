import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reddit-clone';
  addarticle(title:HTMLInputElement,link:HTMLInputElement): boolean{
    console.log(title.value ,link.value);
    return false;
  }
}
