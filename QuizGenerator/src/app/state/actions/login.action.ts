import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { UserInstance } from '../../interfaces/user';

export const LOGIN  = 'Login';
export const LOGOUT = 'Logout';

export class Login implements Action{
    readonly type = LOGIN;

    constructor(public payload: UserInstance){}

}

export class Logout implements Action{
    readonly type = LOGOUT;
}

export type Actions = Login | Logout;