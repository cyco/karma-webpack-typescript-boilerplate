var testsContext = require.context("../acceptance/", true, /\.test\.(ts|js)$/);
testsContext.keys().forEach(testsContext);
