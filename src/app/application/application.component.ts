import { Component } from '@angular/core';
import { application } from 'datatype';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {
  addapplicationMessage:string|undefined;
  constructor(private loan: LoanService){
  }
  submit(data:application){
  this.loan.application(data).subscribe((result)=>{
  console.warn(result);
  if(result){
  this.addapplicationMessage=
  "loan application form is successfully submitted"
  }
  setTimeout(() => (this.addapplicationMessage=undefined),3000 );
  })
  }
}
