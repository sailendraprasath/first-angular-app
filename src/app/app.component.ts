import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;
  selectUserID?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectUserID)!;
  }
  onSelectUser(id: string) {
    // console.log('Selected user with ID' + id);
    this.selectUserID = id;
  }
}
