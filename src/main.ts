import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations'; // ✅ Enable animations
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { AccordionModule } from 'ngx-bootstrap/accordion'; // ✅ Import AccordionModule

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(), // ✅ Enable animations
    importProvidersFrom(AccordionModule.forRoot()) // ✅ Register NGX Bootstrap Accordion
  ]
}).catch(err => console.error(err));
