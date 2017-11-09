import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import { ApiAdapter } from './api-adapter';


// @Injectable()
export class ApiAdapterOld implements ApiAdapter {
    private productUrl: string = 'api/products/products.json';

    constructor(private http: Http) {

    }

    execute(): Observable<any> {
        console.dir(this.http);
        return Observable.of({userId: 1, type: 'old'});

        // return this.http.get(this.productUrl).map((response: Response) => <Product[]>response.json())
        // .do(data => console.log('All: ' + JSON.stringify(data)))
        // .catch(this.handleError);

        // return [];
    }

}

