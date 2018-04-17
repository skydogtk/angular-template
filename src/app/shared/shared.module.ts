import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PublicComponent } from './layouts/public/public.component';
import { ProtectedComponent } from './layouts/protected/protected.component';

@NgModule({
    exports: [
        CommonModule,
        NavbarComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        NavbarComponent,
        FooterComponent,
        PublicComponent,
        ProtectedComponent
    ]
})
export class SharedModule { }
