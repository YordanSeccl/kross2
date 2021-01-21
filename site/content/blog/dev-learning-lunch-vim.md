---
title: Vim and vigour...notes from our dev learning lunch
date: 2020-04-17T13:15:10.000Z
description: >-
  This week, we held our first developer learning lunch. As the name suggests, it's where a group of us get together to, well, eat lunch and learn. On the menu this time? Getting to grips with Vim...

metatitle: Seccl | Vim and vigour... notes from our dev learning lunch
metadescription: This week, we held our first developer learning lunch. As the name suggests, it's where a group of us get together to, well, eat lunch and learn. On the menu this time? Getting to grips with Vim...


authors:
  - Sam Ollason
categories:
  - team
image: /img/vim-adventures-home.jpg
imagewebp:
ogimage: /img/dev-learning-lunch-og.jpg
type: blog

---

#### Vim: what and why?
"You're not a real developer unless you use <a href="https://www.vim.org/">Vim</a>". A bit harsh, but is it true?

Well, it’s certainly a useful thing to know. A text editor created originally for the Unix operating system, Vi (short for visual) and its successor Vim (Vi improved) is pretty much everywhere.

There’s not an operating system out there that won’t run it. But there may well be ones that don’t support your favourite text editor – particularly if you’re using a remote machine that doesn’t have a graphical user interface (GUI).

If you’re logged into a remote server, a text editor like Atom or Notepad might not be there to help you. And if you’re thinking of using your mouse you can probably forget that, too. So, if you’re reliant on both of those, you’re pretty much stuffed.

Know Vi(m), though, and you’ll have the tool to survive in the harsh GUI-less environment,  where only your wits and your keyboard are on hand to save you…

#### What's the syllabus?
At Seccl, we’re lucky enough to have a subscription to <a href="https://www.udemy.com/" target="blank">Udemy</a>, the fantastic online video learning platform.

The <a href="https://seccl.tech/team">whole team</a> is encouraged to use it to pick up new skills or brush up existing ones – and so far we’ve clocked up nearly 60 hours of learning since we started using it in February.

There are more than 100,000 online courses to choose from, so it’s no surprise that one of them is a ‘Vim Masterclass’. And with 15,382 students already enrolled, I guess we’re in good company.

So we spent the majority of our lunch hour following the first few classes on Rhymes’s machine.

\
\

![Following along remotely to our Vim Udemy course on Rhymes's machine](/img/dev-learning-lunch.jpg)

#### First things first...how do I get out of this thing?

One of the common challenges that people face when getting stuck into Vim is, well, just that – they get stuck.

Sam, our front-end engineer, revealed that he’d "never used Vim before until about six weeks ago, when someone showed me how to use it. They left me alone for about 15 minutes and I’d wanted to exit, but I was stuck inside."

Don’t worry, Sam, you’re not alone in the struggle. More than 2 million people have wondered how on earth to leave, since the question was first posed on <a href="https://stackoverflow.com/questions/11828270/how-do-i-exit-the-vim-editor">Stack Overflow</a> over 7 years ago.

\
\

![Over 2 million people have asked how to quit Vim on Stack Overflow...](/img/stack-overflow.jpg)

\
\
And so we focused this time on getting to grips with the absolute basics: understanding Vim’s different modes, learning how to create and save a new file, navigating within it – and, crucially, getting out.

#### Normal vs insert mode

Vim has a few different modes to be aware of. Normal, or ‘command’ mode, is the default mode that you’re in when you first enter vim.

It’s from here that you can issue commands. Just hit <span class="code-block">:</span> and you’ll enter ‘command line’ mode – you can now type whatever command it is that you want to issue.

Then there’s ‘Insert’ mode. This allows you to insert and edit text within a file. To get here just hit <span class="code-block">i</span> – it’ll show --INSERT-- at the bottom of your terminal to confirm that you’ve entered it.

Insert mode is like the default mode for most text editors – it’s where you can actually insert and edit text. The reason Vim doesn’t default to this mode is because there’s no GUI. So Normal mode is, in a way, a replacement for the mouse and menu bar – your way of navigating around and between files. This <a href="https://medium.com/free-code-camp/how-not-to-be-afraid-of-vim-anymore-ec0b7264b0ae">handy blog</a> explains it pretty well.

To return to normal mode at any time, just hit <span class="code-block">Esc</span>.

And to exit Vim? It’s <span class="code-block">:q</span>. Q for quit. To be fair to Vim, it does say it on the first screen...

![The essential Vim commands...](/img/vim-home.jpg)


#### Creating and navigating a file

Next we learned how to create a file, or navigate to an existing one. It’s as simple as <span class="code-block">vim [FILENAME]</span>.

Creating a file automatically places you within it so you can insert your content. To save and quit it’s <span class="code-block">esc</span> (to enter normal/command mode) followed by <span class="code-block">:wq</span>.

If you try and quit <span class="code-block">:q</span> without saving your changes, it won’t let you. But if you want to quit and discard your changes, you can use <span class="code-block">:q!</span>

Then we learned all the ways of navigating around a file, using only the keyboard:

<span class="code-block">Ctrl</span> <span class="code-block">f</span> – forward (page down)

<span class="code-block">Ctrl</span> <span class="code-block">b</span> – back (page up)

<span class="code-block">w</span> – forward one word (includes punctuation)

<span class="code-block">W</span> – forward one word (ignores punctuation)

<span class="code-block">b</span> – back one word (includes punctuation)

<span class="code-block">B</span> – back one word (ignores punctuation)

<span class="code-block">^</span> – beginning of a line

<span class="code-block">$</span> – end of a line

<span class="code-block">gg</span> – beginning of file

<span class="code-block">G</span> – end of file

<span class="code-block">:[line number]</span> – takes you to that line

<span class="code-block">h</span> – move to the left

<span class="code-block">l</span> - move to the right

<span class="code-block">k</span> - move up

<span class="code-block">j</span> - move down


\
\
![Learning the Vim navigation commands](/img/vim-navigations.jpg)

#### Putting it into practice

By then, weary of classroom learning (in retrospect, learning and lunch are deeply incompatible), and daunted by the fact that we've barely scratched the surface, we decided to apply our new and very limited knowledge in a game.

<a href="https://vim-adventures.com/">Vim Adventures</a> lets you practice your navigation commands in a fun way that won’t put much pressure on your computer’s graphics card... Throw in the group competition element and you’re onto a winner.

\
\

![Applying our wafer thin knowledge in the 'Vim Adventures' game...](/img/vim-adventures.jpg)

\
\

In the words of our friendly and knowledgeable Udemy teacher, "even if you're not trying to make Vim fun, it can be a joy to use." It's early days on that one – but we’ll see!
