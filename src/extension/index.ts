// Copyright (c) 2017 Alex Vangelov <email@data.bg>
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export class Extension {
  state: boolean = false;

  constructor() {
    console.log('I`m Extension');
  }

  doSomethingAsync(callback?: Function) {
    setTimeout(() => {
      this.state = true;
      if (typeof callback === 'function') callback();
    }, 0);
  }
}