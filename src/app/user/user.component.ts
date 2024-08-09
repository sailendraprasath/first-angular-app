import { Component, Input, Output, EventEmitter } from '@angular/core';
import { USER } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
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
