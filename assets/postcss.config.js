// NOTE THAT PURGECSS IS ALREADY SETUP FOR VUE
module.exports = {
	plugins: [		
		require("tailwindcss")("./assets/css/tailwindcss/tailwind.config.js"),
		require("autoprefixer")({
			grid: false,
			browsers: [">2%"]
		}),
		...(process.env.NODE_ENV !== "development"
			? [
					require("@fullhuman/postcss-purgecss")({
						content: ["./layouts/**/*.html", "./components/**/**/*.html", "./assets/js/app/**/*.vue"],
						extractors: [
							{
								extractor: class {
									static extract(content) {										
										return content.match(/[A-z0-9-:\/]+/g);										
									}
								},
								extensions: ["vue", "html"]
								
							}
						],
						whitelist: ["body",
						"h-3/4",
						"h-screen",
						"bg-near-white",
						"text-white-70",
						"ais-hits",
						"ais-hits--item",
						"is-visible",
						"results-hidden",
						"hidden",
						"ais-pagination",
						"ais-pagination--item__active ais-pagination--item__first",
						"ais-pagination--item__last",
						"bg-primary-color",
						"turbolinks-progress-bar",
						"transition-all",
						"opacity-25",
						"about",
						"pagination",
						"our-work",
						"updates",
						"sticky-item",
						"sticky-nav",
						"fill-current",
						"sticky-item"]
					})
			  ]
			: []) //If Development, do not use PurgeCSS
	]
};
