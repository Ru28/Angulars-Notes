import { Routes } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserRepoComponent } from './components/user-repo/user-repo.component';

export const routes: Routes = [
    {path:'', component: UserProfileComponent},
    {path:'repo',component: UserRepoComponent},
];
