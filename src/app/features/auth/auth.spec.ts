import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TranslocoService, TranslocoTestingModule } from '@jsverse/transloco';
import { afterEach } from 'vitest';
import { AuthService } from '../../services/auth.service';
import { Auth } from './auth';

describe('Auth', () => {
  let fixture: ComponentFixture<Auth>;
  let transloco: TranslocoService;
  let scrollIntoViewDescriptor: PropertyDescriptor | undefined;

  beforeEach(async () => {
    scrollIntoViewDescriptor = Object.getOwnPropertyDescriptor(Element.prototype, 'scrollIntoView');
    Object.defineProperty(Element.prototype, 'scrollIntoView', {
      configurable: true,
      value: vi.fn(),
    });
    vi.stubGlobal(
      'ResizeObserver',
      class {
        observe(): void {}
        unobserve(): void {}
        disconnect(): void {}
      },
    );

    await TestBed.configureTestingModule({
      imports: [
        Auth,
        TranslocoTestingModule.forRoot({
          translocoConfig: {
            availableLangs: ['en', 'es'],
            defaultLang: 'en',
            reRenderOnLangChange: true,
          },
          langs: {
            en: {
              language: { label: 'Language' },
              auth: {
                tabs: { ariaLabel: 'Authentication' },
                signIn: {
                  title: 'Log in',
                  description: 'Log in to your account.',
                  submit: 'Log in',
                },
                signUp: {
                  title: 'Create account',
                  description: 'Create a new account.',
                  submit: 'Create account',
                },
                error: { title: 'Something went wrong' },
                fields: {
                  email: 'Email',
                  password: 'Password',
                  firstName: 'First name',
                  lastName: 'Last name',
                },
              },
            },
            es: {
              language: { label: 'Idioma' },
              auth: {
                tabs: { ariaLabel: 'Autenticación' },
                signIn: {
                  title: 'Iniciar sesión',
                  description: 'Inicia sesión en tu cuenta.',
                  submit: 'Iniciar sesión',
                },
                signUp: {
                  title: 'Crear cuenta',
                  description: 'Crea una cuenta nueva.',
                  submit: 'Crear cuenta',
                },
                error: { title: 'Ocurrió un error' },
                fields: {
                  email: 'Correo electrónico',
                  password: 'Contraseña',
                  firstName: 'Nombre',
                  lastName: 'Apellido',
                },
              },
            },
          },
          preloadLangs: true,
        }),
      ],
      providers: [
        provideRouter([]),
        {
          provide: AuthService,
          useValue: {
            signIn: vi.fn(),
            signUp: vi.fn(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Auth);
    transloco = TestBed.inject(TranslocoService);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    if (scrollIntoViewDescriptor) {
      Object.defineProperty(Element.prototype, 'scrollIntoView', scrollIntoViewDescriptor);
    } else {
      Reflect.deleteProperty(Element.prototype, 'scrollIntoView');
    }
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('changes the authentication language from the select', async () => {
    const selectTrigger: HTMLButtonElement = fixture.nativeElement.querySelector(
      'hlm-select-trigger button',
    );

    expect(selectTrigger.textContent).toContain('English');
    expect(fixture.nativeElement.textContent).toContain('Log in to your account.');

    selectTrigger.click();
    fixture.detectChanges();
    await fixture.whenStable();

    const spanishOption: HTMLElement | null = document.querySelector(
      '[role="option"][data-value="es"]',
    );
    expect(spanishOption).not.toBeNull();
    if (!spanishOption) {
      throw new Error('Spanish language option was not rendered');
    }

    spanishOption.click();
    await fixture.whenStable();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(transloco.getActiveLang()).toBe('es');
    expect(selectTrigger.textContent).toContain('Español');
    expect(fixture.nativeElement.textContent).toContain('Inicia sesión en tu cuenta.');
  });
});
