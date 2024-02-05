module.exports = {
	name: "Sample", // optional, falls back to object key
	description: "The default sites that get tested",
	options: {
		runs: 1,
		frequency: 1, // (in minutes)
	},
	urls: [
		"https://garud.netlify.app/"
		"https://garud.netlify.app/profile"
                "https://garud.netlify.app/microblog"
                "https://garud.netlify.app/articles"
                "https://garud.netlify.app/shows"
	]
};
