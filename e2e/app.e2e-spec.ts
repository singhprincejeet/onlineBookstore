import { OnlineBookstorePage } from './app.po';

describe('online-bookstore App', () => {
  let page: OnlineBookstorePage;

  beforeEach(() => {
    page = new OnlineBookstorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
