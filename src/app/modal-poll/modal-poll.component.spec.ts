import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPollComponent } from './modal-poll.component';

describe('ModalPollComponent', () => {
  let component: ModalPollComponent;
  let fixture: ComponentFixture<ModalPollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Execution method toggle_modal', () => {
    spyOn(component, "toggle_modal").and.callThrough();
    component.toggle_modal();
    expect(component.toggle_modal).toHaveBeenCalled()
  });
  it('Execution method send_team', () => {
    spyOn(component, "send_team").and.callThrough();
    component.send_team("");
    expect(component.send_team).toHaveBeenCalled()
  });
});
