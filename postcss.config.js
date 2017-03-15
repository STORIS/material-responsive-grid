module.exports = (ctx) => ({
  map: ctx.options.map,
  parser: ctx.options.parser,
  plugins: {
    'postcss-import': {},
	 'postcss-cssnext': {},
	 'cssnano': ctx.env === 'production' ? {
		 autoprefixer: false,
		} : false
  }
});
