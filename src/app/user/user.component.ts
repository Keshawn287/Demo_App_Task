import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-test';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length); // set to capture random user from ts file

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  /*
    Drawing random user code below
    1. set variable to select one of the users in the Dummy-test.ts file randomly (Import)
  */

  selectedUser = DUMMY_USERS[randomIndex]; //call randomIndex, set to variable

  //Getter set to Compute values for Component html
  //Method inside of class that usable like a property so that it does not need to be called and executed explicitly
  //Meant to produce and return a new value
  get imagePath() { //Call in HTML template
    return 'assets/users/' + this.selectedUser.avatar
  }

  onSelectedUser(){ //State Change
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
