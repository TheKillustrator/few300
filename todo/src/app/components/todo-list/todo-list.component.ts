import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  items = ['Take out trash', 'Clean garage', 'Move desk'];
  constructor(private dialogref: MatDialogRef<TodoListComponent>) { }

  ngOnInit(): void {
  }

  drop(evt: any): void {
  }

  done(): void {
    this.dialogref.close();
  }

}
