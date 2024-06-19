import { Routes } from "@angular/router";
import { OnInitComponent } from "./on-init/on-init.component";
export const routesHooks: Routes = [
    { path:'', component:OnInitComponent, title:"ngOnInit Life Cycle Hook"}
]