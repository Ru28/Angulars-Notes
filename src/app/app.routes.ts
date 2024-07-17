import { Routes } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserRepoComponent } from './components/user-repo/user-repo.component';
import { StructureDirectivesComponent } from './components/structure-directives/structure-directives.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { BuiltInPipeComponent } from './components/built-in-pipe/built-in-pipe.component';
import { DependancyInjectionComponent } from './components/dependancy-injection/dependancy-injection.component';
import { JsonAsyncpipeComponent } from './components/json-asyncpipe/json-asyncpipe.component';
import { SignalComponent } from './components/signal/signal.component';
import { ObservableComponent } from './components/observable/observable.component';
import { TemplatedrivenFormComponent } from './components/templatedriven-form/templatedriven-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TaskComponent } from './components/task/task.component';

export const routes: Routes = [
    {path:'', component: UserProfileComponent},
    {path:'repo',component: UserRepoComponent},
    {path:'dir',component: StructureDirectivesComponent},
    {path:'control',component: ControlFlowComponent},
    {path:'pipe',component: BuiltInPipeComponent},
    {path:'depinje',component: DependancyInjectionComponent},
    {path:'jsonasyncpipe',component: JsonAsyncpipeComponent},
    {path:'signal',component: SignalComponent},
    {path:'observable',component: ObservableComponent},
    {path:'template-form',component: TemplatedrivenFormComponent},
    {path:'reactive-form',component: ReactiveFormComponent},
    {path:'task',component: TaskComponent}
];
