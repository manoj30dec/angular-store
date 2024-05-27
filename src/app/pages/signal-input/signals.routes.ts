// import { Route, Routes } from '@angular/router';
import { Route } from '@angular/router';
import { SignalInputComponent } from './signal-input.component';
import { InputSignalComponent } from './input-signal/input-signal.component';
import { SingalQueriesComponent } from './singal-queries/singal-queries.component';

// export const signalRoutes: Routes = [{ path:  '', component:  SignalInputComponent, title:"Angular Signals Example"}] // method 1
// export default [{ path:  '', component:  SignalInputComponent, title:"Angular Signals Example"}] as Route[] //method two
export default [{ path:  '', component:  SignalInputComponent, title:"Angular Signals Example", children:[
    {path:'input-signal', component:InputSignalComponent},
    {path:'signal-quries', component:SingalQueriesComponent}
]}] as Route[] //method two