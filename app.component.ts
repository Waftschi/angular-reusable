import { Component } from '@angular/core';
import { FactoryService } from './lib/factory.service';
import { AppService } from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    constructor(private factory: FactoryService, private appService: AppService) {

    }

    //
    getUser() {
        this.appService.getUser();
    }
}
