import { TrackingPage } from './app.po';

describe('tracking App', () => {
  let page: TrackingPage;

  beforeEach(() => {
    page = new TrackingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
