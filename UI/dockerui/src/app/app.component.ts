import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  result: any;

  title = 'dockerui';
  /**
   *
   */
  constructor(private http: HttpClient) {
    this.http.get("http://localhost:8000/weatherforecast").subscribe(d=>{
      this.result = d;
      console.log(d);
    })
    
  }
}
