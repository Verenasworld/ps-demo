import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  public userSettings : UserSettings = {
    name: 'vreni',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Weekly',
   
  };

  constructor() {}

  ngOnInit(): void {
  }

}
