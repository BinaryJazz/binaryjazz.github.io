# `YourProfile.github.io`

Create a personal profile page with all your various links and publish it quickly to [yourusername].github.io!

Check out [mine](https://jazzsequence.github.io) for a demo!

## What is this?

I have a lot of interests and social media profiles. One thing I see a lot of on social media is people using `linktr.ee` to share their various links on their profile pages that only allow a single link. I've even thought of making a profile there myself.

But, I'm a web developer and at the end of the day, those sorts of services are just giving you a web page with a bunch of links. I thought I could build something quickly without too much complexity that could provide the same thing and allow you to deploy it wherever you want. Having played around with React and GitHub Pages recently, it seemed like a pretty simple thing to just push a single page app to a GitHub page.

## How does it work?

It's all relatively uncomplicated. All you need to do is fork this repository into your own GitHub with the name `{yourGitHubUsername}.github.io`, clone it to your local machine, add your details to a minimalist JavaScript file and then run `npm run deploy` to deploy to that URL. It will automatically turn on GitHub pages and live at the URL of the repository (assuming you used _your_ actual GitHub username).

You can have as many links as you want and each one can be accompanied by an icon (provided by [FontAwesome](https://fontawesome.com/)). There are two built-in themes based on Ethan Schoonover's popular [Solarized](https://ethanschoonover.com/solarized/) color schemes, but folks who are fancy with CSS can build their own color schemes or themes. (And please do! [Contributions are welcome!](https://github.com/jazzsequence/jazzsequence.github.io/pulls))

### Getting started
The repository comes with a `details-example.js` file to get you started. Copy this into a `details.js` file where you will make your changes. This file will only exist on your local machine as it's `.gitignore`d by default.

The `details` file is broken into three main pieces.

#### `links`
The `links` variable stores an array all of your links. You can have as many links as you want. Each one is a unique JavaScript object with the `name`, `url`, `icon`, and `style` properties.

* **`name`** is simply the name of the link, or, what you want the hypertext to say.
* **`url`** is the full URL to the destination you want the link to take you to.
* **`icon`** is the icon to display next to the link. Icons are served by FontAwesome and there are icons for most things. Find the icon you want by [searching their icon database](https://fontawesome.com/icons?d=gallery&p=2&m=free) and plug in the name here. (**Note:** If you're already familiar with FontAwesome, you'll want to use _just_ the name here, without the `fa-` prefix -- that's added in later in the code.)
* **`style`** is a bit of a unique FontAwesome thing. Basically, for their free icon library, FontAwesome has two "styles" -- one is their basic styles for various things, which is `fas`; the other style is for "brands" (Twitter, Facebook, YouTube, etc. are all considered "brands") and the prefix for those is `fab`. Using the search, you can click into the icon to find out if it's a `fas` or a `fab`, but most likely if your links are mostly to other social networks or sites, you'll be using a lot of fab `fab`s.

#### `profile`
This is all the information about you. There are four properties that are fairly self-explanatory.

* **`name`** is the name you want to display on the page. This can be anything you want it to be. This value is also used in the page `<title>` tags.
* **`pronouns`** is for your pronouns. Add whatever you want here or set it to `null` if you don't want to display your pronouns.
* **`bio`** is for a little information about you that you want to display at the top of the page under your...
* **`image`** which is for a URL to any image (of you or otherwise) that exists on the internet. The best image would be square and 200px or larger. (If you have an image on Dropbox, you can use that by changing the share url from having a `?dl=0` at the end to a `?raw=1`.)

#### `colorScheme`
This is the "theme" or style for the site. This variable is a single string value that represents the "theme" for the page.

I've built two color schemes -- `solarized` and `solarized-light` which can be used here, but savvy designer types can take a look at how the Sass files are architected and add their own. Your `colorScheme` must be either `solarized` or `solarized-light` or a custom scheme that you create.

Color schemes are attached to a class that is added to the main `div` that wraps around the page, so to create your own scheme, simply put all your colors and styles into a single class and add that to the `details.js`.

### Deploying your new profile!
First things first, you'll need to run `npm install` to install the various Node dependencies. Some of these are for local development which, if you don't plan on making changes to the code, you won't be using, but you might if you do decide to make any custom tweaks.

Once NPM is done installing all the things, you will run `npm run deploy`. This will automatically compile all the JavaScript and CSS, copy a version of the `index.html` in the `public/` folder adding the JavaScript and compiled CSS links into it and copy all those things into a `build/` folder (which is also `.gitignore`d). It will then use the [`gh-pages`](https://www.npmjs.com/package/gh-pages) library to push the build folder to a `gh-pages` branch (which it creates) on your forked version of your repository.

Assuming you've renamed your fork using your username, you should immediately be able to just go to `yourusername.github.io` to see your fancy new profile page.
