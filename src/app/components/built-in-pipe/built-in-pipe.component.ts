import { Component } from '@angular/core';
import { DatePipe, LowerCasePipe, UpperCasePipe, CurrencyPipe, PercentPipe } from '@angular/common';
import { AppendPipe } from '../../pipes/append.pipe';
@Component({
  selector: 'app-built-in-pipe',
  standalone: true,
  imports: [DatePipe, LowerCasePipe, UpperCasePipe, CurrencyPipe, PercentPipe, AppendPipe],
  templateUrl: './built-in-pipe.component.html',
  styleUrl: './built-in-pipe.component.scss'
})
export class BuiltInPipeComponent {
  title = "Pipes";
  today:number = Date.now()
  currencyValue: number =1.1234;
  value:string = "hello";
}
