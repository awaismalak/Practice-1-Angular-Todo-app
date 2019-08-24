import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TasksService} from './shared/services/tasks.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './pages/notes/notes.component';
import { EditNoteComponent } from './pages/edit-note/edit-note.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    EditNoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})




export class AppModule { }
