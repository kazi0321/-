import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChapterListComponent } from './chapter-list/chapter-list.component'
import { DetailComponent } from './detail/detail.component'
import {CoreComponent} from './core/core.component'

const routes: Routes = [
  { path: 'chapter-list', component: ChapterListComponent },
  { path: 'chapter-detail', component: DetailComponent },
  { path: 'core',component: CoreComponent },
  { path: '', redirectTo: '/chapter-list', pathMatch: 'full' }
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
