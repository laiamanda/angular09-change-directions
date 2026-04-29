import { bootstrapApplication } from '@angular/platform-browser';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

import { AppComponent } from './app/app.component';

// took away "zone.js" from poly fill from angular


bootstrapApplication(AppComponent, {
    providers: [provideExperimentalZonelessChangeDetection()],
}).catch((err) => console.error(err));
