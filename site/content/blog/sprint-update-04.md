---
title: Pfolio Development Update
date: 2019-10-14T15:04:10.000Z
description: >-
  Here's our round-up of new developments from our most recent Pfolio Sprint...
metatitle: Seccl | Pfolio Development Update
metadescription: Here's our round-up of new developments from our most recent Pfolio Sprint...
authors:
  - Ronak Shah
categories:
 - product
image: /img/04-01.png
imagewebp:
ogimage:
type: blog

---

The API sprint has finished, with progress being made with the transfer gateway and our pension provider integrations, we have also completed the following:

#### Multiple PDF document Links in a message

Following feedback from clients we now have the ability to add multiple pdf document links to a message. This is particularly important for sending out contract notes when trades have been executed. Where a rebalance of a model portfolio takes place, multiple trades are generated which means the end client can receive multiple messages and emails. Where models can contain many assets, the communication can be quite significant. With the development of the multiple links, this means the client will receive 1 message and 1 email for many contract notes.

Below is an example of the response to [get a single message:](https://developers.seccl.tech/#get-a-single-message)

![get message](/img/04-01.png)

If you would like to take advantage of this new development please do get in touch and we can update your firm accordingly.

#### Instructing an adviser fee as part of a Recommendation

We have enhanced the [adviser recommendation](https://developers.seccl.tech/#recommendation) feature by developing a new route to enable advisers to request an adhoc fee. This means the adviser can request an  [adhoc fee from a client](https://developers.seccl.tech/#adhoc-fee-recommendation), once the client has accepted the fee this is then applied to the client account. The available cash is then updated to show the deduction of the fee.

![adhoc fee](/img/04-02.png)

#### Add additional field to capture if client has been seen face to face

To help clients with their processes we have added an additional data field to enable users to capture if an adviser has been seen face to face upon [client creation](https://developers.seccl.tech/#create-client). This means where a client hasn't been seen face to face additional compliance checks may need to be completed.

![adhoc fee](/img/04-03.png)

The planning has been completed for the next sprint, in addition to the ongoing integration with the transfers gateway and pension provider development we hope to complete the following:

* BUG — Sending a message every month for a Regular Withdraw
* Add pagination to the Instrument list endpoint
* When updating a model a rebalance is triggered

If you have any questions please do get in touch.

Thanks

The Product Team
