import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appCreationNature]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CreationNatureDirective, multi: true }]
})
export class CreationNatureDirective implements Validator {

  constructor() { }


  validate(control: AbstractControl): ValidationErrors | null {

    // En cas de règle respecté (value commence par http), retourner null
    // Sinon retourner l'objet { UrlValidatorDirective : true }
    console.log(control.value);

    if (control.value > 0 && control.value < 10) {

      return null; // OK
    }

 
    return { CreationNatureDirective: true }; // KO => pas valide
  }

}
