import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
    {path:"auth", component:AuthComponent},
    {path:"todos",component:TodoComponent}
];
