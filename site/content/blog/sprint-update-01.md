---
title: Pfolio Development Update
date: 2019-09-17T15:04:10.000Z
description: >-
  Here's our round-up of new developments from our most recent Pfolio sprint...
metatitle: Seccl | Pfolio Development Update
metadescription: Here's our round-up of new developments from our most recent Pfolio sprint...
authors:
  - Ronak Shah
categories:
 - product
image: /img/07-01.png
imagewebp:
ogimage:
type: blog

---

The API sprint has finished, with progress being made with the transfer gateway and our pension provider integrations, we have also completed the following...

#### Add an LEI data field to a model

An LEI is a Legal Entity Identifier which is an unique number for organisations, individuals or government entities that participate in financial transactions. Specifically, when dealing equity or ETF instruments, we are required to complete transaction reporting on who the decision maker is to invest in these instruments. The LEI is used for such reporting when a company has made the decision on if an instrument should be invested into. The LEI being saved on a model will be the LEI of the Discretionary Fund Manager that manages these models.

![api models](/img/07-01.png)

#### BUG — When requesting a second verify email this errors

When creating a new client and the email verified field is false, the client will receive an email to verify that the email provided belongs to them — documentation is here. The email contains a link for the user to verify their email. There was a bug present that if the user requested another verify email, click here for the documentation, the email was then unable to be verified. This has now been resolved as part of this sprint.

![api verify email](/img/07-02.png)

#### BUG — Email is not sent when a withdraw instruction is requested.

Should your firm settings request emails to be sent to clients, the client will receive an email to notify them of an update on their account. This will tell the client to login to their account and check their message hub. Here, there will be a message to inform the client that a withdraw has been instructed. The email was not being sent to the client however, this has now been resolved within this sprint.

In addition to the above development we have also completed the following:

* Update to Dividend information on a client account to show asset name and equalisation amount
* Update to the Platform Fee calculation to accommodate joint accounts

The planning has been completed for the next sprint, in addition to the ongoing integration with the transfers gateway and pension provider development we hope to complete the following:

* Add multiple pdf documents to a single message hub message

If you have any questions please do get in touch.

Thanks

The Product Team
