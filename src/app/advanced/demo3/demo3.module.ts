import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Advanced } from "../Advanced";
import { Demo3Component } from "./demo3.component";
import { IconComponent } from './icon/icon.component';




@NgModule({
  declarations: [
    Demo3Component,
    IconComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Demo3Component }])
  ]
})
export class Demo3Module extends Advanced { }

Demo3Module.component = IconComponent;
Demo3Module.path = 'demo3';
Demo3Module.label = '消息中心';