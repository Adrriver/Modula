import { ModulaPage } from './app.po';

describe('modula App', function() {
  let page: ModulaPage;

  beforeEach(() => {
    page = new ModulaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
