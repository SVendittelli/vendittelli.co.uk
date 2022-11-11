import { getHeader } from '../support/app.po';

describe('home', () => {
  beforeEach(() => cy.visit('/'));

  it('should display name', () => {
    // Function helper example, see `../support/app.po.ts` file
    getHeader().contains('Sam Vendittelli');
  });
});
