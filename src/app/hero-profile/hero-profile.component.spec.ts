import { Location } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of} from 'rxjs';
import { Heroe } from '../classes/heroe';
import { HeroesService } from '../service/heroes.service';
import { HeroProfileComponent } from './hero-profile.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';


class ModalMock{
  toggle_modal(){
  }
}

 const HEROE_OBJECT ={
   id:'1',
   name:'Spiderman',
   description: 'El hombre que araña',
   modified:new Date(1518417160),
   thumbnail:
   {
   'path': 'https://i.pinimg.com/originals/c2/93/56/c293563aa553250601d8cb768c044d4b',
   'extension': 'jpg'
   },
   resourceURI:'http://gateway.marvel.com/v1/public/characters/1011334',
   teamColor:'yellow'};
 
class HeroServiceMock {
   public teams = new Map().set("1","yellow");

   public getHeroe(): Observable<any>{
     return new Observable((data)=>data.next(
      {data:{results:[HEROE_OBJECT]}}
     ));
     //return of({data:{results:HEROE_OBJECT}});
   }

   public getTeamColor(){
     //return "yellow";
   }
 }

describe('HeroProfileComponent', () => {
  let component: HeroProfileComponent;
  let fixture: ComponentFixture<HeroProfileComponent>;
  let heroesService;

  jasmine.createSpyObj('TwainService', ['getQuote']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientModule, RouterTestingModule
      ],
      providers:[
        { provide: ActivatedRoute, useValue: {params: of({id: 1})} },
        { provide: HeroesService, useClass: HeroServiceMock }
        
      ],schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ],
      declarations: [ HeroProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    heroesService = TestBed.inject(HeroesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Execution method goBack', () => {
    spyOn(component,'goBack').and.callThrough();
    component.goBack();
    expect(component.goBack).toHaveBeenCalled();
  });

  it('Execution method getTeam', () => {
    spyOn(component,'getTeam').and.callThrough();
    component.heroe = new Heroe('','','',new Date(),null,'','');
    component.getTeam("");
    expect(component.getTeam).toHaveBeenCalled();
  });

  it('Execution method launchModal', () => {
    spyOn(component,'launchModal').and.callThrough();
    component.modal = new ModalMock();
    component.launchModal();
    expect(component.launchModal).toHaveBeenCalled();
  });
});
