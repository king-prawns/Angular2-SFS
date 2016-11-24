import { Angular2SFS } from './app.po';

describe('angular-2-SFS App', function() {
let page: Angular2SFS;

  beforeEach(() => {
      page = new Angular2SFS();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
