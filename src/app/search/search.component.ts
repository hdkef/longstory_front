import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router:Router) { }

  searchForm:FormGroup
  
  ngOnInit(): void {
    this.searchForm = new FormGroup({
      'Key':new FormControl(null,Validators.required)
    })
  }

  goSearch(){
    this.router.navigate(["/search"],{queryParams:{Key:this.searchForm.value.Key}})
  }

}
