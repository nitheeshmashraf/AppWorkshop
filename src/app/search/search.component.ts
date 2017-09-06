import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  private apiURL='https://pixabay.com/api/?key=6361417-ad97c2d131a8c928dd6f4d85d&pretty=true&q=';
  data:any={};
  SearchTerm:string ='Lion';

  constructor(private http:Http) {
    this.getData();
   }

   getData(){
     return this.http.get(this.apiURL+this.SearchTerm)
     .map((res:Response)=>res.json())
     .subscribe(data=>{
       this.data=data;
     })
   }

  
  ngOnInit() {
  }

}
