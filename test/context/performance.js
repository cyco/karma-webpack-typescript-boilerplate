var testsContext = require.context("../performance/", true, /\.test\.(ts|js)$/);
testsContext.keys().forEach(testsContext);
