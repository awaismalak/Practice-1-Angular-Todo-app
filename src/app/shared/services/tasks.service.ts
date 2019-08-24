import { Injectable } from '@angular/core';
import { Task} from '../task';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  selectedIndex;
  tasks: Task[] =[
    {'title':'Task one','description':'Breakfast time is 9:00 clock to 10:00 clock'},
    {'title':'Task Two','description':'Lunch time is 11:00 clock to 12:00 clock'},
    {'title':'Task Three','description':'Lunch time is 11:00 clock to 12:00 clock'},
    {'title':'Task Four','description':'Dinner time is 5:00 clock to 6:00 clock'}
  ]
  constructor() { 

  }
}
