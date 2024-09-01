import { Component, ElementRef, ViewChild, viewChildren } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  @ViewChild('form') private form? : ElementRef<HTMLFormElement>;
  constructor(){}

  onSubmit(title: string, ticket: string){
    console.log(title);
    console.dir(ticket);
    this.form?.nativeElement.reset();
  }
}
