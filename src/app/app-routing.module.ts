import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/public/home/home.component';
import { PublicComponent } from './pages/public/public.component';
import { CoincityComponent } from './pages/public/coincity/coincity.component';
import { TermsComponent } from './pages/public/terms/terms.component';
import { PolicyComponent } from './pages/public/policy/policy.component';


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
            },
            {
                path: 'terminos-y-condiciones',
                component: TermsComponent
            },
            {
                path: 'politicas-de-privacidad',
                component: PolicyComponent
            }
        ]
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
