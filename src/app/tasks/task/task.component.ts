import { Component, inject, Input } from '@angular/core';

import { type Task } from './task.model';

import { tasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  // imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  // @Output() complete = new EventEmitter<string>();
  private tasksService = inject(tasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
