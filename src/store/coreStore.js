if (process.env.NODE_ENV === 'production') {
	module.exports = require('./coreStore.prod');
}
else {
	module.exports = require('./coreStore.dev');
}