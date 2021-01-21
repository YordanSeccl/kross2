---
title: Pfolio Development and Professional Sprint update
date: 2019-12-23T15:04:10.000Z
description: >-
  We have recently changed our development cycle here at Seccl. So that we can release new functionality more quickly and efficiently, we now run the same sprint for both our Pfolio and Professional teams. Here's our round-up of new developments from our most recent sprint...
metatitle: Seccl | Pfolio Development and Professional Sprint update
metadescription: We have recently changed our development cycle here at Seccl. So that we can release new functionality more quickly and efficiently, we now run the same sprint for both our Pfolio and Professional teams. Here's our round-up of new developments from our most recent sprint...
authors:
  - Ronak Shah
categories:
 - product
image: /img/01-01.png
imagewebp:
ogimage:
type: blog

---


### Pfolio Development Update

#### New Transaction codes

We have updated our static data to include new transactions codes to update a client account for reclaimed client payments and to apply client referral payments. When these transaction codes are used, they will be seen within the Portfolio Report [Portfolio Report](https://developers.seccl.tech/#retrieve-portfolio-report) or [Account Report](https://developers.seccl.tech/#retrieve-account-report).

![transaction codes](/img/02-01.png)


![transaction codes](/img/02-02.png)

#### Account validation when using model portfolio

When using model portfolio, the validation has been updated to ensure that the account can access the model. This means that we are able to ensure that the correct models are linked to the correct accounts.


In addition to the above we have also completed the following bugs:

* Pension Provider id used for creating a pension
* Pension provider data feed

### Professional Update

#### Introduction of scopes being applied to a user

Scopes are where you are able to grant specific feature access to users within your firm. We have built within the user creation screen the ability to assign these scopes in preparation for when the API is updated and fully supports this. You will see when using the Users, Model and Instruments scopes that this will control what users can access, update or instruct a rebalances.

![ui scopes](/img/02-03.png)


#### Updating the ability for a client to update bank details

We have updated the Investor UI to indicate to the client that bank details can be changed by their provider or adviser. This is to provide firms with the flexibility to complete their due diligence checks.

![ui update bank details](/img/02-04.png)


#### Capture ISA declaration agreement

As part of our continued enhancement of the system, we have now updated the ability for a client with an adviser to accept an ISA declaration via the clients portfolio login. This makes the client account setup process much more efficient and the client is able to complete this electronically.

![ui ISA declaration](/img/02-05.png)


#### Instruments List

You are now able to access the master instruments list and your firms instruments list via the Professional Ui. Should you have the relevant scope, you are able to request instruments to be added to your firms instrument list using this feature.

![ui navigation - instruments](/img/02-06.png)

Within our next sprint we will focus on making our pension integration live. The development we have planned across the next 2 sprints are:

1. Auto-disinvestment options with withdraws
2. Further functionality on scopes
3. MiFiD 10% reporting requirement

If you have any questions or would like further detail on any of the above development please get in touch.
Thanks

The Product Team
