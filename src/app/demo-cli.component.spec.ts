import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { DemoCliAppComponent } from '../app/demo-cli.component';

beforeEachProviders(() => [DemoCliAppComponent]);

describe('App: DemoCli', () => {
  it('should create the app',
      inject([DemoCliAppComponent], (app: DemoCliAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'demo-cli works!\'',
      inject([DemoCliAppComponent], (app: DemoCliAppComponent) => {
    expect(app.title).toEqual('demo-cli works!');
  }));
});
