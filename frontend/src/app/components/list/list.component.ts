import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Work } from '../../work.model';
import { WorksService } from "../../works.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    works: Work[];

    constructor(private worksService: WorksService, private router: Router) { }

    ngOnInit() {
        this.fetchWorks();
    }

    fetchWorks() {
        this.worksService
            .getWorks()
            .subscribe((data: Work[]) => {
                this.works = data;
            });
    }

    displayWork(id) {
        this.router.navigate([`/detail/${id}`])
    }

}
