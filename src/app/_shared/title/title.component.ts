import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'title-section',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.sass']
})
export class TitleComponent implements OnInit {

  @Input() title : string;
  @Input() subtitle : string;
  @Input() text : string;
  
  constructor() { }

  ngOnInit() {
  }

}
