import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Demo1Component } from "./demo1.component";




@NgModule({
  declarations: [
    Demo1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Demo1Component }])
  ]
})
export class Demo1Module { }
