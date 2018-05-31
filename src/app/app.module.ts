import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TaskComponent } from './componet/task/task.component';
import { TaskService } from './services/task.service';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
    

  ],
  providers: [TaskService],
    // TaskServices
    // provide: HTTP_INTERCEPTORS,
    // useClass:GithubAuthInterceptor,
    // multi:true
  
  bootstrap: [AppComponent]
})
export class AppModule { }
