import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Seguimiento } from '../../../shared/interfaces/seguimiento.interface';
import { ServiceService } from '../../../shared/services/seguimiento.service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // VAR
  @ViewChild('nameInput', {static: true}) nameInput: ElementRef | undefined;
  @ViewChild('dniInput', {static: true}) dniInput: ElementRef | undefined;
  @ViewChild('tipoTelf1Input', {static: true}) tipoTelf1Input: ElementRef | undefined;
  @ViewChild('telf1Input', {static: true}) telf1Input: ElementRef | undefined;
  @ViewChild('tipoTelf2Input', {static: true}) tipoTelf2Input: ElementRef | undefined;
  @ViewChild('telf2Input', {static: true}) telf2Input: ElementRef | undefined;
  fiebre: Boolean = false;
  persistencia: Boolean = false;
  dificultad: Boolean = false;
  malestar: Boolean = false;

  constructor(private seguimientoService: ServiceService) { }

  ngOnInit(): void {
  }

  submit(): void{
    const name = this.nameInput?.nativeElement.value;
    const dni = this.dniInput?.nativeElement.value;
    const tipoTelf1 = this.tipoTelf1Input?.nativeElement.value;
    const telf1n = this.telf1Input?.nativeElement.value;
    const tipoTelf2 = this.telf2Input?.nativeElement.value;
    const telf2n = this.telf2Input?.nativeElement.value;
    const date = Date.now();

    const telf1 = {
      "lugar": tipoTelf1,
      "numero": telf1n
    }

    const telf2 = {
      "lugar": tipoTelf2,
      "numero": telf2n
    }

    const seguimiento = {
      "nombre": name,
      "dni": dni,
      "date": date,
      "telf": [telf1, telf2],
      "fiebre": this.fiebre,
      "persistente": this.persistencia,
      "dificultadRespiratoria": this.dificultad,
      "malestarGeneral": this.malestar
    } as unknown as Seguimiento

    this.seguimientoService.registerUser(seguimiento).subscribe(
      (response) =>{
        alert(`Seguimiento registrado ${response.nombre}`);
      },
      (error) =>{
        alert('error');
      }
    );
  }

  onChangeFiebre(){
    this.fiebre = !this.fiebre;
  }

  onChangePersistencia(){
    this.persistencia = !this.persistencia;
  }

  onChangeMalestar(){
    this.malestar = !this.malestar;
  }

  onChangeDificultad(){
    this.dificultad = !this.dificultad;
  }

}
