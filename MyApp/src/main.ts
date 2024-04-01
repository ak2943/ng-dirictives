import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { StudentAppModule } from './Studentapp/Studentapp.module';


platformBrowserDynamic().bootstrapModule(StudentAppModule)
  .catch(err => console.error(err));
