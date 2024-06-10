import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { SignalInputComponent } from './pages/signal-input/signal-input.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
// import { AllProductsComponent } from './pages/all-products/all-products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { TwoWayDataBindingComponent } from './pages/two-way-data-binding/two-way-data-binding.component';
import { GlobalStaemanagementComponent } from './pages/global-staemanagement/global-staemanagement.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminComponent } from './pages/admin/admin.component';
import { authGuard } from './services/auth.guard';
import { confirmLeaveGuard } from './services/confirm-leave.guard';

export const routes: Routes = [
    { path:  'login', component:  LoginComponent, title:"Login"},
    { path:  'signup', component:  SignupComponent, title:"Sign Up"},
    { path:  'home', component:  HomeComponent, title:"Home",  canActivate:[authGuard] },

    // Example of lazy loading
    // { path:  'all-products', component:  AllProductsComponent, title:"Product List"},
    // { path:  'product-detail', component:  ProductDetailComponent, title:"Product Detail"},
    { path:  'all-products', loadComponent:()=> import('./pages/all-products/all-products.component').then((c)=>c.AllProductsComponent),  canActivate:[authGuard] },
    { path:  'product-detail/:id', loadComponent:()=> import('./pages/product-detail/product-detail.component').then((c)=>c.ProductDetailComponent), canDeactivate:[confirmLeaveGuard],  canActivate:[authGuard] },
    { path:  'two-way-data-binding-example', component:  TwoWayDataBindingComponent, title:"Two Way Data Binding Example",  canActivate:[authGuard]},

    // Example of nested routing
    // { path:  'angular-signals', component:  SignalInputComponent, title:"Angular Signals Example"},
    // { path:  'angular-signals', loadChildren:()=> import('./pages/signal-input/signals.routes').then((r)=>r.signalRoutes) }, //method one
    { path:  'angular-signals', loadChildren:()=> import('./pages/signal-input/signals.routes'),  canActivate:[authGuard] }, //method two

    { path:  'contact-us', component:  ContactUsComponent, title:"Contact us"},
    { path:  'users', component:  UsersComponent, title:"Users", canActivate:[authGuard]},
    { path:  'admin', component:  AdminComponent, title:"Admin", canActivate:[authGuard] },
    { path:  'global-statemanagement', component:  GlobalStaemanagementComponent, title:"State management using service"},
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }, 
];
