import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, Injector, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { AdvancedToken } from './advanced/Advanced';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('domUl') domUl!: ElementRef;

  @ViewChild('domDiv', { read: ViewContainerRef }) domDiv!: ViewContainerRef;

  menuList = [
    { path: 'demo1', label: '首页' },
    { path: 'demo2', label: '基础功能' }
  ];

  constructor(private injector: Injector, private router: Router, private render: Renderer2, private cfr: ComponentFactoryResolver) { }

  ngAfterViewInit(): void {
    let module: any;

    // 在基础版里，如果获取不到注入的module，则直接return
    try { module = this.injector.get(AdvancedToken) } catch (error) { };
    if (!module) return;

    // 处理路由
    this.router.config.push(
      { path: module.path, loadChildren: () => module }
    );

    // 方式1：通过动态创建组件的方式，显示注入module自定义的默认组件
    this.domDiv.createComponent(this.cfr.resolveComponentFactory(module.component));

    // 方式2：通过插入数据的方式，显示注入module的label信息
    // this.menuList.push({ path: module.path, label: module.label });

    // 方式3：通过插入dom的方式，显示注入module的label信息
    // const domA = this.render.createElement('a');
    // this.render.setAttribute(domA, 'href', `#/${module.path}`);
    // const domText = this.render.createText(module.label);
    // this.render.appendChild(domA, domText);
    // const domLi = this.render.createElement('li');
    // this.render.appendChild(domLi, domA);
    // this.render.appendChild(this.domUl.nativeElement, domLi);
  }
}
