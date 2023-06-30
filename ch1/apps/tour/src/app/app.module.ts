import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'admin',
        loadChildren: () => import('@monos/admin').then((m) => m.AdminModule),
      },
      {
        path: 'tour',
        loadChildren: () =>
          import('@monos/visitor').then((m) => m.VisitorModule),
      },
      { path: '', pathMatch: 'full', redirectTo: 'tour' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
