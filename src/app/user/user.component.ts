import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {FormControl} from '@angular/forms';
import {MatTooltipModule, TooltipPosition} from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-user',
  standalone:true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit{

  constructor( public dialog: MatDialog){}
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  ngOnInit(): void {
  
  }

  openDialog(){
this.dialog.open(DialogAddUserComponent)
  }
}
