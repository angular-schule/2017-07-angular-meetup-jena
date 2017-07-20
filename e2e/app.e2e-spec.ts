import { BookRatingPage } from './app.po';

describe('book-rating App', () => {
  let page: BookRatingPage;

  beforeEach(() => {
    page = new BookRatingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to br!');
  });
});
