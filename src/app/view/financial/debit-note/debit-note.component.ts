import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debit-note',
  templateUrl: './debit-note.component.html',
  styleUrls: ['./debit-note.component.css']
})
export class DebitNoteComponent implements OnInit {
  txtdate: Date;
  constructor() { }

  ngOnInit(): void {
  }

}
