import { Routes } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserRepoComponent } from './components/user-repo/user-repo.component';
import { StructureDirectivesComponent } from './components/structure-directives/structure-directives.component';

export const routes: Routes = [
    {path:'', component: UserProfileComponent},
    {path:'repo',component: UserRepoComponent},
    {path:'dir',component: StructureDirectivesComponent},
];
