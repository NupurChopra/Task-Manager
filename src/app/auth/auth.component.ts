import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule,
    HttpClientModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  authLogin:boolean = true ;
  fullName:string ="";
  password:string="";
  username:string="";
  constructor(private http:HttpClient){}
  changeToLogin=():void=>{
    this.authLogin= true;
  }

  changetoSignup=():void=>{
    this.authLogin= false;
  }
  onChange(event: Event, field: string): void {
    const input = event.target as HTMLInputElement;
    
    switch (field) {
      case 'fullName':
        this.fullName = input.value;
        break;
      case 'password':
        this.password = input.value;
        break;
      case 'username':
        this.username = input.value;
        break;
    }
  }

  onSubmit(): void {
    const userData={
      name:this.fullName,
      email:this.username,
      password:this.password,
    }
    this.http.post("http://localhost:2020/user/signup",userData)
    .subscribe({
        next: (response:any) => {
          // console.log('User signed up successfully', response);
          localStorage.setItem("AuthToken", `Bearer_${response.response}`)
          // Handle the success response here (e.g., display a success message or navigate to another page)
        },
        error: (error) => {
          console.error('Error signing up', error);
          // Handle the error here (e.g., display an error message)
        }
      });
  }

}
