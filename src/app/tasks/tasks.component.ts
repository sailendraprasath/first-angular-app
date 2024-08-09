import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { tasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) UserId!: string;
  isAddingTask = false;
  //constructor
  constructor(private tasksService: tasksService) {}

  get SelectedUserTasks() {
    return this.tasksService.getUsersTasks(this.UserId);
  }

  // onCompleteTask(id: string) {

  // }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  // onAddTask(taskData: NewTaskData) {
  //   this.isAddingTask = false;
  // }
}
