import { CandinComponent } from './components/candin/candin.component';
import { customNotifierOptions } from './app.notify';
import { NotifierModule } from 'angular-notifier';
import { VisitService } from './services/visit.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainpanelComponent } from './components/mainpanel/mainpanel.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { routes } from './app.routes';
import { VisitNewComponent } from './components/visit-new/visit-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './services/employee.service';
import { NotifyComponent } from './components/common/notify/notify.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainpanelComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    VisitNewComponent,
    CandinComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NotifierModule.withConfig(customNotifierOptions),
    routes,
    ToastrModule.forRoot()
  ],
  providers: [
    VisitService,
    EmployeeService,
    NotifyComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
