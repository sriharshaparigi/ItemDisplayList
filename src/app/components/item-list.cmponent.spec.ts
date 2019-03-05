import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ItemListComponent } from './item-list.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ItemListComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ItemListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'DisplayList'`, () => {
    const fixture = TestBed.createComponent(ItemListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('DisplayList');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(ItemListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to DisplayList!');
  });
});
