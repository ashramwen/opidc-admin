import {
  BaAppPicturePipe,
  BaProfilePicturePipe,
} from './pipes';
import {
  BaBackTop,
  BaCard,
  BaCheckbox,
  BaContentTop,
  BaMenu,
  BaMenuItem,
  BaMultiCheckbox,
  BaPageTop,
  BaSidebar,
} from './components';
import {
  BaImageLoaderService,
  BaMenuService,
  BaThemePreloader,
  BaThemeSpinner,
} from './services';
import {
  BaScrollPosition,
  BaSlimScroll,
  BaThemeRun,
} from './directives';
import {
  CheckboxComponent,
  CheckboxListComponent,
  EditListComponent,
  RadioListComponent,
  ScopeListComponent,
  TagComponent,
} from '../pages/components';
import {
  EmailValidator,
  EqualPasswordsValidator,
} from './validators';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppTranslationModule } from '../app.translation.module';
import { AuthModule } from './auth.module';
import { BaCardBlur } from './components/baCard/baCardBlur.directive';
import {
  BaThemeConfig,
} from './theme.config';
import {
  BaThemeConfigProvider,
} from './theme.configProvider';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

const NGA_COMPONENTS = [
  BaBackTop,
  BaCard,
  BaCheckbox,
  BaContentTop,
  BaMenuItem,
  BaMenu,
  BaMultiCheckbox,
  BaPageTop,
  BaSidebar,
  CheckboxComponent,
  CheckboxListComponent,
  EditListComponent,
  RadioListComponent,
  ScopeListComponent,
  TagComponent
];

const NGA_DIRECTIVES = [
  BaScrollPosition,
  BaSlimScroll,
  BaThemeRun,
  BaCardBlur
];

const NGA_PIPES = [
  BaAppPicturePipe,
  BaProfilePicturePipe
];

const NGA_SERVICES = [
  BaImageLoaderService,
  BaThemePreloader,
  BaThemeSpinner,
  BaMenuService
];

const NGA_VALIDATORS = [
  EmailValidator,
  EqualPasswordsValidator
];

@NgModule({
  declarations: [
    ...NGA_PIPES,
    ...NGA_DIRECTIVES,
    ...NGA_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppTranslationModule,
    AuthModule,
    FlexLayoutModule
  ],
  exports: [
    ...NGA_PIPES,
    ...NGA_DIRECTIVES,
    ...NGA_COMPONENTS
  ]
})
export class NgaModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NgaModule,
      providers: [
        BaThemeConfigProvider,
        BaThemeConfig,
        ...NGA_VALIDATORS,
        ...NGA_SERVICES
      ],
    };
  }
}
