import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    fixture.componentRef.setInput('title', 'Accounts');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders the provided actions and invokes their callbacks', () => {
    const onClick = vi.fn();
    fixture.componentRef.setInput('actions', [{ label: 'Create account', onClick }]);
    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button[hlmBtn]');
    expect(button.textContent).toContain('Create account');

    button.click();

    expect(onClick).toHaveBeenCalledOnce();
  });
});
