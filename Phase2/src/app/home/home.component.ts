import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
transition('inactive => active, active => inactive',
animate('100ms ease-out'))
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  animations: [
    trigger('flyInOut', [
      transition('void => *', [
      style({transform: 'translateY(-100%)'}),
      animate(300)
      ])
    ]),
//second 
trigger('flyIn', [
  state('in', style({transform: 'translateX(0)'})),
  transition('void => *', [
    style({transform: 'translateX(-100%)'}),
    animate(900)
  ]),
  transition('* => void', [
    animate(50, style({transform: 'translateX(100%)'}))
  ])
])

  ],

  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
