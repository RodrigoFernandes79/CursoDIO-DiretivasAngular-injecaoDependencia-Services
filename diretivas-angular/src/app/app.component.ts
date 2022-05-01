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

 nome='Rodrigo Holanda Fernandes';

 pessoas =[
   {
  nome:'Ivonaldo',
  sobrenome:'Soares'
 },
 {
  nome:'Rodrigo',
  sobrenome:'Fernandes'
 },
 {
  nome:'Marcela',
  sobrenome:'Ferreira'
 },
 {
  nome:'Regiane',
  sobrenome:'Alves'
 },
];

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
    
    
    clicou(nome:string):void{
console.log('clicou em mim',nome)
    }
    }
    
  

