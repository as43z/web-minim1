import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServiceService} from '../../../shared/services/seguimiento.service.service';
import {Seguimiento} from '../../../shared/interfaces/seguimiento.interface';

@Component({
  selector: 'app-seguimientos',
  templateUrl: './seguimientos.component.html',
  styleUrls: ['./seguimientos.component.css']
})
export class SeguimientosComponent implements OnInit {
  name: String = "";
  seguimientos: Seguimiento[] = [];
  constructor(private actRouter: ActivatedRoute, private seguimientoService: ServiceService) {
    this.actRouter.queryParams.subscribe(name =>{
      name = this.name;
    })
   }

  ngOnInit(): void {
    this.seguimientoService.getSeguimientos(this.name).subscribe(
      (response) => {
        this.seguimientos = response;
      },(error) => {
        alert('error');
      }
    );

    this.seguimientos.forEach(element => {
      let prep = "<tr> <td>" + element.nombre +
      "</td> <td>" + element.dni + "</td> <td>" + element.date + "</td> <td>";
    });
  }

}
