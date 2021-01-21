---
title: Forget Alexa, bring me Brian Blessed! Sam's tech diary
date: 2020-04-22T13:15:10.000Z
description: >-
  I'm Sam, a developer at Seccl who plays with tech in his spare time. Sometimes it goes well, sometimes it doesn't. I’ve decided to keep a little diary of my techsploits, to help organise my thoughts and cement what I've learned. With a bit of luck, it might be useful for others, too!

metatitle: Seccl | Sam's tech diary... forget Alexa, bring me Brian Blessed!
metadescription: I'm Sam, a developer at Seccl who plays with tech in his spare time. I’ve decided to keep a little diary of my techsploits, to help organise my thoughts and cement what I've learned. With a bit of luck, it might be useful for others, too!


authors:
  - Sam Rogers
categories:
 - engineering
image: /img/Sam-tech-diary.jpg
imagewebp:
ogimage: /img/Sam-tech-diary-og.jpg
type: blog

---

#### Choosing a project

I've wanted to build a smart system in the home for a little while. Giving voice commands to something is really cool, but I want to be able to personalise it, rather than be constrained by one set of products. Besides, having an always-listening device in your home built by a company that lives off data harvested from you doesn’t sound like a great idea.

So I figured I should build something myself. That way I can be sure to trust it, it’ll do everything that I want (but only what I want) – plus it'll be fun and help me to learn a lot along the way! Oh, and the real icing on the cake is that I get to decide the voice that it uses. One Brian Blessed home assistant coming right up!

\
\
![The future's bright with my Brian Blessed smart home](/img/gordons-alive.jpg)

\
\
I got a <a href="https://www.raspberrypi.org/">Raspberry Pi</a> for Christmas, but sadly it had been gathering dust until we moved into a place of our own a few weeks back. Now that all the unpacking’s done – and with a four day weekend thanks to Easter – it was time to get to work!

#### Getting started with the Pi
I fired up the Udemy subscription that Seccl provides and <a href="https://www.udemy.com/course/pi-ultimate-guide/">found a course</a> to get me over the initial hurdle of working out how it all works. It walked through the basic setup, helped me get Raspbian onto the SD card, then gave some cool little intro projects with LEDs, IR sensors and Python scripts that run in response to those sorts of input. It turns out getting a light to blink on a breadboard is pretty exciting!

\
\

![Flashing lights on my Raspberry Pi!](/img/flashing-pi.gif)

\
\
The camera projects were great, but I think I'll need the correct camera module before doing too much more with that. Starting up a webcam server with Motion was very easy but the frame rate was really low – it was like being back on that first ever video call back in the day.

The most useful thing for me was the headless setup. Connecting to the Pi using my network meant that I wasn't going to have to hook up old peripherals and lose valuable desk space (or have to take over the dining room for a 4-day weekend...)

Raspbian allows you to connect either through VNC or SSH, so now I can use my nice setup to get stuff going on the Pi. A minor issue is that the IDEs that come with Raspbian are a bit clunky, and I think the connection to the Pi itself could have been faster; WiFi coverage through old houses is pretty whack, so there’s some lag between making a change and seeing it on the screen.

#### Optimising the set-up

So the Pi is up and running and it makes lights flash on a prototyping board – great, but hardly a smart home yet.

For the sake of getting something done quickly, I figured a Node app would be fastest. However, updating Node turned out to be a complete pain. All the guides I found meant that you'll need to use sudo for any npm installations – and that's <a href="https://medium.com/@ExplosionPills/dont-use-sudo-with-npm-still-66e609f5f92">a bad idea</a> because npm commands can run arbitrary scripts, access DNS and all sorts of stuff that you probably don't want it doing.

So, after a few different tries (and screwing up the entire OS), I decided to do what we do at work and just use nvm. And, touch wood, everything seems to be holding up fine.

That screen lag was going to be a problem, so before I did anything else I needed to make sure I could work on my Mac, then have the code run on the Pi – preferably without manually moving the files.

I needed a continuous deployment pipeline that would be really simple to implement, so I dug around in my router's settings, reserved an internal IP address for the pi, and exposed it to the internet.

I then knocked together a couple of Express APIs, a simple “hello world” type thing, and the API that gets to connect to the internet. The second API consumes a webhook from github, finds the repo that triggered it and pulls that repo down onto the Pi. We have a Continuous Something pipeline!

I've used nodemon to run apps for development, but I wanted something a bit flashier, so I found <a href="https://www.freecodecamp.org/news/you-should-never-ever-run-directly-against-node-js-in-production-maybe-7fdfaed51ec6/">this guide</a> and got started with pm2. It will start my apps, restart them if the code changes (like if there was a git pull) and, best of all, generate a script that will run the apps when the Pi boots up – pretty nifty! It also works with Python, so if I end up using that to build some of the smart home, then I'm covered there as well.

And that was me done. Pretty good progress, think – bring on next weekend for more Raspberry Pi fun! I’ll keep you updated with how I get on...

<div style="width:100%;height:0;padding-bottom:87%;position:relative;"><iframe src="https://giphy.com/embed/7TrJ0RxZPrNjG" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
