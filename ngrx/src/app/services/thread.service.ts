import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Thread } from '../../../shared/model/thread';
import { AllUserData } from '../../../shared/dto/all-user-data';

@Injectable()
export class ThreadService {

  constructor(private http: Http) { }

loadUserThreads(): Observable<AllUserData>{
  return this.http.get('/api/threads')
    .map(r => r.json());
}

}
