import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users=[
    {
      firstName:"Manoj",
      lastName:"Kumar",
      age:38,
      qualification:"MCA"
    },
    {
      firstName:"Hanish",
      lastName:"Bhardwaj",
      age:33,
      qualification:"MBA"
    },
    {
      firstName:"Muskan",
      lastName:"Mehta",
      age:28,
      qualification:"MCA"
    },
    {
      firstName:"Rajesh",
      lastName:"Bhatia",
      age:31,
      qualification:"MBA"
    },
    {
      firstName:"Pooja",
      lastName:"Chauhan",
      age:31,
      qualification:"B.Tech"
    }
  ]



}
