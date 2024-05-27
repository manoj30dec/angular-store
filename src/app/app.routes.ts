import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { SignalInputComponent } from './pages/signal-input/signal-input.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
// import { AllProductsComponent } from './pages/all-products/all-products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { TwoWayDataBindingComponent } from './pages/two-way-data-binding/two-way-data-binding.component';

export const routes: Routes = [
    { path:  'login', component:  LoginComponent, title:"Login"},
    { path:  'home', component:  HomeComponent, title:"Home"},
    // { path:  'all-products', component:  AllProductsComponent, title:"Product List"},
    { path:  'all-products', loadComponent:()=> import('./pages/all-products/all-products.component').then((c)=>c.AllProductsComponent) },
    { path:  'product-detail', component:  ProductDetailComponent, title:"Product Detail"},
    { path:  'two-way-data-binding-example', component:  TwoWayDataBindingComponent, title:"Two Way Data Binding Example"},
    // { path:  'angular-signals', component:  SignalInputComponent, title:"Angular Signals Example"},

    // { path:  'angular-signals', loadChildren:()=> import('./pages/signal-input/signals.routes').then((r)=>r.signalRoutes) }, //method one
    { path:  'angular-signals', loadChildren:()=> import('./pages/signal-input/signals.routes') }, //method two

    { path:  'users', component:  UsersComponent, title:"Users"},
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }, 
];
