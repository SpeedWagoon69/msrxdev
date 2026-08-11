import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {

  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  contactForm: FormGroup = this.fb.group({
    sender_name: ['', Validators.required],
    sender_email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;

      this.http.post('http://localhost:3000/api/contact', this.contactForm.value)
        .subscribe({
          next: () => {
            this.submitSuccess = true;
            this.contactForm.reset();
            this.isSubmitting = false;
          },
          error: () => {
            this.submitError = true;
            this.isSubmitting = false;
          }
        });
    }
  }
}