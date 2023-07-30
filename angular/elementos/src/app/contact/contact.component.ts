import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

/*  Primero, importamos FormBuilder, FormGroup, Validators de @ angular / forms. Luego, configuramos algunas propiedades booleanas que nos ayudarán
    a determinar cuándo se ha enviado el formulario y si la validación se realizó correctamente. Entonces, creamos una instancia de formBuilder en el constructor.
    Luego usamos este formulario para construir las propiedades de nuestro formulario en el gancho del ciclo de vida de ngOnInit ().
    Tenemos dos propiedades, nombre y mensaje. Luego creamos un método onSubmit() que se llamará cuando el usuario envíe el formulario. 
    Por lo general, es aquí donde se solicita un método en el servicio para comunicarse con un servicio de correo de todo tipo. */

export class ContactComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
        return;
    }

    this.success = true;
}

}
