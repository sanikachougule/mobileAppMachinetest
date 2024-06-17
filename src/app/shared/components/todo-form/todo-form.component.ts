import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodos } from '../../models/mobile.interface';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
haserror: any;
todoItem: any;

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('todoForm') todoForm !: NgForm;

@Output() emmitTodos : EventEmitter<Itodos> = new EventEmitter<Itodos>()

  onTodoAdd(){
    if(this.todoForm.valid){
          let newTodo = this.todoForm.value;
          this.todoForm.reset();
        
          this.emmitTodos.emit(newTodo);
    }    
  }

}
