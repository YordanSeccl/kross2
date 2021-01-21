---
title: Making my dumb house a smart home...
date: 2020-05-06T10:15:10.000Z
description: >-
  In his next diary entry, server-side engineer Sam gives a simple fix for a widespread problem... poor WiFi. All you need is an old router!

metatitle: Seccl | Making my dumb house a smart home...Sam's tech diary
metadescription:   Read our server-side engineer's tech diary to learn a simple fix for that widespread problem... poor WiFi. All you need is an old router!

authors:
  - Sam Rogers
categories:
  - engineering
image: /img/sam-tech-diary-2.jpg
imagewebp:
ogimage: /img/sam-tech-diary-2-og.jpg
type: blog

---

<strong>This is chapter two of Sam’s tech diary – you can read chapter one [here](/blog/sam-tech-diary-raspberry-pi).</strong>

#### Happiness starts at home...

Behind any smart home is a strong internet connection. Sadly, though, old houses and ISP-provided routers are a poor mix.

WiFi signal degrades very quickly at the best of times – let alone when it's passing through my walls, which apparently seem to be made of solid lead.

Luckily, however, the previous owner was pretty tech-savvy and had wired up the house with LAN cables. They kindly left them behind when moving out, so some of the work in getting my home smart ready had already been done: the home office can have one device wired into that fast connection.

But what about all the other devices in the room and upstairs? WiFi speeds in the office aren’t great – 15 to 25 mbps most of the time – so it was clear the network was going to need a bit of TLC  (or some sweary muttering) if I was ever going to make [Brian Blessed my personal slave](/blog/sam-tech-diary-raspberry-pi). Time to see what I have lying around in the house...

\
\

<div style="width:100%;height:0;padding-bottom:41%;position:relative;"><iframe src="https://giphy.com/embed/xT77Ye9vgKyQ9lqTbq" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>

\
\

#### Turning a spare router into a Wifi repeater
It turns out my old ISP wasn't interested in having their router back at the end of the contract (I can’t think why…), so I had a spare one of those lying around. Could I use it to boost my signal?

I did a bit of research and it seemed to look pretty easy. Worryingly easy, in fact. Must be some sort of trick, I thought.

But no, it turns out it really is super simple to convert an old router into a new WiFi repeater – and with a couple of LAN ports on the back, too. Two birds, meet one stone.

So what do you actually need to do? First things first, you need to get the IP addresses for your actual working router and your old dusty one. You can do this with a quick <a href="https://www.howtogeek.com/233952/how-to-find-your-routers-ip-address-on-any-computer-smartphone-or-tablet/" target="_blank">rummage through the network settings</a> – first with your current router and then again with the one you want to add.

Once you've got the IP address for the router you want to add, open that up in a browser and log in. Credentials are posted all over the internet for these things, but if they don’t work then just factory reset it and then they will.

You might then need to change the IP address of the router once you're logged in. Both of my routers had an IP address of 192.168.0.1, which was definitely going to cause a conflict, so I changed the dusty router’s IP to something else.

Next thing is to turn off the dusty router’s <a href="https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol" target="_blank">DHCP</a>. This is what allows a router to hand out IP addresses to anything that connects to it – so by switching it off for the router you’re adding, you’re making sure that only the main one is in charge, and no two devices get given the same IP address.


\
\

![Connecting an old router to a new one is a good way to boost your WiFi](/img/old-router-new-router.jpg)

#### A few extra modifications

And that’s the basics done. I said it sounded too good to be true! I did, however, do a couple of extra things just to help a bit.

For example, I changed the new router's network name (the SSID) to match the existing one, so changing between routers would be easier for my phone.

I also logged into my existing router and reserved the IP address I just gave the new router. I’m pretty sure that telling the old router its IP address was enough, but I wanted to make sure that nothing else was going to get that new IP address by mistake.

Then I set about creating a few more LAN connections. Using a router like this means that you have to give up one of the ports to connect to the main router, so while I'd achieved faster WiFi around the house I still didn’t have any more ports (who builds a router with only 2 LAN ports?!).

Luckily I'd bought a network switch on Amazon a while back, thinking it would come in handy one day – and it totally did. In fact, it was another ‘too good to be true’ moment. "Just plug it all in and it's good to go? Surely not!" Well, actually, yeah. It works perfectly.

All of this means that WiFi speeds are now up at around 100 to 110 mbps on a phone, and 280 to 290 mbps on a laptop – significantly better than before, and all with very little actual work. And thanks to the switch I have all the LAN connections I could possibly need.

(Not to mention the fact that all the little flashing lights mean it’s like Christmas all year round.)


#### What's next?
So, after a weekend of home schooling, my dumb house is now smart home ready. This has all been in preparation for getting the Raspberry Pi to run Pi-hole (a network-wide ad-blocking software), without slowing down my internet speed, and while still being physically accessible from the office. That’s next on the list...
