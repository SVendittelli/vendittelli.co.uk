import { getTitle } from '../support/app.po';

describe('home', () => {
  beforeEach(() => cy.visit('/'));

  it("should display the author's name", () => {
    getTitle().contains('Sam Vendittelli');
  });
});
