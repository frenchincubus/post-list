import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  { path: 'users', component: UserPageComponent },
  { path: 'posts', component: PostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
