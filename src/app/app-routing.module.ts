import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GifsDetailComponent } from './pages/gifs-detail/gifs-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail/:id', component: GifsDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
