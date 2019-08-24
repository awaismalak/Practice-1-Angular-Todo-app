import { Component } from '@angular/core';
import{ Location } from '@angular/common';
import{ Router } from '@angular/router';
import { from } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  constructor(

    public location: Location,
    public router:Router
    
    ){}
  title="Welcome"


  // getBackButtonUrl(){
  //   if(this.router.url=='/notes'){
  //     return '/';
  //   }
  //   else {
  //     return '/notes';
  //   }
  // }
}
