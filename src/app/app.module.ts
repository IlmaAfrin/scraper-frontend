import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './Components/question/question.component';
import { HomeComponent } from './Components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { questionReducer } from './store/question.reducer';
import { EffectsModule } from '@ngrx/effects';
import { QuestionEffect } from './store/question.effects';
import { QuestionService } from './services/question.service';
import {MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: 'question', component: QuestionComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('question', questionReducer),
    EffectsModule.forRoot([QuestionEffect])
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
