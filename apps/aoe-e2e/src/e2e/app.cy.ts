import { getTitle } from '../support/app.po';

describe('aoe', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getTitle().contains('AoE');
  });
});
