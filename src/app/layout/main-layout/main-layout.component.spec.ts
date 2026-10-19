import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { afterEach } from 'vitest';
import { MainLayout } from './main-layout.component';

describe('Dashboard', () => {
  let component: MainLayout;
  let fixture: ComponentFixture<MainLayout>;
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
        MainLayout,
        TranslocoTestingModule.forRoot({
          translocoConfig: {
            availableLangs: ['en', 'es'],
            defaultLang: 'en',
          },
          langs: {
            en: {
              language: { label: 'Language' },
              sidebar: {
                navMain: {
                  dashboard: 'Dashboard',
                  accounts: 'Accounts',
                  analytics: 'Analytics',
                  projects: 'Projects',
                  team: 'Team',
                },
              },
            },
            es: {
              language: { label: 'Idioma' },
              sidebar: {
                navMain: {
                  dashboard: 'Panel',
                  accounts: 'Cuentas',
                  analytics: 'Análisis',
                  projects: 'Proyectos',
                  team: 'Equipo',
                },
              },
            },
          },
          preloadLangs: true,
        }),
      ],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MainLayout);
    component = fixture.componentInstance;
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
    expect(component).toBeTruthy();
  });

  it('renders the shared language selector', () => {
    expect(fixture.nativeElement.querySelector('app-language-select')).toBeTruthy();
  });
});
