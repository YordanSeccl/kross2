---
title: Pfolio Development and Professional Sprint update
date: 2020-01-24T15:04:10.000Z
description: >-
  Here's our round-up of new developments from our most recent Pfolio and Professional sprint...
metatitle: Seccl | Pfolio Development and Professional Sprint update
metadescription:   Here's our round-up of new developments from our most recent Pfolio and Professional sprint...
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

#### Update the sell and withdraw message

We have found an anomaly when instructing a sell of an asset to then withdraw the proceeds, this generated 2 withdraw messages. The two messages were posted to the clients message hub however, this has now been updated to ensure that only 1 message is sent as expected.
For more information on the sell and withdraw function click [here](https://developers.seccl.tech/#sell-and-withdraw-transaction-group).

![sell and withdraw transaction group](/img/01-01.png)

### Update to the regular withdraw message

When setting up a regular withdraw on a client account a pending withdraw payment is created for this withdraw. This is to ensure that there is enough available cash at this time to make the withdraw payment on the correct date. It had been discovered that when the pending payment is created, a withdraw message was also being created. Where these payments are made on a monthly basis the withdraw message would not be sent.
For more information on regular payments please click [here](https://developers.seccl.tech/#update-account-recurring-payment).


#### Validation update on the email address when creating a user

When creating a user on the system we require the first name, surname and email address to create this record. The email address has to be unique across both user and client records on a firm.

### Professional Update

#### Creating a dashboard

![ui dashboard](/img/01-02.png)

We have now created a dashboard page in the professional Ui where firms are able to see firm level data. The information on this page include the following:

#### Exceptions

We have introduced an exceptions banner where users will be able to see the exceptions that have been created. Initially, the suspicious activity exception you will be able to access the underlying data and clear these transactions, depending on the user scope. You will also have the ability to filter this by node, where applicable, to see the underlying transactions at different levels.

![ui exceptions](/img/01-03.png)

#### Firm data

Under the exceptions bar we now show firm data of:

* Number of clients
* Number of accounts
* Number of instruments
* Total Assets under Administration

These figures will update where you are able to select different nodes from the dropdown.

![ui firm data](/img/01-04.png)

Within our next sprint we will focus on the ability to create an illustration. The development we have planned across the next 2 sprints are:

1. Product Fee
2. VAT option
3. Auto-disinvestment options with withdraws

If you have any questions or would like further detail on any of the above development please get in touch.
Thanks

The Product Team
