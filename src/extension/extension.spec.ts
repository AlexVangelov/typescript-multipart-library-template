// Copyright (c) 2017 Alex Vangelov <email@data.bg>
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Extension } from './';

describe("Extension", () => {
  let extension: Extension;

  beforeAll(() => {
    spyOn(console, 'log');
    expect(() => extension = new Extension()).not.toThrow();
    expect(console.log).toHaveBeenCalledWith('I`m Extension');
  });

  it('doSomethingAsync', () => {
    expect(() => extension.doSomethingAsync()).not.toThrow();
  });

  it('doSomethingAsync callback', (done) => {
    expect(extension.state).toBeFalsy();
    extension.doSomethingAsync(()=>{
      expect(extension.state).toBeTruthy();
      done();
    });
  });
});