import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appMarcaTexto]'
})
export class MarcaTextoDirective implements OnInit{
//cria -se uma diretiva customizada em casos que ão de pra usar diretivas de Atributos
// e nem Estruturadas


@Input() corDeFundo ='yellow';
@Input() corDoTexto = 'white';

  constructor(private elemento:ElementRef) { }


  ngOnInit(): void {
    this.mudarCordeFundo();
  }

  private mudarCordeFundo(cor:string='yellow'){
    //nativeElement é um método que muda os elementos
this.elemento.nativeElement.style.backgroundColor = this.corDeFundo || cor;
this.elemento.nativeElement.style.color = this.corDoTexto;
this.elemento.nativeElement.style.fontWeight = 'bold';

  }

}
