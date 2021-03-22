import { NotificationService } from './../../shared/messages/notification.service';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'mt-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    navigateTo: string;

    constructor(
        private fb: FormBuilder,
        private readonly loginService: LoginService,
        private readonly notificationService: NotificationService,
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.loginForm = this.fb.group({
            email: this.fb.control('', [Validators.required, Validators.email]),
            password: this.fb.control('', [
                Validators.required,
                Validators.minLength(3)
            ])
        });
        this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/');
    }

    login() {
        this.loginService
            .login(this.loginForm.value.email, this.loginForm.value.password)
            .subscribe((user: User) => {
                this.notificationService.notify(`Bem vindo, ${user.name}`)
                this.router.navigate([atob(this.navigateTo)])
                },
                (response) => {
                    this.notificationService.notify(response.error.message)
                }
            );
    }
}
