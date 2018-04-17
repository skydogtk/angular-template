import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { CoreModule } from './core/core.module';

// Components
import { AppComponent } from './app.component';
import { PublicComponent } from './shared/layouts/public/public.component';

// Guards
import { AuthGuard } from './core/guards/auth.guard';

// Services
import { AuthService } from './core/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
