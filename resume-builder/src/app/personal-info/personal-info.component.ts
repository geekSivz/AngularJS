import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(res => console.log(''));
  }

  ngOnInit() {
  }
}
