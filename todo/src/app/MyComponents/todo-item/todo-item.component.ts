import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/Todo';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  
  @Input() todo!: Todo; 
  // itemarray:any=[];
  @Output() todoDelete:EventEmitter<Todo>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    // this.getdata();

  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggerd")
  }
// getdata(){
//   this.itemarray=localStorage.getItem("todos");
//   this.itemarray=JSON.parse(this.itemarray);
// }



}
