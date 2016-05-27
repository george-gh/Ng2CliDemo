export class DemoCliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('demo-cli-app h1')).getText();
  }
}
