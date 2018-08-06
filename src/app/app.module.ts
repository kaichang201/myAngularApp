import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmartsearchComponent } from './smartsearch/smartsearch.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { HttpModule } from '@angular/http';
import { map } from 'rxjs/operators';

@NgModule({
  declarations: [
    AppComponent,
    SmartsearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2AutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
