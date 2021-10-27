import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
})
export class ProfileEditorComponent {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([this.fb.control('')]),
  });
  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: '박상준',
      address: {
        street: '덕영대로',
      },
    });
  }

  // 게터
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  // 폼 컨트롤 항목 추가
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}
