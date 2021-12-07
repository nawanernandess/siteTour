import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateRegistrationComponent } from 'src/app/crud-components/create-registration/create-registration.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openModCad(){
    const dialogRef = this.dialog.open(CreateRegistrationComponent, {
      width: '1000px'
    })

    dialogRef.afterClosed().subscribe();
  }

}
