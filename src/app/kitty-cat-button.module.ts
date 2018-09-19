// NG
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { KittyCatButtonComponent } from './kitty-cat-button.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [KittyCatButtonComponent],
  entryComponents: [KittyCatButtonComponent],
})
export class KittyCatButtonModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const elm = createCustomElement(KittyCatButtonComponent, {
      injector: this.injector,
    });
    customElements.define('kitty-cat-button', elm);
  }
}
