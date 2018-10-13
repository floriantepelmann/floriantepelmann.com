import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class WorksService {

    uri = 'http://localhost:4000';

    constructor(private http: HttpClient) { }

    getWorks() {
        return this.http.get(`${this.uri}/works`);
    }

    getWorkById(id) {
        return this.http.get(`${this.uri}/works/${id}`);
    }
}
