import { getTitle } from '../support/app.po';

describe('home', () => {
  beforeEach(() => cy.visit('/'));

  it('should display work in progress splash screen until dismissed', () => {
    getTitle().contains('This site is a work in progress');

    cy.get('button').click();

    getTitle().contains('Sam Vendittelli | Full-stack Web Developer');
  });
});
