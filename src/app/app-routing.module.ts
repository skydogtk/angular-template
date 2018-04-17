import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { PublicComponent } from './shared/layouts/public/public.component';
import { ProtectedComponent } from './shared/layouts/protected/protected.component';

// Routes
import { PUBLIC_ROUTES } from './shared/routes/public.routes';
import { PROTECTED_ROUTES } from './shared/routes/protected.routes';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: PublicComponent,
        children: PUBLIC_ROUTES
    },
    {
        path: '',
        component: ProtectedComponent,
        children: PROTECTED_ROUTES,
        canActivate: []
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
