import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
task:any;
id:any;
list:any=[];
  ngOnInit(): void {
  }

  
addTask(task:any){
  this.list.push({id:this.list.length,name:task})
}

remove(id:any){
  console.log(id)
  
        this.list=this.list.filter((item:any)=>item.id !== id)

}
}
