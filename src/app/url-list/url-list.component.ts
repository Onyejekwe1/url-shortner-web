import { Component, OnInit } from '@angular/core';
import { Url } from '../url'
import { UrlService } from '../url.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.css']
})
export class UrlListComponent implements OnInit {

  urls: Url[];

  constructor(private employeeService: UrlService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUrls();
  }

  private getUrls(){
    this.employeeService.getUrlsList().subscribe(data => {
      this.urls = data;
    });
  }
}
