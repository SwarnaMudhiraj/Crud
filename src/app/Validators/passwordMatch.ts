import { AbstractControl } from "@angular/forms";

export function PasswordMatch(password: string, confirm_password: string) {
     return function(form: AbstractControl) {
        const pass = form.get(password)?.value
        const conf = form.get(confirm_password)?.value
        
        if (pass === conf) {
            return null;

        }
        return{passwordMismatchError:true}
        
    }
}