import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ShellModule } from '@apaq/broodmare-shell';
import { NgxStallionModule } from '@apaq/ngx-stallion';
import { MenuProfile, NavigationModule } from '@apaq/broodmare-navigation';
import { SettingsModule } from '@apaq/broodmare-settings';
import { PluginRegistration, PluginsModule } from '@apaq/broodmare-plugins';

// List of plugins to register in app.
const plugins: PluginRegistration[]= [];

const defaultMenuProfile: MenuProfile = {
  entries: []
}

@NgModule({
  declarations: [AppComponent, MyComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxStallionModule,
    ShellModule.forRoot({
      plugins,
      navigation:{defaultProfile:defaultMenuProfile}
    }),
    NavigationModule,
    SettingsModule,
    PluginsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
