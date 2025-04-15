import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { User } from '../models/user.class';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule, FormsModule, MatDialogModule, MatFormFieldModule, MatDatepickerModule, MatButtonModule, MatInputModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {
  user = new User();
  birthDate!: Date


  onNoClick(){}

 saveUser(){
  if (this.birthDate) {
    this.user.birthDate = this.birthDate.getTime();
  }
  console.log(this.user);
  
 }

  onInput(){}
}
