# FrontEnd Using Moralis

...

## Home Page:

It will show recently listed NFTs:

-   If you own the NFT, you can update the listing
-   If not, you can buy the listing

1. Header using web3uikit [ConnectButton]

2. Create navbar

3. You can take from next/link
   https://nextjs.org/docs/api-reference/next/link
   we can do in this is "link" allows us to basically connect to different links or URLs in our application.

4. Use tailwind css to do formatting
   https://tailwindcss.com/docs/guides/nextjs

5. Finish header.js with nav section containing Title h1 - Home - Sell [next/link] & Connect button from web3uikit. Formatting done with tailwind css.

"Introducing to Indexing in Web3"

6. Open hardhat-nftmarketplace

    Create an array of listing instead?
    Get all the NFTs a user owns?
    Query some other weird data?
    What if an array will be very gas expensive
    We don't want to change our protocol for just the website.
    Have an array for every single mapping is not feasible.

So every single time we list an NFT, we call
this ListItem function. And we emit ItemListed event, this item listed event is stored in a data structure that's still on chain, but just smart contracts can access it.

So what we do in this case, is what we're going to do:
is we will index the events off chain and then read from our database. So what we're literally going to do is we're going to set up a server to listen for those events to be
fired. And we will add them to a database to query.

And then we are going to call our centralized database to start and we are going to call that database to do that. BUT isn't this centralized?

So The Graph is a protocol that does exactly this.
It's a protocol that indexes events off chain, and sticks them into this the Graph Protocol. & It does it in a decentralized way.

Moralis---> Do it in a centralized way.

So lets learn how to list the most recently listed NFTs on Moralis & The Graph

---

7. Go to Moralis - create a new server. (Not Ganache.. HH)
   Now we have our server up so we go to Moralis Docs & look for events (Sync with events)
   this server our database is going to be looking for these events to be emitted.
   (Events in NFTMarketplace.sol)

8. Before we can do that, we need to hook(Connect) up our application to our server.
   Go to the React Moralis, use Moralis Provider ---> appID & ServerURL
   Grab them to .env add them to appJS in MoralisProvider.
   NOW, dashboard Moralis take you to DB.
   If you have any events data you will find it there.
   We want to tell the moralis server to start listening to events so we can SHOW our recently listed entities. Also if someone buy item or cancel item so we need to remove it from our DB.

9. To start allowing Moralis to listen to events we have to:
   A. Connect Moralis back to our Blockchain.
   B. Which contract, which events, and what to do when it hears those events.

A. So how do we connect our Moralis server to our hard hat blockchain?
In one node run: front end
In other node run: hardhat-nft-marketplace

-   dev chain proxy server is going to be how we actually tell Moralis to listen to our locally running hardhat node.

download frp
you can run frp through terminal or through Moralis admin CLI (run code in terminal)
