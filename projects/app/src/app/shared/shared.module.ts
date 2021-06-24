import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppMaterialModule } from './material.module';

@NgModule({
  exports: [AppMaterialModule, FlexLayoutModule],
})
export class AppSharedModule {}
