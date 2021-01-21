---
title: Thinking in Vim...notes from our dev learning lunch
date: 2020-04-30T07:15:10.000Z
description: >-
  We’re into our second week of lunch-n-learning about Vim, a text editor that you can use on pretty much any server, laptop or desktop to modify files using the command line. This week we learned how to delete text in files, and took a deep dive into how to ‘think in Vim’, by exploring common patterns and approaches that are used to build up commands.

metatitle: Thinking in Vim... notes from our dev learning lunch
metadescription: We’re into our second week of lunch-n-learning about Vim, a text editor that you can use on pretty much any server, laptop or desktop to modify files using the command line. This week we learned how to delete text in files, and took a deep dive into how to ‘think in Vim’...

authors:
  - Sam Ollason
categories:
  - team
image: /img/dev-learning-lunch-2.jpg
imagewebp:
ogimage: /img/dev-learning-lunch-2-og.jpg
type: blog

---

#### Deleting single characters
After learning how to navigate through files and how to insert text (the stuff of our first learning lunch), the next most common type of thing you’d want to do using Vim is to delete text. The essentials for this are pretty easy to remember:

Lower case <span class="code-block">x</span> will delete the character at current position

Capital <span class="code-block">X</span> (i.e. <span class="code-block">SHIFT</span>+<span class="code-block">X</span>) will delete the character at the previous position

#### Avoiding shortcuts
So far, so good. But it turns out that using single characters (like lower and uppercase x above) are actually just shortcuts that make it faster to use Vim. All well and good, but to embed our understanding it was time to learn how to properly think ‘in Vim’ by exploring a few common patterns.


#### operation{motion}

The first pattern we explored was operation{motion}. This is where you combine two Vim commands (one for the 'operation' and one to describe the ‘motion’).

For example <span class="code-block">dw</span> is short for ‘[delete] [word]’. The operation here is obvious, but the key to understand this pattern is how that ‘delete’ operation is used.

From our previous learning lunch, we knew that <span class="code-block">w</span> moves you forward to the next word, so here this pattern deletes the next word after the one in the current position. The way to think of it is ‘I’m going to delete where this motion would take me’.

Other examples of this pattern are...

<span class="code-block">d0</span> deletes from the current position all the way back to the beginning of the line

<span class="code-block">d$</span> deletes from the current position to the end of line

<span class="code-block">dd</span> deletes the entire line regardless of where the cursor is based

See, we're getting the hang of this whole operation thing. Sade would be proud.

\
\

<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/pceQVhywTu8Xm" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p>

#### [count]operation{motion}


Knowing this pattern, we can build on it by adding a ‘count’ to specify how many times to repeat the action of an operation. For instance, <span class="code-block">3dd</span> will delete the entire next 3 lines.

#### [count]operation{motion}[count]

The final pattern we explored took this same principle of adding a ‘count’, but this time at the end of the statement. This count specifies how many times to repeat a motion. For example <span class="code-block">2dw3</span> will delete the next 3 words, twice (i.e. it will delete the next 6 words)		

Of course, this could be achieved using <span class="code-block">6dw</span> (from the above pattern), but there may be times when you want to be more specific (and besides, everyone will have their own personal preference).

\
\

![Getting to grips with the count operation motion commands on Vim](/img/count-operation-motion.jpg)

#### Dot command (.)


A final handy Vim command to be aware of is the full stop <span class="code-block">.</span> command, which repeats the last command you entered into the terminal. A really useful one to remember!

#### Speed running

We ended the session with another speed run through the first level of the <a href="https://vim-adventures.com/" target="_blank">Vim adventures game</a>, to reinforce what we've learned about Vim so far. We all managed to get the treasure, but our server-side lead Rhymes got there first. Well done Rhymes!

#### Putting it all together

So, in this week’s learning lunch, we learned how to delete text inside files using Vim, as well as some fundamental patterns involving ‘count’, ‘operation’ and ‘motion’, and how the vim syntax for these works. Using these strong foundations we'll be able to combine and compose more sophisticated commands in the future.

It was great fun learning as a group and next week we will be doing the same again (or just <span class="code-block">.</span> if you speak Vim!)
