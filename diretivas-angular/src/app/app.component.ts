import { PeopleService } from './shared/services/people.service';
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

text='';
people=[
	{
		firstName:'',
		lastName:'',
		age:0
	}
];

 constructor( private peopleService:PeopleService, ){ }

  ngOnInit() {

     let interval = setInterval(()=>{

      this.count++

       if(this.count===10){
         clearInterval(interval)
       }

      },1000

      )
	this.getPessoas();
    }


    clicou(nome:string):void{
console.log('clicou em mim',nome)
    }

		getPessoas(){
			this.peopleService.getPeople()
			.subscribe(pessoas=>{this.people=pessoas});
		}
    }



