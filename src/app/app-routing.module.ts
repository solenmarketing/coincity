import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/public/home/home.component';
import { PublicComponent } from './pages/public/public.component';
import { CoincityComponent } from './pages/public/coincity/coincity.component';
import { TermsComponent } from './pages/public/terms/terms.component';
import { PolicyComponent } from './pages/public/policy/policy.component';
import { NotFoundComponent } from './pages/public/not-found/not-found.component';


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
            },
            {
                path: '**',
                pathMatch: 'full',
                redirectTo: 'pagina-no-encontrada'
            },
            {
                path: 'pagina-no-encontrada',
                component: NotFoundComponent
            }
        ]
    }
    
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
