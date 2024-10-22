import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sample';
  result:any = null;

  constructor(private http : HttpClient)
  {

  }

  onClick()
  {
    console.log("Triggered")
    this.http.get("https://localhost:7042/api/CourseManagement/Home").subscribe(data => this.result = data)
    console.log(this.result);
    setTimeout(() => this.result = null, 5000)
  }
}
