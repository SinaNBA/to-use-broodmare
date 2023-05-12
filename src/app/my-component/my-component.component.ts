import { Component, OnInit } from '@angular/core';
import { SettingsService } from '@apaq/broodmare-settings';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {

  constructor(private settingService: SettingsService) {}

  ngOnInit() {
  }

  showSettings() {
    this.settingService.openSettings();
  }

}
