import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { WorksService } from "./works.service";
import {ReversePipe} from "../pipes/reverse_order.pipe";
import {OrderObjectBy} from "../pipes/order_object_by.pipe";
import {SafePipe} from "../pipes/safe.pipe";

const routes: Routes = [
    { path: 'detail/:id', component: DetailComponent },
    { path: 'list', component: ListComponent },
    { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    ReversePipe,
    SafePipe,
    OrderObjectBy
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(routes)
  ],
  providers: [WorksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
