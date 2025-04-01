import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit {
  isCollapsed = true;

  constructor() {}

  ngOnInit(): void {}
}
