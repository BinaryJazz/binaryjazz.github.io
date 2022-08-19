/**
 * Example user info for your chain of saplings 🔗🌲.
 * Update the fields with your information.
 */

// The links to display on your page. These will be listed in the same order that they appear here.
const links = [
	{
		name: "Binary Jazz",
		url: "https://binaryjazz.com",
		icon: "link",
		// Refer to FontAwesome documentation to determine if an icon should be a fas or fab. (Brands are fab, so most will be fab.)
		// https://fontawesome.com/icons?d=gallery&p=2&m=free
		prefix: "fas"
	},
	{
		name: "Twitter",
		url: "https://twitter.com/binaryjazz",
		icon: "twitter",
		prefix: "fab"
	},
	{
		name: "YouTube",
		url: "https://www.youtube.com/channel/UCzfLfl04mY2jUvoon3o1Bmw",
		icon: "youtube",
		prefix: "fab"
	},
	{
		name: "Apple Podcasts",
		url: "https://itunes.apple.com/us/podcast/binary-jazz/id1331674043?mt=2&ls=1",
		icon: "apple",
		prefix: "fab"
	},
	{
		name: "Google Podcasts",
		url: "https://podcasts.google.com/feed/aHR0cHM6Ly9iaW5hcnlqYXp6LnVzL2ZlZWQvcG9kY2FzdC8",
		icon: "google-play",
		prefix: "fab"
	},
	{
		name: "Spotify",
		url: "https://open.spotify.com/show/0zKqXKRYe9s29N66InbAY0",
		icon: "spotify",
		prefix: "fab"
	},
	{
		name: "Android",
		url: "https://subscribeonandroid.com/binaryjazz.us/feed/podcast/",
		icon: "android",
		prefix: "fab"
	},
	{
		name: "Stitcher",
		url: "https://www.stitcher.com/podcast/binary-jazz?refid=stpr",
		icon: "microphone-alt",
		prefix: "fas"
	},
	{
		name: "Pandora",
		url: "https://www.pandora.com/podcast/binary-jazz/PC:28295",
		icon: "podcast",
		prefix: "fas"
	},
	{
		name: "Subscribe by Email",
		url: "https://subscribebyemail.com/binaryjazz.com/feed/podcast/",
		icon: "envelope",
		prefix: "fas"
	},
	{
		name: "RSS",
		url: "https://binaryjazz.com/feed/podcast/",
		icon: "rss",
		prefix: "fas"
	},
	{
		name: "Genrenator",
		url: "https://binaryjazz.com/genrenator-api/",
		icon: "robot",
		prefix: "fas"
	},
	{
		name: "Ground Control Bot",
		url: "https://groundcontrolbot.space/",
		icon: "space-shuttle",
		prefix: "fas"
	},
	{
		name: "Contact us!",
		url: "https://binaryjazz.com/contact/",
		icon: "paper-plane",
		prefix: "fas"
	},
	{
		name: "GitHub",
		url: "https://github.com/BinaryJazz",
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