import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoItems: string[] = ['Learn Angular', 'Build a small app'];
  newTask: string = '';
  editedTask: string = '';
  editIndex: number = -1;

  addTask() {
    if (this.newTask.trim() !== '') {
      this.todoItems.push(this.newTask);
      this.newTask = '';
    }
  }

  editTask(index: number) {
    this.editIndex = index;
    this.editedTask = this.todoItems[index];
  }

  saveTask(index: number) {
    if (this.editedTask.trim() !== '') {
      this.todoItems[index] = this.editedTask;
      this.editIndex = -1;
      this.editedTask = '';
    }
  }

  cancelEdit() {
    this.editIndex = -1;
    this.editedTask = '';
  }

  deleteTask(index: number) {
    this.todoItems.splice(index, 1);
  }
}
