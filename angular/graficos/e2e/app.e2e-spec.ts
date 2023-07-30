import { GraficosPage } from './app.po';

describe('graficos App', () => {
  let page: GraficosPage;

  beforeEach(() => {
    page = new GraficosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
