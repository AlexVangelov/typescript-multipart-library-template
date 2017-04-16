// Copyright (c) 2017 Alex Vangelov <email@data.bg>
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Core } from './';

describe("Core", ()=> {
  it('init', () => {
    spyOn(console, 'log');
    expect(()=> new Core()).not.toThrow();
    expect(console.log).toHaveBeenCalledWith('I`m Core');
  });
});