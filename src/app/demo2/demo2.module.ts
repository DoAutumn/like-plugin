import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Demo2Component } from "./demo2.component";




@NgModule({
  declarations: [
    Demo2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Demo2Component }])
  ]
})
export class Demo2Module { }
