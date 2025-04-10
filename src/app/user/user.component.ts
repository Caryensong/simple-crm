import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

}
