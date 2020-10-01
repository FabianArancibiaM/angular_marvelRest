import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDeHeroesComponent } from './listado-de-heroes.component';

describe('ListadoDeHeroesComponent', () => {
  let component: ListadoDeHeroesComponent;
  let fixture: ComponentFixture<ListadoDeHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ],
      declarations: [ ListadoDeHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDeHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.searchString = "a";
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Execution method submitSearch', () => {
    spyOn(component, "submitSearch").and.callThrough();
    component.submitSearch();
    expect(component.submitSearch).toHaveBeenCalled()
  });
  
  it('Execution method nextPage', () => {
    spyOn(component, "nextPage").and.callThrough();
    component.nextPage();
    expect(component.nextPage).toHaveBeenCalled()
  });
  
  it('Execution method prevPage', () => {
    spyOn(component, "prevPage").and.callThrough();
    component.prevPage();
    expect(component.prevPage).toHaveBeenCalled()
  });
});
