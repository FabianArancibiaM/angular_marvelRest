import { HttpClient, HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { HeroesService } from './heroes.service';

describe('HeroesService', () => {
  let service: HeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ],
      providers: [
        HeroesService
      ]
    });
    service = TestBed.inject(HeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Execution method getTeamColor', () => {
    spyOn(service, "getTeamColor").and.callThrough();
    service.getTeamColor(0);
    expect(service.getTeamColor).toHaveBeenCalled()
  });

  it('Execution method getTeamColor2', () => {
    let mapa = new Map();
    mapa.set(0,'verde');
    spyOn(service, "getTeamColor").and.callThrough();
    service.teams = mapa;
    service.getTeamColor(0);
    expect(service.getTeamColor).toHaveBeenCalled();
    expect(service.teams.get(0)).toEqual('verde');
  });

  it('Execution method resetPager', () => {
    spyOn(service, "resetPager").and.callThrough();
    service.resetPager();
    expect(service.resetPager).toHaveBeenCalled()
  });

  it('Execution method getHeroe', () => {
    spyOn(service, "getHeroe").and.callThrough();
    service.getHeroe(1);
    expect(service.getHeroe).toHaveBeenCalled()
  });
});
