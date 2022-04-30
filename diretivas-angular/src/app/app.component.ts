import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 count=0;
 
 constructor(){}

  ngOnInit() {
   
     let interval = setInterval(()=>{
       
      this.count++
      
       if(this.count===10){
         clearInterval(interval)
       }
       
      },1000
      
      )
      
    }
     
    }
    
  

