import { Component } from '@angular/core';
import { SettingsService } from '@apaq/broodmare-settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'to-use-broodmare';
  constructor(private settingService: SettingsService) {}
  showSettings() {
    this.settingService.openSettings();
  }
}
