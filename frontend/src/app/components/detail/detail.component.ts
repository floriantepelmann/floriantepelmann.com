import { Component, OnInit } from '@angular/core';
import { WorksService } from "../../works.service";
import { Router, ActivatedRoute } from "@angular/router";

import { Work } from "../../work.model";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

    id: String;
    work: any = {};

    constructor(private worksService: WorksService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params.id;
            this.worksService.getWorkById(this.id).subscribe(res => {
                this.work = res;
            })
        })
    }

}
