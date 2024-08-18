import { Component, Input, Output, EventEmitter } from '@angular/core';
import { USER } from './user.model';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  // imports: [CardComponent],
})
export class UserComponent {
  @Input({ required: true }) user!: USER;
  @Input({ required: true }) slected!: boolean;
  @Output() select = new EventEmitter();

  get ImagePath() {
    return '/assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
