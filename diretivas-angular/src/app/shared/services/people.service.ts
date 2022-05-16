import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

	getPeople():Observable<any>{
		let peopleArray =[
			{
				firstName:'Natalia',
				lastName:'Guedes',
				age:22
			},
			{
				firstName:'Rodrigo',
				lastName:'Fernandes',
				age:42
			},
			{
				firstName:'Marcela',
				lastName:'Ferreira',
				age:21
			},
			{
				firstName:'Marcio',
				lastName:'Santos',
				age:21
			},
		]
		return of(peopleArray);
	}
}
