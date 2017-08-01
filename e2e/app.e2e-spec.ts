import { AngularTestPRPage } from './app.po';

describe('angular-test-pr App', () => {
  let page: AngularTestPRPage;

  beforeEach(() => {
    page = new AngularTestPRPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
