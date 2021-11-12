import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { todolistService } from '../todolist.service';

@Component({
  selector: 'app-to-do-details',
  templateUrl: './to-do-details.component.html',
  styleUrls: ['./to-do-details.component.css']
})
export class ToDoDetailsComponent implements OnInit {
  public todo:any = []
  constructor(private empInfo:todolistService) { }

  ngOnInit(): void {
    this.todo = this.empInfo.getTodolist()
  }

}
