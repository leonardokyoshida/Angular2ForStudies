import { ModernAppStorePage } from './app.po';

describe('modern-app-store App', function() {
  let page: ModernAppStorePage;

  beforeEach(() => {
    page = new ModernAppStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
