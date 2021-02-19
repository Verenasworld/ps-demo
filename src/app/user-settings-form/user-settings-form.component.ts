import { Component, OnInit,  } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css'],
})

export class UserSettingsFormComponent implements OnInit {

  public originalUserSettings : UserSettings = {
    name: 'vreni',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Weekly',
    testing:'#ff0000'
   };

  userSettings : UserSettings = {...this.originalUserSettings}

  constructor() {}

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(`in onSubmit:`, form.valid)
  }

  onBlur(field: NgModel){
    console.log(`in onBlur`, field.valid)

  }
}
