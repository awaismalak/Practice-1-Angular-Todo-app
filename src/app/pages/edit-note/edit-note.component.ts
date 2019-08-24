import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/shared/services/tasks.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  task: any = {};

  constructor(
    private tasksService: TasksService
  ) { 

    this.task = this.tasksService.tasks[this.tasksService.selectedIndex];

  }

  ngOnInit() {
  }

}







// 03434789097