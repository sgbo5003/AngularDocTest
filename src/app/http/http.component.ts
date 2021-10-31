import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent implements OnInit {
  public dataArray: any[] = [];
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getApi();
  }

  // api data 가져오기
  getApi(): void {
    this.httpService.getApi().subscribe((resultData) => {
      this.dataArray = resultData;
      console.log(this.dataArray);
    });
  }

  // 10번째로 짜르기
  getSlice(): void {
    this.dataArray = this.dataArray.filter((data) => data.id < 11);
  }
}
