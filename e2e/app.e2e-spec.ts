import { KombinatorAngularPage } from './app.po';

describe('kombinator-angular App', () => {
  let page: KombinatorAngularPage;

  beforeEach(() => {
    page = new KombinatorAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
