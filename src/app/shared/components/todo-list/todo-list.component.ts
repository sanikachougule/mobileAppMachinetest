import { Component, Input, OnInit } from '@angular/core';
import { Itodos } from '../../models/mobile.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
@Input() getTodoArray !: Array<Itodos>
  constructor() { }

  ngOnInit(): void {
  }

}
