/**
 * Example user info for your chain of saplings 🔗🌲.
 * Update the fields with your information.
 */

// The links to display on your page. These will be listed in the same order that they appear here.
const links = [
	{
		name: "Binary Jazz",
		url: "https://yoursite.com",
		icon: "link",
		// Refer to FontAwesome documentation to determine if an icon should be a fas or fab. (Brands are fab, so most will be fab.)
		// https://fontawesome.com/icons?d=gallery&p=2&m=free
		prefix: "fas"
	},
	{
		name: "Twitter",
		url: "https://twitter.com/yourusername",
		icon: "twitter",
		prefix: "fab"
	},
	{
		name: "Facebook",
		url: "https://facebook.com/yourusername",
		icon: "facebook",
		prefix: "fab"
	},
	{
		name: "YouTube",
		url: "https://youtube.com/yourchannel",
		icon: "youtube",
		prefix: "fab"
	},
	{
		name: "GitHub",
		url: "https://github.com/yourusername",
		icon: "github",
		prefix: "fab"
	}
];

// Your personal information.
const profile = {
	name: "Binary Jazz",
	pronouns: "they/them/theirs", // Your pronouns.
	bio: "A podcast about things we know nothing about. It's like Balderdash, except a podcast.",
	image: "https://nyc3.digitaloceanspaces.com/binaryjazz/wp-content/uploads/2017/12/02214859/cropped-binary-jazz-itunes.jpg"
};

// You can optionally customize the color scheme that will be used.
// If you like, you can create your own color schemes. These will be
// added as classes to the main component.
const colorScheme = "binaryjazz";

// Don't edit below this line!
const details = {
	links,
	profile,
	colorScheme
}

// Export each detail individually in case they are needed.
export { profile };
export { colorScheme };
export { links };

export default details;