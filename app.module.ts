import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FactoryService } from './lib/factory.service';
import { HttpModule } from '@angular/http';
import { AppService } from './app.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
    ],
    providers: [FactoryService, AppService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
