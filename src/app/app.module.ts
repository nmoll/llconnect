import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { Contacts } from '@ionic-native/contacts';
import { SMS } from '@ionic-native/sms';

import { MyApp } from './app.component';

import { CardsPage } from '../pages/cards/cards';
import { CarpoolCreatePage } from '../pages/carpool-create/carpool-create';
import { CarpoolDetailPage } from '../pages/carpool-detail/carpool-detail';
import { CarpoolListPage } from '../pages/carpool-list/carpool-list';
import { ContentPage } from '../pages/content/content';
import { MemberDetailPage } from '../pages/member-detail/member-detail';
import { MemberInvitationPage } from '../pages/member-invitation/member-invitation';
import { MemberListPage } from '../pages/member-list/member-list';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { MenuPage } from '../pages/menu/menu';
import { SettingsPage } from '../pages/settings/settings';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TextMessagePage } from '../pages/text-message/text-message';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';

import { Api } from '../providers/api';
import { Carpools } from '../providers/carpools';
import { Members } from '../mocks/providers/members';
import { Settings } from '../providers/settings';
import { User } from '../providers/user';

import { Camera } from '@ionic-native/camera';
import { GoogleMaps } from '@ionic-native/google-maps';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: '',
    option3: '',
    option4: ''
  });
}

@NgModule({
  declarations: [
    MyApp,
    CardsPage,
    CarpoolCreatePage,
    CarpoolDetailPage,
    CarpoolListPage,
    ContentPage,
    MemberDetailPage,
    MemberInvitationPage,
    MemberListPage,
    HomePage,
    LoginPage,
    MapPage,
    MenuPage,
    SettingsPage,
    SignupPage,
    TabsPage,
    TextMessagePage,
    TutorialPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CardsPage,
    CarpoolCreatePage,
    CarpoolDetailPage,
    CarpoolListPage,
    ContentPage,
    MemberDetailPage,
    MemberInvitationPage,
    MemberListPage,
    HomePage,
    LoginPage,
    MapPage,
    MenuPage,
    SettingsPage,
    SignupPage,
    TabsPage,
    TextMessagePage,
    TutorialPage,
    WelcomePage
  ],
  providers: [
    Api,
    Carpools,
    Contacts,
    Members,
    SMS,
    User,
    Camera,
    GoogleMaps,
    SplashScreen,
    StatusBar,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
