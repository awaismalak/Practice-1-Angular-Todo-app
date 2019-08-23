import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './pages/notes/notes.component';
import { EditNoteComponent } from './pages/edit-note/edit-note.component';


const routes: Routes = [
  //{ path: '', component: AppComponent, pathMatch:'full' },EditNoteComponent
  {path: 'notes', component: NotesComponent},
  {path: 'edit', component:EditNoteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
