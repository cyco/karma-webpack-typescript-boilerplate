var testsContext = require.context("../unit/", true, /\.test\.(ts|js)$/);
testsContext.keys().forEach(testsContext);
