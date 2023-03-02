import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.less']
})
export class IconComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleClick() {
    this.router.navigate(['/demo3']);
  }

}
