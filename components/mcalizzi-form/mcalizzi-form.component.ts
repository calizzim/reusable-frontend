import { LoginService } from '../../services/login.service';
import { BackendRequestService } from '../../services/backend-request.service';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
@Component({
  selector: 'mcalizzi-form',
  templateUrl: './mcalizzi-form.component.html',
  styleUrls: ['./mcalizzi-form.component.css']
})
export class McalizziFormComponent implements OnInit {
  //required properties
  @Input('templateName') templateName;
  
  //optional properties
  @Input('fillFromDatabase') fillFromDatabase = true
  @Input('submitAction') submitAction;
  @Input('alert') alert = { active: false, message: '' }
  
  //output properties
  @Output('formSubmitted') formSubmitted = new EventEmitter();
  
  //class properties
  form = new FormGroup({});
  loaded = false
  template
  formValues
  
  constructor(private http:BackendRequestService,
              private login:LoginService) { }
  
  async ngOnInit() {
    this.template = this.http.get('forms/'+this.templateName)
    if(this.fillFromDatabase && this.login.is()) {
      this.formValues = await this.http.get('forms/formdata/'+this.templateName)
    }
    this.template = await this.template
    for(let group of this.template.groups){
      let formGroup = new FormGroup({});
      for(let component of group.components){
        let value
        if(component.defaultValue) value = component.defaultValue
        if(this.formValues && this.formValues[component.name]) value = this.formValues[component.name]
        let formControl = new FormControl(
          value, 
          this.getValidators(component.validators),
          this.getAsyncValidatorFn(component.name,component.asyncValidators)
        );
        formGroup.addControl(component.name, formControl);
      }
      this.form.addControl(group.title,formGroup)
    }
    this.loaded=true
  }

  isValid(group, field) {
    const obj = this.form.get([group.title,field.name])
    return (obj.touched || this.failedToSubmit) && !obj.errors
  }
  isInvalid(group, field) {
    const obj = this.form.get([group.title, field.name])
    return (obj.touched || this.failedToSubmit) && obj.errors
  }
  isNeutral(group, field) {
    const obj = this.form.get([group.title, field.name])
    return !obj.touched && !this.failedToSubmit
  }

  containsAdvanced(group) {
    return group.components.filter(e => e.advanced).length != 0
  }
  
  getMessage(group, field) {
    let component = this.form.get([group.title,field.name])
    const errors = component.errors
    if(errors) {
      return Object.keys(errors).sort().map(e => errors[e])[0]
    }
    return 'looks good'
  }

  failedToSubmit = false
  async onSubmit() {
    if(!this.form.valid) {
      this.failedToSubmit = true
      return
    }
    let data = {};
    for(let group of this.template.groups){
      for(let component of group.components){
        data[component.name] = this.form.get([group.title, component.name]).value;
      }
    }
    if(this.submitAction == 'upload') data = await this.http.uploadForm(data,this.templateName)
    this.formSubmitted.emit(data)
    if(this.template.resetOnSubmit) this.form.reset()
    this.failedToSubmit = false
  }
  
  getValidators(validators) {
    //get all of the validator functions
    let validatorFns = []
    for(let [index,validator] of validators.entries()) {
      validatorFns.push(this.getValidatorFn(index,validator))
    }
    return validatorFns
  }

  getValidatorFn(index,validator):ValidatorFn {
    validator.expression = JSON.parse(validator.expression)
    const expression = RegExp(validator.expression.source, validator.expression.flags)
    return (field:AbstractControl):ValidationErrors|null => {
      if(!expression.test(field.value)) {
        let error = {}; error[index] = validator.message;
        return error
      }
      return null
    }
  }

  getAsyncValidatorFn(fieldName, validators):AsyncValidatorFn|null {
    if(!validators) return null
    return (field:AbstractControl):Promise<ValidationErrors|null> => {
      return this.http.asyncVerify({
        name: fieldName,
        value: field.value,
        validators: validators
      }, this.templateName)
    }
  }

}