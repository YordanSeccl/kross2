---
title: An introduction to GraphQL
date: 2020-06-18T08:15:10.000Z
description: >-
metatitle: Seccl | An introduction to GraphQL
metadescription:   In his handy intro to GraphQL, front-end engineer Sam Ollason teaches you what it is, why it was built, how it can help and how you can use it. The perfect primer for this important query language.

authors:
  - Sam Ollason
categories:
 - engineering
image: /img/graphql-header.jpg
imagewebp:
ogimage: /img/graphql-og.jpg
type: blog

---
### Introduction
At Seccl we're actively encouraged to spend part of our time at work [learning new things](/blog/like-learning-love-seccl), and we're lucky enough to have a company Udemy account to help us do so. One of the things I've been learning about recently is GraphQL. I thought I'd  share some of what I've learnt so far.

This article will cover:

- What is GraphQL?

- Why was GraphQL created and what problems does it solve?

- How do I implement GraphQL?

- What projects is GraphQL useful for?

- Summary

- Further reading

### What is GraphQL?

#### The simple definition
<a href="https://graphql.org/" target="_blank"> GraphQL</a> is a modern approach for transferring data between a client (e.g. a mobile app front-end or a browser) and a server (e.g. the web server serving a website). __It allows the client to control and specify the structure of the response it expects from the server.__

This is different from other approaches. A very common approach for client-server data transfer is based on <a href="https://en.wikipedia.org/wiki/Representational_state_transfer" target="_blank">REST</a>, where the server controls the shape of the data sent to a client. The RESTful style is the ‘typical’ method that client-server architectures use in modern web apps – at least in my experience.

#### The precise definition
That’s the simple definition. To be more precise, GraphQL is a __specification__ for a __query language__ used by web service APIs, and a __runtime specification__ for using those queries to fetch data.

So it has two components: a specification for how a client requests data, and another for how servers handle a request and return a response.

The important bit is that it's a __specification__ – meaning GraphQL can be implemented in different languages and using different frameworks, so long as the implementation conforms to certain rules.

#### What is this ‘graph’ thing all about?
GraphQL gives a client the power to specify the structure of the data returned by the server. This is where the ‘Graph’ in GraphQL comes from: the client effectively specifies a graph-like structure for the response it expects.

When I first heard about GraphQL I assumed it was related to <a href="https://en.wikipedia.org/wiki/Graph_database" target="_blank">Graph databases</a> but actually GraphQL is agnostic to the technology and databases used (on both the client and the server!).

#### Some history
<a href="https://engineering.fb.com/core-data/graphql-a-data-query-language/" target="_blank">It was created by Facebook</a> to solve the problems that they ran into trying to scale Facebook.com using the RESTful approach. They wanted a solution that made it easy for their product team and front-end developers to build mobile clients that could request only the necessary data, in a way that was easy to learn and quick to implement. Although it was originally used internally by Facebook, it was made Open-source in 2015.

From what I gather Facebook still use it to this day – as do lots of <a href="https://graphql.org/users/" target="_blank">other organisations</a>.

#### GraphQL queries
To fetch data from a GraphQL server your client-side code uses a GraphQL <a href="https://graphql.org/learn/schema/#type-system" target="_blank">type</a> to make a <a href="https://graphql.org/learn/queries/" target="_blank">query</a> to the server. This basically tells the server _“I want this data and I want it in this format”_.

Below you can see an example from the <a href="https://www.udemy.com/course/serverless-react-with-aws-amplify/" target="_blank">Udemy course</a> I'm following. Part of the course explains how to use <a href="https://aws.amazon.com/appsync/" target="_blank">AWS App Sync</a> to test GraphQL queries against your data, using Amazon’s console.

On the left you can see the body of the query that's used to get back a list of ‘notes’ for a note-taking app – while the data returned by the GraphQL server is in the middle panel. You can see that the data is returned in the structure that's specified by the request.

![An example showing how to use AWS App Sync to test GraphQL queries against your data, using Amazon’s console](/img/graphql-aws.png)

#### GraphQL mutations
For a client to create, update or delete data on the backend, you run what's called a <a href="https://graphql.org/learn/queries/#mutations" target="_blank">mutation</a>. A mutation takes an instruction and also a graph structure (similar to a query).The instruction is used to create/update/delete data and then the graph structure is used to control the shape of the response returned by the server.

This is useful as you may want to display the information that has just been modified to the user when the server responds with a success message.

__Again, the client is controlling the shape of the response from the server.__

### Why was GraphQL created?
__GraphQL gives the client control over the shape of the data returned from the server. This is different to a typical RESTful approach where the server determines the shape of the data that is sent to the client.__

The best way to understand why GraphQL was created is to understand the problems that it can solve. Below are some of the challenges that a typical RESTful architecture can present, and some of the solutions that GraphQL can offer.

#### Reducing client-side data processing
You may support different types of clients accessing the same server. For instance, you may have a web app and a mobile app, both of which want to access your servers.

With the RESTful approach, the client may not get back data in the format it needs to consume. This means the client-side code may have to do some selection, filtering and looping to process the data. All of this will use the processing power of the device and this could impact performance – especially on a low-powered device like a mobile.

Using GraphQL, the client would send a request which specifies exactly what data it would like and the shape that data should be returned in.

So, using GraphQL can reduce the amount of processing required by the client - which can potentially improve the maintainability of the code (by having less of it!) and noticeably improve the performance of your app.

#### Reducing network request size

I've already explained that using a RESTful approach to returning the data you need could actually involve receiving lots more that you don't need, too. This redundant information means the size of the network request could be bigger than it needs to be. Using a GraphQL approach, you can potentially improve the network footprint of your app – which, again, could improve performance.

#### Removing request dependencies
A common feature in social media sites is to display a list of comments on a post. You could do this using a RESTful architecture approach, by...

1. Fetching a list of all users by making a request to the <span class="code-block">`/users`</span> endpoint

2. Using the user’s id to fetch a list of all their posts by making a request to the <span class="code-block">`/posts/:userid`</span> endpoint

3. Using the id of a particular post to make a request to <span class="code-block">`/posts/:postid/comment`</span> to get the comments for a post with ‘postid’

__This approach creates a dependency between requests__ because we have to wait for each of the previous requests to return successfully before we can fire off the next request. And this poses a number of challenges for developers. For example:

- how do you write maintainable and clear code that deals with this asynchronous dependency?

- how do you handle one of those requests failing but not the others?

(Not to mention the extra overhead of making multiple network requests which, you guessed it, can impact performance.)

#### GraphQL can potentially remove some request dependencies.
Instead of making several dependent requests to get the comments on a post, the client-side code could send a request to the GraphQL endpoint on the server, with the shape of the data the client needs. It could look something like this:

![A client-side reqeuest to the GraphQL endpoint](/img/graphql-dependencies.png)

You can see the difference in approach from the diagrams below: with the GraphQL approach there's only one endpoint exposed (<span class="code-block">`/graphql`</span>) and, given a user’s id, only one request has to be made to get the posts for a particular user.

{{< figure src="/img/restful-approach.png" caption="RESTful architecture — all requests from top to bottom must be made to access comments on a post">}}

{{< figure src="/img/graphql-approach.png" caption="With GraphQL only one request is needed to get the comments on a blog post (given the user’s id)">}}

#### Reducing the number of network requests
Following on from the example above, a RESTful approach can involve more network requests. This can have significant performance implications for your app, especially if the user has poor network connectivity. With GraphQL, you only need to make one request – so, again, GraphQL could improve the performance of your app.

#### Fewer endpoints to manage
From a client’s point of view, endpoints are like the gateways to accessing data. In the example above, we saw how with the RESTful approach we needed to manage more endpoints than the GraphQL approach. So, using GraphQL can reduce the amount of publicly-exposed access points, which can make your server code more maintainable – and also reduce the documentation burden on your team.

#### Increased flexibility
Migrating your API to a newer version is challenging with the RESTful approach, because you need to modify both the client and the server.

An API change could require you to modify how the backend creates the request, and also how your client selects and processes the data that it returns. And changing two places at once creates a coupling between the two different areas of your system, which can make it harder to get right (and also just adds more work).

With the GraphQL approach, the client is more of a consumer. It always gets back data in the shape it wants, which can mean that you don’t need to modify a client at all in response to an API change.

### How do I implement GraphQL?
As mentioned above, GraphQL is a specification for a client-side query language and a server-side runtime to handle those queries. Importantly, __it is just a specification__ – in other words a set of rules – and there are lots of specimen-compliant GraphQL solutions to choose from.

#### The client
There are several different libraries to choose from for the client-side part of GraphQL, and __lots of the popular choices also offer a state management solution as well__. This means they'll also automatically handle things like caching, so you only need to fetch data from a server when necessary.

The two most popular solutions seem to be <a href="https://www.apollographql.com/" target="_blank">Apollo</a> and <a href="https://relay.dev/" target="_blank">Relay</a>. It is actually possible to not use any GraphQL client and just use something like <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" target="_blank">fetch</a> (the in-built browser API for making HTTPs requests) as long as your server supports GraphQL. But the main benefits of using these solutions compared to using (or misusing?) something like fetch is the __ease of integration__ and __caching__.

A detailed comparison of the two solutions is out of the scope of this article, but an interesting thing to note is that Relay is designed only to work with a React codebase (unsurprisingly as it was created by Facebook, who are also <a href="https://en.wikipedia.org/wiki/Eating_your_own_dog_food" target="_blank">dogfooding</a> React) – whereas Apollo is framework agnostic.

#### GraphQL server
You'll need some way for your server to handle the GraphQL queries that come from your GraphQL client. A specification-compliant solution contains what are called <a href="https://graphql.org/learn/execution/" target="_blank">resolvers</a>, which handle different types of queries that access and prepare data to be sent back to the front-end (in the format specified by the request from the front-end).

Resolvers are sort of like big switch statements — given a query (e.g. ‘getNotes’) or a mutation (e.g. ‘deleteNote’) they will resolve the query/mutation by selecting the appropriate handler and then fetching/processing data as necessary. The data can be fetched from a database, it can be generated on the server, or it can be fetched from some other endpoint (GraphQL or RESTful or whatever!).

So from a server-side perspective, not much is different from REST. The main differences are that the server now has to structure the data it returns to be exactly as is specified by the front-end (which is coordinated by a <a href="https://graphql.org/learn/schema/#type-system" target="_blank">type system</a> shared by the client and the server), and that all GraphQL traffic goes through a single endpoint.

One popular solution is <a href="https://www.apollographql.com/docs/apollo-server/" target="_blank">Apollo Server</a> and, interestingly, you don’t have to use the <a href="https://www.apollographql.com/docs/react/" target="_blank">Apollo Client</a> for your GraphQL client in order to use it.

### What projects is GraphQL useful for?
GraphQL can improve the performance of __data-intensive UIs, where performance of client-side code is a big consideration__. For instance, Facebook has billions of users on low-powered mobile devices – many of whom might also have a poor internet connection – so the performance of the client is definitely a big factor.

It’s also __useful if a product has multiple different clients__ (e.g. mobile, web app, VR headset) accessing the same server, because the amount of client-side code to process data can be massively reduced – meaning the UI team can develop faster and more easily. This could suit start-ups with limited UI or product resource.

### Summary
GraphQL is a solution to handle fetching data for a client from a server. It's a specification for a server-side runtime and a query language, and there are multiple different solutions for both the client-side part and the server-side part.

GraphQL solves many of the common challenges that are found in a typical RESTful architecture, particularly for data-intensive web apps where lots of complex data requests are made by the client. The main difference between GraphQL and REST is that with GraphQL the client specifies and controls the shape of the data it requires.

The main projects that GraphQL can benefit are those where a client works with a lot of data and is really responsive, as well as products where you need to support multiple clients.

### Further reading:
- https://graphql.org/
- https://engineering.fb.com/core-data/graphql-a-data-query-language/
- https://blog.bitsrc.io/apollo-and-relay-side-by-side-adb5e3844935
- https://www.prisma.io/blog/relay-vs-apollo-comparing-graphql-clients-for-react-apps-b40af58c1534
- The GraphQL section of <a href="https://seccllearning.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15351934#overview" target="_blank">this Udemy course</a>
- <a href="https://www.udemy.com/course/serverless-react-with-aws-amplify/" target="_blank">AWS App sync Udemy course</a>
