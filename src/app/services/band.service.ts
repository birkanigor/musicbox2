
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import BandModel from "../models/band.model";

@Injectable()
export  class BandService {

    constructor ( private http: Http ) {}

        getBands():Observable<BandModel[]> {
            return this.http.get('http://localhost:3000/bands').map(this.extractData);        
        }

        private extractData(res:Response) {
            let bands = res.json();
            return bands || [];
        }
}
