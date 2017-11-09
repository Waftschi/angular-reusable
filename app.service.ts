import { Injectable } from '@angular/core';
import { FactoryService } from './lib/factory.service';

// export const ADAPTER_TYPE = 'old-adapter';
// export const ADAPTER_TYPE = 'new-adapter';
export const ADAPTER_TYPE = 'default-adapter';

@Injectable()
export class AppService {
    result: any[];

    constructor(private factory: FactoryService) {
    }

    getUser() {
        this.factory.createConcrete(ADAPTER_TYPE).execute()
            .subscribe((result) => {
                console.dir(result);
                this.result = result;
            });
    }

}
