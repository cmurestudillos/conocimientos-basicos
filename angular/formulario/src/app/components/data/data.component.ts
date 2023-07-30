import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'
import { Observable } from 'rxjs/Rx'


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma:FormGroup;

  usuario:Object = {
    nombrecompleto: {
      nombre: "Curso",
      apellido: "Angular"
    },
    correo: "curso.angular@dia.com",
  }

  constructor() {

    console.log(this.usuario);

    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup({
        //Podemos incluir valores por defecto 
        // los validadores van por arrays
        'nombre': new FormControl('' ,  [
                                          Validators.required,
                                          Validators.minLength(3)
                                        ]),
        'apellido': new FormControl('', [
                                          Validators.required,
                                          this.noAngular
                                        ])
      }),
      'correo': new FormControl('',   [
                                        Validators.required,
                                        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                      ]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required )
      ]),
      'username': new FormControl('', Validators.required, this.existeUsuario  ),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
    })

    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind( this.forma )
    ]);

    //------Funcionamiento de un observador!!!
    /*Esta forma detecta todos los cambios COMPROBAR
    this.forma.valueChanges.subscribe ( data=>
      console.log(data);
    })
      */
// log's para cambios en los campos nombre y apellidos
    this.forma.controls['username'].valueChanges
        .subscribe(  data =>{
          console.log(data);
        })

    this.forma.controls['username'].statusChanges
        .subscribe(  data =>{
          console.log(data);
          })



  }


  agregarPasatiempo(){
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required )
    )
  }

  noAngular( control: FormControl ): { [s:string]:boolean }  {

    if( control.value === "angular" ){
      return {
        //Esto es que está fallando
        noangular:true
      }
    }

    return null;

  }

  noIgual( control: FormControl ): { [s:string]:boolean }  {

    // console.log(this);
    let forma:any = this;

    if( control.value !== forma.controls['password1'].value ){
      return {
        noiguales:true
      }
    }

    return null;

  }

  existeUsuario( control: FormControl ): Promise<any>|Observable<any>{

    let promesa = new Promise(
      ( resolve, reject )=>{

        setTimeout( ()=>{
          if( control.value === "Vruno" ){
            resolve( {existe:true} )
          }else{
            resolve( null )
          }

        },3000 )

      }
    )

    return promesa;

  }



  guardarCambios(){
    console.log( this.forma.value );
    console.log( this.forma );
  }


}
