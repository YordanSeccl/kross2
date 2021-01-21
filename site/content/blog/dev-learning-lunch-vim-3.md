---
title: More PacVim than packed lunch...notes from our recent learning lunches
date: 2020-06-04T07:15:10.000Z
description: >-
  Personal development is a big emphasis here at Seccl, so every Friday we try and get together as a group for a 'lunch-n-learn'. Here's what we've been up to recently...

metatitle: More PacVim than packed lunch...notes from our learning lunches
metadescription: Personal development is a big emphasis here at Seccl, so every Friday we try and get together as a group for a 'lunch-n-learn'. Here's what we've been up to recently...

categories:
  - team
authors:
  - Sam Ollason
image: /img/pacvim.gif
imagewebp:
ogimage: /img/pacvim.gif
type: blog

---

Our weekly lunch-n-learn sessions are open to everyone in the company, and it’s great to see a real mix of people attending – including two of our [new joiners](/blog/new-joiners-may/), Ben (who’s joined our back-end team) and Marc (our new DevOps engineer).

We tend to anchor them around a <a href="https://www.udemy.com/" target="_blank"> Udemy course</a> (it’s one of the perks of working here that we all get a subscription to [learn whatever we’d like](/blog/like-learning-love-seccl/)) – following along together before practicing what we’ve learned through a few applied tasks, challenges or (more often than not) games.

Lately we’ve been learning all about Vim, the ubiquitous text editor that is found on just about every laptop, desktop and server in the world.


#### Taking stock
So far, we’ve learned how to [create and navigate files](/blog/dev-learning-lunch-vim) (as well as to quit Vim when we’re done!), delete text, and start to [‘think in Vim’](/blog/dev-learning-lunch-vim-2/).

As a few of the regular lunch-n-learners couldn’t make one or two of the latest sessions, we thought we’d focus on reinforcing what we’ve learned so far, rather than plough on with lots of new stuff.

And, to be honest, that’s proved super valuable in itself. Mastering Vim is all about becoming fluent in the various keystrokes that allow you to navigate text files – and that only comes with practice.

We’ve found a good way of applying our learning is through games. We’ve now played a fair few rounds of <a href="https://vim-adventures.com/" target="_blank">Vim Adventures</a> – a fun and interactive way to practice the basic keystrokes – and there’s always a healthy amount of competition between our two frontrunners, [Sam R](/blog/sam-tech-diary-raspberry-pi-3/) and <a href="https://dev.to/triplejdev/a-new-project-back-to-basics-1eh7" target="_blank">Rhymes</a>. (We did, however, learn that Marc has completed the entire game – so their victorious reign may be coming to an end!)

\
\

![Rhymes and Sam R are out in front in the Vim Adventures competition stakes...But new recruit Marc looks set to put them through their paces!](/img/vim-adventure-champions.jpg)

\
\

To mix it up, though, we also downloaded <a href="https://github.com/jmoon018/PacVim" target="_blank">PacVim</a>, a PacMan-inspired free terminal game where you have to move the cursor through a mini-maze using Vim commands. The objective is to encounter every letter but avoid the red 'G' characters that follow you throughout the maze (PacVim's answer to the ghosts in PacMan). Although a lot of fun, it was actually very tricky to even get past level 0!

One trick we did find helpful in getting us out of a tight spot when the Gs were coming was to use the <span class="code-block">gg</span> command. In a normal text file, this takes the cursor to the start of the first line – and in PacVim it takes the player to the first character in the top row of the maze. To complement this manoeuvre, there's the <span class="code-block">$</span> symbol, which takes you to the end of the current line.

#### Getting help
The one new thing we did tackle was how to use the Vim Help system (which is probably going to be our friend for a while…)

To start the help system it’s <span class="code-block">:help</span> – or <span class="code-block">:h</span> for short.

To navigate, position your cursor under the word you want to learn about and <span class="code-block">Ctrl</span> <span class="code-block">]</span> to jump to the documentation, once finished simply type <span class="code-block">Ctrl</span> <span class="code-block">o</span> to return the previous position.

And exit it’s <span class="code-block">:q</span> (as it is for everything else, too).

And that’s that. The sessions are a really fun way to spend an hour with the team while we all make progress on our Vim journey. Next Udemy chapter? 'Deleting, Yanking and Pulling'. Can't wait!
