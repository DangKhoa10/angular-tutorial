import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HousingService } from '../../service/housing.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  housingService = inject(HousingService);
  applyForm = new FormGroup({
    firstName: new FormControl("", [Validators.required , Validators.minLength(3), Validators.maxLength(10)]),
    lastName: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl('',[Validators.required, Validators.email])
  });

  submitApplication() {
    if(this.applyForm.invalid)
      return

    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
        
  }
}
