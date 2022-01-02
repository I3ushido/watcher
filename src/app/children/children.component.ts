import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss'],
})
export class ChildrenComponent implements OnInit {
  @Output() updateDataEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
}
