import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../shared/material.module';
import { AppRoutingModule } from '../app-routing.module';

import { PreparationListService } from '../preparation-list/preparation-list.service';
import { DishService } from '../dishes/dish.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../../app/auth/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    MaterialModule,
    AppRoutingModule,
    CommonModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    PreparationListService,
    DishService,
    DataStorageService,
    AuthService
  ]
})

export class CoreModule { }
