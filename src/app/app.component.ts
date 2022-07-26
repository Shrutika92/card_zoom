import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('enlarge', [
      state('start', style({
      height: '200px',
      width: '300px'
      })),
      state('end', style({
      height: '550px',
      width:'800px'
      })),
      transition('* => *', [
      animate('0.8s')
      ]) ]),
      fadeInOnEnterAnimation()
      
  ]
  
})
export class AppComponent {
  title = 'card_zoom';
  items =[{name:'item1', isEnlarge: false},{name:'item2', isEnlarge: false},{name:'item3', isEnlarge: false},{name:'item4', isEnlarge: false}]
  zoomOut(item:any){
    item.isEnlarge = true;
  }
  zoomIn(item:any){
    item.isEnlarge = false;
  }
}
