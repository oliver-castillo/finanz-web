import { Component, inject } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { HlmSelectImports } from '@spartan-ng/helm/select';

@Component({
  selector: 'app-language-select',
  imports: [HlmSelectImports, TranslocoPipe],
  templateUrl: './language-select.html',
})
export class LanguageSelect {
  protected readonly transloco = inject(TranslocoService);

  protected setLanguage(language: string | null | undefined): void {
    if (language === 'en' || language === 'es') {
      this.transloco.setActiveLang(language);
    }
  }

  protected readonly languageLabel = (language: string): string =>
    language === 'en' ? 'English' : language === 'es' ? 'Español' : '';
}
