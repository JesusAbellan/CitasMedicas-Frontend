import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    NewsComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    ComponentsModule
  ]
})
export class NewsModule { }
