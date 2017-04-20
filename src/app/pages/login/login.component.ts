import 'style-loader!./login.scss';

import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './../../theme/provider/auth.service';
import { Component } from '@angular/core';
import { Credential } from './../../theme/model/credential.interface';

@Component({
  selector: 'login',
  templateUrl: './login.html',
})
export class Login {

  public form: FormGroup;
  public userName: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  constructor(fb: FormBuilder, private auth: AuthService) {
    this.form = fb.group({
      'userName': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])]
    });

    this.userName = this.form.controls['userName'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(credential: Credential) {
    this.submitted = false;
    if (this.form.valid) {
      this.auth.login(credential);
    }
  }
}
