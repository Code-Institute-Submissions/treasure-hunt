# Treasure Hunt

## Milestone Project 2

The project can be found here: [Treasure Hunt](https://stefbez.github.io/treasure-hunt/).

As part of the Code Institute Full Stack Development Diploma I have created this website using all of the technologies learnt throughout the course so far.

This website shows off Javascript & JQuery knowledge recently learnt along with HTML, Bootstrap and CSS previously learnt. These skills are used to make a treasure hunt/escape room type game.
## UX

The UX process was vital to creating a good game, that's fun and visually pleasing. The purpose of the game is to test the knowledge of the player, to be fun to play and easy to use.

I used trello to create user stories that are relevant to what each type of user expects and wants from this game. The aim is to please every user that plays the game, so that they have fun and test and improve their knowledge.

### User stories

Writing user stories was an important step in understanding how my website should look and work and how the game should look and work. Thinking about it from the user/players perspective gave me the opportunity to create something that everyone will enjoy and gives the user what they expect.

* As a user I want to see a clear welcome message to the website
* As a user i want to clear instructions on how to play the game
* As a game player I want easy navigation between the different parts of the game
* As a user on the go I want the game to be optimised for tablet and mobile as well as desktop
* As a user I want to see great theming throughout
* As a game player who's played the game before, I want a mix of questions so that I can keep playing
* As a game player I want a sense of achievement when I get a question right or win the game
* As a user I want to hear audio cues, but also be able to mute them
* As a user I want to see who created the game to find their other websites

These user stories justify every section of the site and forced a slight change in design from the original mockups. I have now included a footer that allows users to explore my other sites/GitHub repositories.

### Mockups

Mockups created as the first stage of planning the website can be found [here](/mockups/treasure-hunt-mockups.pdf)

The styling has changed slightly from the mockups, but they provided a good basis for how the flow of my game should work and how it should look. Main changes are an actual logo instead of just text, a footer and a link page after the map to keep the player in suspense.

## Features

### Current Features

* Treasure Hunt Logo as a GIF on the first page and static on the rest to avoid distractions whilst playing the game.
* Text entry that allows the game to know your name for the next screen, to make the game feel more personal.
* Nautical themed background throughout.
* Old paper background for the text, map and images to fit in with the pirate theme.
* Background music that fits in with the pirate theme.
* Sounds when anything important in the game happens, pirate voice during the questions and if you lose the game and your crew cheering if you win the game.
* Help button always available incase the player isnt sure what to do.
* Mute button that mutes all sound in the game, not just the background music.
* Visual feedback when the correct or wrong answer is chosen. The answer chosen change colour accordingly.
* Correct answers written up as clues for the next stage of the game, in neast pirates handwriting.
* Google Maps API used and map customised for a pirate map feeling.
* Google Maps markers customised and clickable as part of the game.
* Clickable logo that brings up a modal to restart the game.


### Future Features - to implement

* Next level of the game, from the clickable marker would be to answer questions to get exact coordinates within that country to then find the treasure. 

## Technologies Used

* [Javascript](https://en.wikipedia.org/wiki/JavaScript) - Used for all game functionality. Used vanilla javascript along with JQuery to create a functional game.
* [JQuery] (https://jquery.com/) - JQuery library was used to shorten the amount of javascript written and create the game's functionality more efficiently that just vanilla JS.
* [HTML](https://en.wikipedia.org/wiki/HTML) - Makes up the base of the game. Most of the visible text, the images and sounds in the game, the input name box and the buttons to progress through the game.
* [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - Styling for the whole site, from backgrounds to text fonts, sizes and colors. Spacing throughout the site and classes/id's that could be added to hide elements or show correct/wrong answers.
* [Bootstrap 4.4.1](https://getbootstrap.com/docs/4.0/getting-started/introduction/) - The framework that provides basic styling and objects that I built upon. Useful for creating a dynamic game that works on desktop size screens down to mobile.
* [Font Awesome](https://fontawesome.com/icons?d=gallery) - Used for the volume, mute and help button icons.
* [Google Fonts](https://fonts.google.com/) - Chose the fonts carefully from Google Fonts and embedded them to the CSS page and used them throughout the site.
* [Google Maps API](https://developers.google.com/maps/documentation/javascript) - Added Google Maps API that is customisable by changing features visibility and colours. Added custom markers with titles for the location and customised font. The markers are part of the game and clickable.

## Testing

Tested was carried out on desktop and mobile for the duration of the build of the game. After each function was made the game was tested to ensure that it worked as desired, and as the user would expect.
I work on a mac using OS X and built the game on gitpod using Chrome. When I deployed the website it worked exactly as expected.
I tested throughout using iPhone X, Samsung Galaxy A40 and MacBook Pro. 

The main issue found when testing the finished game was an image not displaying on mobile devices but showing on desktop. Through testing I found that the image was not downloaded in the correct format initially and was not able to be seen on mobile devices. I replaced the image with another that could be downloaded in the correct format and replaced it. I then proceeded to test again, with positive results.

Tested the HTML page, CSS and Javascript on the [HTML validator website](https://validator.w3.org/), [CSS validator website](http://www.css-validator.org/) and [a Javascript validator website](https://jshint.com/)
#### HTML errors:
* Error: Attribute 'type' not allowed on element 'audio' at this point.
This error was resolved for each audio tag by removing the 'type' attribute.
* Warning: Empty heading.
This is a warning, not an error. These warnings appeared where the questions are appended. 
#### CSS errors:
No errors found.
#### JS errors:
* One unused variable: 'allAudio'
Deleted this variable, that was left over from trying a method of muting all audio.

### Testing across multiple devices and browsers on completion

Developed on a MacBook Pro using GitPod and checked throughout development on Chrome
Tested on the following devices:

* MacBook Pro 13" - Internet Explorer (using Safari developer tools), Safari, Chrome, Edge, Firefox, Opera
* iPhone X - Safari, Chrome, Edge, Firefox, Opera
* Samsung Galaxy A40 - Samsung Browser, Safari, Chrome, Edge, Firefox, Opera

Multiple screen sizes were tested using Chrome developer tools on the MacBook, including Moto G4, Galaxy S5, Pixel 2, iPhone 5/SE, iPhone 6/7/8, iPhone 6/7/8 Plus, iPhone X, iPad, iPad Pro, Desktop and 4K TV screens.

### Testing Process

Testing involved using every feature available on each part of the game across all devices and browsers. 

* All game pages
    * Clicking the logo brought up the modal to restart the game
    * The help icon worked as expected, hover on laptop/desktop and click on mobile and tablet

* All pages after the first page
    * Mute button works correctly

* Home Page
    * Input form worked correctly
    * Could not submit until a name was entered

* Next welcome page
    * All text displays as expected
    * Typed name appears correctly
    * Logo becomes smaller and changes from GIF to static image
    * Background music begins playing
    * Easy, medium and hard buttons work correctly

* Question pages
    * Answer buttons work correctly, show colours after answering and displays correct answer below
    * Shows 5 questions before moving to next stage
    * All questions and answers appear correctly
    * Sounds play after each answer

* Map Page
    * Map shows in the correct location, with correct zoom and displaying all markers
    * All markers are clickable and lead to the next page
    * Correct answers/Clues are still visible

* Set sail page
    * Text showing correctly
    * Image appearing as expected

* Final Page
    * Expected page shows - winning or losing.
    * Text shows correctly
    * Sound plays
    * Image appears correctly

### Testing User Stories

* As a user I want to see a clear welcome message to the website
    * When the user opens the site they are greeted by a large logo so they know what the game is and a clear welcome message with header and other welcome text

* As a user i want to clear instructions on how to play the game
    * Two pages contain story and instructions
    * Help button is available on every page for an explanation for how the game works

* As a game player I want easy navigation between the different parts of the game
    * Single buttons for navigation forward only through the game
    * Choice of three buttons for difficulty and question answers
    * Automatically goes onto the next question/stage of the game so no need for next buttons to make it as user friendly as possible

* As a user on the go I want the game to be optimised for tablet and mobile as well as desktop
    * Site optimised for mobile, tablet and desktop. Tested on multiple devices

* As a user I want to see great theming throughout
    * The background image stays the same throughout with a nautical anchors theme
    * Text and map background is old paper which resembles an old pirate treasure map
    * Map is styled to look like an old treasure map
    * Logo and images throughout keep the cartoon theme

* As a game player who's played the game before, I want a mix of questions so that I can keep playing
    * Easy, medium and hard levels available to play

* As a game player I want a sense of achievement when I get a question right or win the game
    * Visual feedback when you get a question right or wrong
    * Audio feedback with sound effects for winning, losing and right and wrong answers

* As a user I want to hear audio cues, but also be able to mute them
    * Background music plays throughout, with other sound effects throughout
    * Mute button available to use when music starts playing. Easily unmuted with one click. Mutes all game sounds

* As a user I want to see who created the game to find their other websites
    * Footer included with a link to my GitHub


#### Issues found on devices and browsers

Very few issues found across all devices, browsers and screen sizes. Images rendered well and all looked as expected and intended.

Issues:

* Set sail page image not displaying on mobile devices. The image was not downloaded in the correct format initially and was not able to be seen on mobile devices. I replaced the image with another that could be downloaded in the correct format and replaced it. I then proceeded to test again, with positive results.
* Chrome developer tools in mobile view was showing that the page didnt fit the window correctly and could scroll left and right. Tested this issue myself on iPhone X and Samsung Galaxy A40, could not replicate. Sent to friends and family with other android devices, such as Huawei, Samsungs and Xiaomi. The issues could not be replicated on the devices which is positive and shows it is working as expected.

## Deployment

I used GitPod to develop the site and GitHub to host it.

The website can be found on the link at the top of the page and here - [Treasure Hunt](https://stefbez.github.io/treasure-hunt/). I deployed the project using GitHub Pages. At the moment the deployed version uses the master branch, but if future updates are needed these can be done using a separate branch until all updates are tested thoroughly and can be deployed.

### Deployment using GitHub Pages

1. Go to the [repository](https://github.com/stefbez/treasure-hunt)
2. Under the repo name go to settings
3. Scroll down to the GitHub Pages section
4. Select a publishing source which is the master branch
5. Check for confirmation text in a green banner saying `Your site is published at https://stefbez.github.io/treasure-hunt/`
6. The site is now live on GitHub Pages

I followed this handy guide by [GitHub](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

### Clone Treasure Hunt

1. Go to the [repository](https://github.com/stefbez/treasure-hunt)
2. Click on the green `Code` button that features a download icon
3. Copy the URL - (https://github.com/stefbez/treasure-hunt.git)
4. Using the terminal in GitPod paste the code `git clone https://github.com/stefbez/treasure-hunt.git`
5. The whole repository folder, including all files is now available for use

## Credits

### Content

* The footer needed to be pushed down to the bottom on some screen sizes, such as iPad pro. I found a way to do this through some research online and used [freecodecamp.org/](https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/) to fix this issue. The code used from this website is not my own work, but a solution to a problem I was having

* JQuery CDN was used directly from [JQuery](https://code.jquery.com/)

* [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/) was used for the site, including the [modal](https://getbootstrap.com/docs/4.4/components/modal/) when clicking on the logo; the [forms](https://getbootstrap.com/docs/4.4/components/forms/) for the name input; [buttons](https://getbootstrap.com/docs/4.4/components/buttons/) throughout the game and [tooltips](https://getbootstrap.com/docs/4.0/components/tooltips/) when hovering/clicking on the help and mute/volume icons

* [Font Awesome](https://fontawesome.com/icons?d=gallery) icons were used for the help, volume and mute buttons

* The CDN's for Bootstrap were found on [BootstrapCDN](https://www.bootstrapcdn.com/) and directly from [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/download/) 

* The CDN for Font Awesome was found [here](https://fontawesome.com/how-to-use/customizing-wordpress/snippets/setup-cdn-webfont)

* Fonts were found and embedded from [Google Fonts](https://fonts.google.com/)

* [Google Maps](https://developers.google.com/maps/documentation/javascript/overview) API was found and access to documentation and further code for markers and styling. All styling and marker code was obtained directly from the Google Maps API documentation

* The API key for google maps was obtained through [Google Cloud Platform](https://console.cloud.google.com/home)

* Ideas for how to structure my game and javascript code were learnt from 'Web Dev Simplified' on [YouTube](https://www.youtube.com/watch?v=riDzcEQbX6k) and [GitHub](https://github.com/WebDevSimplified/JavaScript-Quiz-App) and how to shuffle my questions properly

* When stuck, I turned to the Code Institute Slack channels for advice and ideas for how to solve issues, Tutor support from Code Institute and [Stack Overflow](https://stackoverflow.com/)

* When adding the letter verification check to allow users to only input their name i turned to [W3 Resource](https://www.w3resource.com/javascript/form/all-letters-field.php#:~:text=To%20get%20a%20string%20contains,is%20the%20complete%20web%20document) for help

### Media

#### Images

* Gold anchors background was downloaded from [needpix.com](https://www.needpix.com/photo/1352825/anchor-anchors-gold-golden-blue-background-pattern-symbols-icons)

* Old paper background was downloaded from [getwallpapers.com](http://getwallpapers.com/collection/old-newspaper-wallpaper)

* Pirate row boat was drownloaded from [pixabay.com](https://pixabay.com/vectors/boat-pirate-rowboat-rowing-small-34145/)

* Ship was drownloaded from [clipartmax.com](https://www.clipartmax.com/middle/m2i8m2H7G6i8i8H7_pirate-ship-pinteres-clip-art-pirate-ship/)

* Treasure was drownloaded from [netclipart.com](https://www.netclipart.com/s/treasure-chest/)

* Treasure Hunt logo was designed by myself and drownloaded from [Canva](https://www.canva.com/)

#### Audio

* aye.mp3 was drownloaded from [freesoundeffect.net](http://freesoundeffect.net/sound/voice-clip-male-938-sound-effect)

* blimey.mp3 was drownloaded from [freesoundeffect.net](http://freesoundeffect.net/sound/voice-clip-male-939-sound-effect)

* cheer.mp3 was drownloaded from [zapsplat](https://www.zapsplat.com/music/rowdy-english-soccer-crowd-150-people-cheer-very-jubilant/)

* shiver.mp3 was drownloaded from [zapsplat](https://www.zapsplat.com/music/male-voice-pirate-says-shiver-me-timbers-1/)

* the-buccaneers-haul.mp3 by Shane Ivers was drownloaded from [silvermansound.com](https://www.silvermansound.com/free-music/the-buccaneers-haul)

### Acknowledgements

* I took inspiration for this game from the many escape rooms that I've done, including the pirate ship themed one I completed in Dallas, Texas

* I received support from Sammy, a tutor at Code Institute, with an issue I had with calling functions which we worked through together quickly

* I also received help with testing across numerous devices and different browsers from friends and family