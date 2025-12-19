import { getGreeting } from '../support/app.po';

describe('refresh-app-mobile-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains(`refresh-app-mobile`);
  });
});
