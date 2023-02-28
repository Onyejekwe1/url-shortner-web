import { Component, OnInit } from '@angular/core';
import { Url } from '../url';
import { UrlService } from '../url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-url',
  templateUrl: './create-url.component.html',
  styleUrls: ['./create-url.component.css']
})
export class CreateUrlComponent implements OnInit {

  url: Url = new Url();
  constructor(private urlService: UrlService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveUrl(){
    this.urlService.createUrl(this.url).subscribe( data =>{
      console.log(data);
      this.goToUrlList();
    },
    error => console.log(error));
  }

  goToUrlList(){
    this.router.navigate(['/urls']);
  }
  
  onSubmit(){
    console.log(this.url);
    this.saveUrl();
  }
}
