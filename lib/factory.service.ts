import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiAdapterOld } from './api-adapter-old';
import { ApiAdapterNew } from './api-adapter-new';
import { ApiAdapterDefault } from './api-adapter-default';

interface Factory {
    createConcrete(any);
}

@Injectable()
export class FactoryService implements Factory {

    constructor(private http: Http) {
    }

    createConcrete(type?: any) {
        switch (type) {
            case 'new-adapter':
                return new ApiAdapterNew(this.http);
            case 'old-adapter':
                return new ApiAdapterOld(this.http);
            default:
                return new ApiAdapterDefault(this.http);
        }
    }

}

