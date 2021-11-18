import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/public/home/home.component';
import { PublicComponent } from './pages/public/public.component';
import { CoincityComponent } from './pages/public/coincity/coincity.component';


const routes: Routes = [
    {
        path: '',
        component: PublicComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'coincity',
                component: CoincityComponent
            }
        ]
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
