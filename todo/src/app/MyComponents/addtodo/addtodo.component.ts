import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/Todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
  sno:number | undefined;
  title!: string;
  desc!: string;

@Output() todoAdd:EventEmitter<Todo>=new EventEmitter();
  active: any;
  constructor() { }

  ngOnInit(): void {
  }
onSubmit(){
  // console.log('as')
  const todo={
    sno:8,
    title:this.title,
    desc:this.desc,
    active:this.active
  }
  this.todoAdd.emit(todo);
  // localStorage.setItem('todos',JSON.stringify(todo))

  // console.log(todo);
}
}
