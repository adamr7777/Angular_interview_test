import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Application } from '../application';

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [CommonModule],
  template: `
      <li class="applications-item">
            <h3 class="application-title">Application No. {{index + 1}}</h3>
            <p class="detail-label"><span>First Name: {{application.firstName}}</span></p> 
            <p class="detail-label"><span>Last Name: </span>{{application.lastName}}</p> 
            <p class="detail-label"><span>Email: </span>{{application.email}}</p> 
      </li> 
  `,
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {
      @Input() application!: Application; 
      @Input() index!: number;
}

