import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent {

  @Input() public selectedHotel: object[];

  public constructor() { }

}
