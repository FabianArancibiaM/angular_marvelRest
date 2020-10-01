import { Heroe } from './heroe';

describe('Heroe', () => {
  it('should create an instance', () => {
    expect(new Heroe('','','',new Date(),null,'','')).toBeTruthy();
  });
});