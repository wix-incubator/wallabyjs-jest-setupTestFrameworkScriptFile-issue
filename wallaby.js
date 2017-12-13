module.exports = () => {
  return {
    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest',

    files: [
      'a.js',
      'jest-setupFramework.js'
    ],

    tests: [
      'a.test.js'
    ],

    setup: function(w) {
      w.testFramework.configure({
        "setupTestFrameworkScriptFile": "./jest-setupFramework.js"        
      });
    }
  };
};
