import { FormulariosPage } from './app.po';

describe('formularios App', function() {
  let page: FormulariosPage;

  beforeEach(() => {
    page = new FormulariosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
