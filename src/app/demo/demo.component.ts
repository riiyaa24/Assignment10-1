import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  public Aresult : number = 0
  public Sresult : number = 0

  public constructor(private arithmeticService : ArithmeticService)
  {
    this.Aresult = this.arithmeticService.Add(10,5)
    this.Sresult = this.arithmeticService.Subt(10,5)
  }

}
