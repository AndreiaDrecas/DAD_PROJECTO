import { FormControl, FormGroup } from '@angular/forms';

export function emailValidator(control: FormControl): {[key: string]: any} {
  var emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  if (control.value && !emailRegexp.test(control.value)) {
    return {invalidEmail: true};
  }
}

//CONTROL GROUP VALIDATORS
export function matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
      return (group: FormGroup): {[key: string]: any} => {
        let password = group.controls[passwordKey];
        let confirmPassword = group.controls[confirmPasswordKey];
      
        if (password.value !== confirmPassword.value) {
          return {
            mismatchedPasswords: true
          };
       }
   }
}

export function checkNumber(control: FormControl): {[key: string]: any} {

  if (control.value <= 1 || control.value >= 5) {
    return {invalidNumber: true};
  }
}

export function compareMinAndMax(minPlayers: string, maxPlayers: string){
  return (group: FormGroup): {[key: string]: any} => {
    let minPlayersNumber = group.controls[minPlayers];
    let maxPlayersNumber = group.controls[maxPlayers];
      
      if (minPlayersNumber.value > maxPlayersNumber.value) {
        return {
          invalidMinOrMaxPlayers: true
        };
      }
  }
}
