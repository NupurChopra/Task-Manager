import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-manager';
  // constructor(private router:Router){
  //   this.getloggedInfo();
  // }
  // getloggedInfo=()=>{
  //   const token = localStorage.getItem("AuthToken");
  //   // mkae api call to verify the token

  //   if(token){
  //     this.router.navigate(['todos'])
  //   }
  //   else{
  //     this.router.navigate(['auth'])
  //   }
  // }
}
