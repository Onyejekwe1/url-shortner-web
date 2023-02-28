import { Component, OnInit } from '@angular/core';
import { Url } from '../url';
import { ActivatedRoute } from '@angular/router';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-url-details',
  templateUrl: './url-details.component.html',
  styleUrls: ['./url-details.component.css']
})
export class UrlDetailsComponent implements OnInit {

  id: number
  url: Url
  constructor(private route: ActivatedRoute, private urlService: UrlService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.url = new Url();
    this.urlService.getUrlById(this.id).subscribe( data => {
      this.url = data;
    });
  }

}
