import { Component, OnInit } from '@angular/core';
import {TasksService} from '../../shared/services/tasks.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  tasks=[];
  constructor(
    private taskServices :TasksService,
    private routerService:Router
    
    ) 
  {
    this.tasks = this.taskServices.tasks;
   }





  ngOnInit() {
  }

  edit(index){
    alert(index);

    this.taskServices.selectedIndex = index;
    this.routerService.navigateByUrl('/edit');
  }

}
