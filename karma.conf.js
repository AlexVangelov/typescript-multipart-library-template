// Copyright (c) 2017 Alex Vangelov <email@data.bg>
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

module.exports = function (config) {
  config.set({

    frameworks: ["jasmine", "karma-typescript"],

    files: [
      { pattern: "src/**/*.ts" }
    ],

    preprocessors: {
      "src/**/*.ts": ["karma-typescript"]
    },

    reporters: ["mocha", "karma-typescript"],

    browsers: ["PhantomJS"],
    
    singleRun: true,

    karmaTypescriptConfig: {
      reports: {
        "html": "coverage",
        "text-summary": ""
      }
    }

  });
};