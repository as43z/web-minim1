import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInput: ElementRef | undefined;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  submit(): void{
    const name = this.nameInput?.nativeElement.value;

    if(name == '' || name.includes(' ')){
      alert('el nombre no puede estar vacio');
    } else {
      this.route.navigate(['/seguimientos'], {queryParams: {name: name}});
    }
  }
}
