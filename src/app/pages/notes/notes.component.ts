import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  tasks=[
  {'title':'Task one','description':'Breakfast time is 9:00 clock to 10:00 clock'},
  {'title':'Task Two','description':'Lunch time is 11:00 clock to 12:00 clock'},
  {'title':'Task Three','description':'Dinner time is 5:00 clock to 6:00 clock'}
]


  constructor() { }

  ngOnInit() {
  }

}
