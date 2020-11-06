import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component'

const routes: Routes = [
  {
    path: '',
    component: DetailComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})

export class DetailRoutingModule { }
