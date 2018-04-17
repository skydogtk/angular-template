import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from '../shared/shared.module';

@NgModule({
    exports: [
        SharedModule
    ],
    imports: [
        SharedModule
    ],
    declarations: [ ]
})
export class CoreModule { }
