import { Component } from '@angular/core';
import { Itodos } from './shared/models/mobile.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mobileAppMachinetest';

  todoArray : Array<Itodos>=[
    {
      todoItem:' javascript'
     
   }
]
getTodos(todo:Itodos){
  console.log(todo);
  this.todoArray.unshift(todo)
}
}
