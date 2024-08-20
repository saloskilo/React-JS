import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'


// export class News extends Component {
//   articles = [


//   ];
//   constructor() {
//     super();
//     console.log("Hello I am a constructor");
//     this.state = {
//       articles: this.articles, // Articles Array
//       loading: false,
//     };
//   }

//   async componentDidMount() {
//     try {
//       let response = await fetch(
//         "https://newsapi.org/v2/everything?q=apple&from=2024-08-17&to=2024-08-17&sortBy=popularity&apiKey=61116340b4b54c769d6d62c1c3f928ee"
//       );
//       // console.log(response);
//       let fetchData = await response.json();
//       console.log(fetchData);

//       this.setState({ articles: fetchData.articles });
//       console.log(this.articles);

//     } catch (error) {
//       console.log(error);

//     }

//   }

//   render() {
//     return (
//       <div className="container">
//         <h2>SaloSkilo Top-News</h2>

//         <div className="row">
//           {/* map function to add all elem */}
//           {this.articles.map((element) => {
//             return (
//               <div className="col md-4 my-3" key={element.publishedAt}>
//                 <NewsItem
//                   title={element.title.slice(0, 20)}
//                   description={element.description.slice(0, 50)}
//                   imageUrl={element.urlToImage}
//                   newsUrl={element.url}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );

//     // let newsItems = [];
//     // this.articles.forEach((element) => {
//     //   console.log(element);

//     //   let { title, description, urlToImage, url, publishedAt } = element;
//     //   newsItems.push(
//     //     <div className="col md-4 my-3" key={publishedAt}>
//     //       <NewsItem title={title.slice(0, 20)} description={description.slice(0, 50)} imageUrl={urlToImage
//     //       } newsUrl={url} />
//     //     </div>
//     //   );
//     // });
//     // return <div className="row">{newsItems}</div>;
//   }
// }
// export default News;




class News extends Component {

  articles= [
{
   "source": {
  "id": null,
  "name": "Gizmodo.com"
  },
  "author": "Kyle Barr",
  "title": "Fortnite’s Back on the Menu, Boys: Epic Games Store Goes Online for iOS and Android",
  "description": "Android and EU-based iPhone users can now download the alternative app store just a few days after Epic made AltStore PAL entirely free.",
  "url": "https://gizmodo.com/epic-games-store-goes-online-ios-and-android-2000487916",
  "urlToImage": "https://gizmodo.com/app/uploads/2024/08/fortnite-mobile-egs-.jpg",
  "publishedAt": "2024-08-16T14:25:16Z",
  "content": "After years of legal fights between Epic, Apple, and Google over the iPhone and Android makers app store restrictions, Epic CEO Tim Sweeney is about to get his last licks in. Starting Friday, the Epi… [+3657 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Gizmodo.com"
  },
  "author": "David Nield",
  "title": "The Gizmodo Back to School Guide 2024",
  "description": "Start the school year right with all of the best tech to hopefully ace all of your courses.",
  "url": "https://gizmodo.com/the-gizmodo-back-to-school-guide-2024-2000487416",
  "urlToImage": "https://gizmodo.com/app/uploads/2024/08/00-hero-2-e1723747586404.jpg",
  "publishedAt": "2024-08-16T17:33:33Z",
  "content": "As regular as clockwork, back-to-school season has rolled around again, which means you (or someone in your life) could be shopping for the best gadgets to take into the classroom, lecture hall, or l… [+5174 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Gizmodo.com"
  },
  "author": "Florence Ion",
  "title": "I Can’t Get Down With the iPhone 16 Pro Max in Brown",
  "description": "The new iPhone will come in four new finishes, one of which harkens back to an era that no longer exists.",
  "url": "https://gizmodo.com/i-cant-get-down-with-the-iphone-16-pro-max-in-brown-2000488034",
  "urlToImage": "https://gizmodo.com/app/uploads/2024/08/iPhone16ProMax-in-BROWN.jpg",
  "publishedAt": "2024-08-16T19:10:39Z",
  "content": "Reflecting on the week, it probably was a good idea that Google announced the Pixel 9 earlier in the product release cycle than usual because now all that anyone is talking about are iPhone leaks. Th… [+2055 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Android Central"
  },
  "author": "techkritiko@gmail.com (Jay Bonggolto)",
  "title": "The Google Pixel 9's satellite SOS runs on tech from Skylo and Garmin",
  "description": "Pixel 9 users in the US can reach Garmin Response via Google's Satellite SOS when they're off the grid in an emergency.",
  "url": "https://www.androidcentral.com/apps-software/the-google-pixel-9s-satellite-sos-runs-on-tech-from-skylo-and-garmin",
  "urlToImage": "https://cdn.mos.cms.futurecdn.net/L5VRabFbfGinbLoqNxmwif-1200-80.jpg",
  "publishedAt": "2024-08-16T21:56:01Z",
  "content": "What you need to know\r\n<ul><li>Google’s Satellite SOS feature is launching first on the Pixel 9 series and the Pixel 9 Pro Fold, but only in the continental U.S. (not Hawaii or Alaska).</li><li>Garmi… [+3161 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Android Central"
  },
  "author": "Nicholas Sutrich",
  "title": "Meta Quest weekly news Roundup: 21 games, 3 new features, and one sad truth",
  "description": "The first VR Games Showcase gave us a look at 17 upcoming games, and some other big-name titles finally have release dates. Plus, a new Meta Quest feature update and sad news about GTA San Andreas VR.",
  "url": "https://www.androidcentral.com/gaming/virtual-reality/meta-quest-weekly-news-roundup-august-16-2024",
  "urlToImage": "https://cdn.mos.cms.futurecdn.net/oibbhomycqqGjHSCkLgeLb-1200-80.jpg",
  "publishedAt": "2024-08-16T16:12:15Z",
  "content": "What you need to know\r\n<ul><li>The VR Games Showcase showed off 17 upcoming games, and games like Alien Rogue Incursion, Metal: Hellsinger VR, and Behemoth now have a release date.</li><li>Meta Quest… [+4863 chars]"
  },
{
   "source": {
  "id": null,
  "name": "MacRumors"
  },
  "author": "Juli Clover",
  "title": "Apple is Opening Up the iPhone's NFC Chip: What You Need to Know",
  "description": "With the launch of iOS 18.1 this fall, Apple will allow third-party developers to support NFC contactless transactions for payments and more. Right now, the NFC chip is locked down, and it's primarily only used for Apple Pay, but a number of new capabilities …",
  "url": "https://www.macrumors.com/guide/apple-nfc-chip-ios-18-1/",
  "urlToImage": "https://images.macrumors.com/t/Ydx1FLWXjUr27iDKcDVjS048sVo=/1960x/article-new/2023/11/Apple-Tap-to-Pay-on-iPhone-avail-FR-transaction.jpg",
  "publishedAt": "2024-08-16T19:45:45Z",
  "content": "With the launch of iOS 18.1 this fall, Apple will allow third-party developers to support NFC contactless transactions for payments and more. Right now, the NFC chip is locked down, and it's primaril… [+2493 chars]"
  },
{
   "source": {
  "id": null,
  "name": "MacRumors"
  },
  "author": "Tim Hardwick",
  "title": "Epic Games Store Launches on iPhone in EU, Brings Fortnite Back to iOS",
  "description": "After a four-year absence, Fortnite is making its return to iPhones – but only for users in the European Union. This comeback is part of the broader launch of the Epic Games Store for iPhone, which went live today in the EU.\n\n\n\n\n\nThe return of Fortnite to iOS…",
  "url": "https://www.macrumors.com/2024/08/16/epic-games-store-launches-ios-eu/",
  "urlToImage": "https://images.macrumors.com/t/PMGwfUNRIktQ7rZpfjpPX_YJss8=/2400x/article-new/2024/08/epic-games-store.jpg",
  "publishedAt": "2024-08-16T11:40:38Z",
  "content": "After a four-year absence, Fortnite is making its return to iPhones but only for users in the European Union. This comeback is part of the broader launch of the Epic Games Store for iPhone, which wen… [+1944 chars]"
  },
{
   "source": {
  "id": null,
  "name": "CNET"
  },
  "author": "Amber Guetebier",
  "title": "Ditch Monthly Fees With 60% Off a Curiosity Stream Lifetime Subscription",
  "description": "Fans of documentaries and learning will love Curiosity Stream, and you can gain lifetime access for a one-time fee.",
  "url": "https://www.cnet.com/deals/ditch-monthly-fees-with-60-off-a-curiosity-stream-lifetime-subscription/",
  "urlToImage": "https://www.cnet.com/a/img/resize/430509ea1f49bb3360e8741227e07b18c3f28583/hub/2024/04/02/ca81f201-c8ee-4698-bb6c-315204aed025/curiosity-stream-logo-promo-image.jpg?auto=webp&fit=crop&height=675&width=1200",
  "publishedAt": "2024-08-16T13:38:08Z",
  "content": "There are so many different streaming services right now that it can be hard to choose which ones are worth paying for. When it comes to documentaries it's hard to look beyond Curiosity Stream, a ser… [+2885 chars]"
  },
{
   "source": {
  "id": null,
  "name": "CNET"
  },
  "author": "Zachary McAuliffe",
  "title": "Netflix Games: You Can Play the Emily in Paris Game Now and More Soon",
  "description": "After watching the series, give the game a try.",
  "url": "https://www.cnet.com/tech/gaming/netflix-games-you-can-play-the-emily-in-paris-game-now-and-more-soon/",
  "urlToImage": "https://www.cnet.com/a/img/resize/68535d803dfc6d253859d9e95002c2cf162a1d92/hub/2024/06/05/429cde70-8ddc-45d2-95ff-a2be381aaef0/emily-in-paris.png?auto=webp&fit=crop&height=675&width=1200",
  "publishedAt": "2024-08-16T13:43:06Z",
  "content": "Netflix, a CNET Editors' Choice award pick, is planning to add new games to its growing games library soon. And the incoming games include a couple that put you in the center of all the drama on a pa… [+5597 chars]"
  },
{
   "source": {
  "id": null,
  "name": "MacRumors"
  },
  "author": "Tim Hardwick",
  "title": "All Four New iPhone 16 Pro Colors Revealed in New Image",
  "description": "Leaker Sonny Dickson is back today with a new dummy unit image showing all four iPhone 16 Pro color variants, including the rose gold or \"bronze\" unit that replaces Blue Titanium in the existing iPhone 15 Pro models.\n\n\n\n\n\nThe ‌iPhone 16 Pro‌ models are expect…",
  "url": "https://www.macrumors.com/2024/08/16/iphone-16-pro-colors-revealed/",
  "urlToImage": "https://images.macrumors.com/t/a2140skqQ1W2Oy_NiPInMKotenY=/2500x/article-new/2024/01/iPhone-16-Pro-Right-Side-Feature.jpg",
  "publishedAt": "2024-08-16T11:14:36Z",
  "content": "Leaker Sonny Dickson is back today with a new dummy unit image showing all four iPhone 16 Pro color variants, including the rose gold or \"bronze\" unit that replaces Blue Titanium in the existing iPho… [+1274 chars]"
  },
{
   "source": {
  "id": null,
  "name": "MacRumors"
  },
  "author": "Tim Hardwick",
  "title": "Apple's AirPods Lineup to Get These Updates in 2024",
  "description": "Apple plans to upgrade its entire AirPods lineup this year in one form or another, with a combination of new model launches and upcoming software updates for existing devices. \n\n\n\n\n\nWhether you're holding out for the next generation of AirPods or AirPods Max,…",
  "url": "https://www.macrumors.com/2024/08/16/apple-airpods-lineup-updates-this-year/",
  "urlToImage": "https://images.macrumors.com/t/5VcTKHbQN9t5Op_onC9nCOm0X2s=/2500x/article-new/2024/07/airpods-max-pro-2-new-blue.jpg",
  "publishedAt": "2024-08-16T11:52:57Z",
  "content": "Apple plans to upgrade its entire AirPods lineup this year in one form or another, with a combination of new model launches and upcoming software updates for existing devices. \r\nWhether you're holdin… [+5759 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Slashdot.org"
  },
  "author": "msmash",
  "title": "Epic Games Store Debuts on Mobile, Fortnite Returns To iOS in EU",
  "description": "Epic Games launched its digital app store on iOS and Android devices on Friday, marking Fortnite's return to Apple's platform in the European Union after a four-year absence. The move follows the implementation of the EU's Digital Markets Act, which mandates …",
  "url": "https://games.slashdot.org/story/24/08/16/148230/epic-games-store-debuts-on-mobile-fortnite-returns-to-ios-in-eu",
  "urlToImage": "https://a.fsdn.com/sd/topics/eu_64.png",
  "publishedAt": "2024-08-16T14:08:00Z",
  "content": "Epic Games launched its digital app store on iOS and Android devices on Friday, marking Fortnite's return to Apple's platform in the European Union after a four-year absence. The move follows the imp… [+828 chars]"
  },
{
   "source": {
  "id": "business-insider",
  "name": "Business Insider"
  },
  "author": "Peter Kafka",
  "title": "Fortnite is coming back to the iPhone after a 4-year ban — but just in Europe. Apple will fight to keep it that way.",
  "description": "Fortnite is back on the iPhone, but only in Europe. Apple has made clear it will fight every other challenge to its App Store rules.",
  "url": "https://www.businessinsider.com/fortnite-iphone-epic-games-apple-app-store-europe-launch-regulation-2024-8",
  "urlToImage": "https://i.insider.com/66be7cb91aa2ac29ee31c19b?width=1200&format=jpeg",
  "publishedAt": "2024-08-16T11:00:01Z",
  "content": "The last time you could download Fortnite on an iPhone was four years ago. Now it's back — but only in Europe.CHRIS DELMAS/Getty Images\r\n<ul><li>Apple and Epic Games, the games company behind Fortnit… [+4121 chars]"
  },
{
   "source": {
  "id": "business-insider",
  "name": "Business Insider"
  },
  "author": "Caralynn Matassa",
  "title": "The 9 best things to watch this weekend, from the 'Mad Max: Fury Road' prequel to every 'Alien' movie",
  "description": "From the \"Mad Max: Fury Road\" prequel to every \"Alien\" movie, here's what to watch on popular streamers this weekend.",
  "url": "https://www.businessinsider.com/best-tv-shows-movies-streaming-netflix-max-hulu-august-16-24",
  "urlToImage": "https://i.insider.com/66ba795a955b01c3294de622?width=1200&format=jpeg",
  "publishedAt": "2024-08-16T20:38:10Z",
  "content": "Jasin Boland/Warner Bros, Tyler Le/BI\r\n<ul><li>Shows like \"Emily in Paris\" and \"Bel-Air\" returned for new seasons this week.</li><li>Two theatrical releases from this year are now streaming.</li><li>… [+4201 chars]"
  },
{
   "source": {
  "id": "business-insider",
  "name": "Business Insider"
  },
  "author": "Jacob Zinkula,Nora Naughton,Lloyd Lee",
  "title": "Your robot has arrived",
  "description": "You can now hail a self-driving taxi in San Francisco and restaurants are testing out robot servers. Rosie the Robot would be proud.",
  "url": "https://www.businessinsider.com/waymo-self-driving-taxis-chipotle-robots-future-of-service-2024-8",
  "urlToImage": "https://i.insider.com/66a90e9a1a227600e632ca38?width=1200&format=jpeg",
  "publishedAt": "2024-08-16T08:46:01Z",
  "content": "Waymo's fully autonomous Jaguar I-PACEBlue Planet Studio/Getty Images; Waymo; Derek French/BI\r\n<ul><li>In San Francisco, you can now hail a self-driving taxi just as easily as an Uber or Lyft.</li><l… [+9869 chars]"
  },
{
   "source": {
  "id": null,
  "name": "VentureBeat"
  },
  "author": "Dean Takahashi",
  "title": "Epic Games Store and Fortnite launch on mobile platforms after a monumental fight |The DeanBeat",
  "description": "The Epic Games Store debuted on iOS in the EU and on Android worldwide with Fortnite, Fall Guys and Rocket League Sideswipe included.",
  "url": "https://venturebeat.com/games/epic-games-store-and-fortnite-launch-on-mobile-platforms-after-a-monumental-fight-the-deanbeat/",
  "urlToImage": "https://venturebeat.com/wp-content/uploads/2024/08/EN-ESRB_EGS-Key-Art.jpg?w=1024?w=1200&strip=all",
  "publishedAt": "2024-08-16T11:00:00Z",
  "content": "GamesBeat Next is connecting the next generation of video game leaders. And you can join us, coming up October 28th and 29th in San Francisco! Take advantage of our buy one, get one free pass offer. … [+1315 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Hipertextual"
  },
  "author": "Gabriel Erard",
  "title": "‘Fortnite’ al fin está de regreso en el iPhone: así puedes instalarlo",
  "description": "Después de años de batallas legales y cambios regulatorios, Fortnite está de regreso en el iPhone. A partir de hoy, los usuarios del móvil de Apple pueden instalarlo de forma oficial tanto desde la Epic Games Store como a través de la AltStore PAL. Eso sí, es…",
  "url": "http://hipertextual.com/2024/08/fortnite-iphone-asi-puedes-instalarlo",
  "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2024/08/Fortnite1-scaled.jpg",
  "publishedAt": "2024-08-16T12:58:18Z",
  "content": "Después de años de batallas legales y cambios regulatorios, Fortnite está de regreso en el iPhone. A partir de hoy, los usuarios del móvil de Apple pueden instalarlo de forma oficial tanto desde la E… [+2387 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Hackaday"
  },
  "author": "Bryan Cockfield",
  "title": "Rebuilding The First Digital Personal Computer",
  "description": "When thinking of the first PCs, most of us might imagine something like the Apple I or the TRS-80. But even before that, there were a set of computers that often had no keyboard, or recognizable di…",
  "url": "https://hackaday.com/2024/08/16/rebuilding-the-first-digital-personal-computer/",
  "urlToImage": "https://hackaday.com/wp-content/uploads/2024/08/kenbak-main.png",
  "publishedAt": "2024-08-16T11:00:40Z",
  "content": "When thinking of the first PCs, most of us might imagine something like the Apple I or the TRS-80. But even before that, there were a set of computers that often had no keyboard, or recognizable disp… [+1407 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Fresno Bee"
  },
  "author": "Tim Sheehan",
  "title": "New permit for dog breeders, sellers to be required in Fresno. What are the penalties?",
  "description": "The new ordinance is part of an effort to crack down on Fresno’s overpopulation of stray pets.",
  "url": "https://www.fresnobee.com/news/local/article291132855.html",
  "urlToImage": "https://media.zenfs.com/en/fresno_bee_mcclatchy_articles_660/1aebed30874ef405c5d63e1c387938ba",
  "publishedAt": "2024-08-16T22:25:09Z",
  "content": "A proposed new law in Fresno would require people who breed and sell pets to get a breeding permit from the city, with an annual limit on litters and fines up to $1,000 for violations.\r\nFresno City C… [+4882 chars]"
  },
{
   "source": {
  "id": "polygon",
  "name": "Polygon"
  },
  "author": "Toussaint Egan, Petrana Radulovic",
  "title": "Twisters, Netflix’s The Union, and every movie new to streaming this week",
  "description": "Each week on Polygon, we round up the most notable new releases to streaming and VOD, highlighting the biggest and best new movies for you to watch at home. This week, Twisters, the standalone sequel to 1996’s Twister starring Daisy Edgar-Jones (Normal People…",
  "url": "https://www.polygon.com/movies/440083/twisters-netflixs-the-union-and-every-movie-new-to-streaming-this-week",
  "urlToImage": "https://platform.polygon.com/wp-content/uploads/sites/2/2024/08/twisters-anatomy1-ghzp-superJumbo.jpg?quality=90&strip=all&crop=0%2C3.5016778447301%2C100%2C92.99664431054&w=1200",
  "publishedAt": "2024-08-16T19:42:21Z",
  "content": "Each week on Polygon, we round up the most notable new releases to streaming and VOD, highlighting the biggest and best new movies for you to watch at home.\n\nThis week, Twisters, the standalone seque… [+10829 chars]"
  },
{
   "source": {
  "id": "polygon",
  "name": "Polygon"
  },
  "author": "Matthew Reynolds",
  "title": "How to get the Katalina ‘Mobile App Bonus Goals’ skin on Fortnite iOS and Android",
  "description": "The Katalina skin is a reward for those playing Fortnite natively on iOS and Android. Available through the “Mobile App Bonus Goals” series of quests, these are available for the duration of Chapter 5 Season 4 (which features a variety of Marvel-themed map an…",
  "url": "https://www.polygon.com/fortnite-guide/441148/mobile-app-bonus-goals-ios-android-katakina",
  "urlToImage": "https://platform.polygon.com/wp-content/uploads/sites/2/2024/08/fortnite-katalina.jpg?quality=90&strip=all&crop=0,3.4467713787086,100,93.106457242583",
  "publishedAt": "2024-08-16T16:51:15Z",
  "content": "The Katalina skin is a reward for those playing Fortnite natively on iOS and Android.\n\nAvailable through the “Mobile App Bonus Goals” series of quests, these are available for the duration of Chapter… [+3539 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Slate Magazine"
  },
  "author": "Emily Peck",
  "title": "Elon Musk’s Bully Pulpit",
  "description": "The problem with telling advertisers to “go f*** themselves” is they might listen.",
  "url": "https://slate.com/podcasts/what-next-tbd/2024/08/elon-musk-has-turned-twitter-into-a-right-wing-anger-hub",
  "urlToImage": "https://compote.slate.com/images/17c7216b-f932-464c-9a19-b0dd2128b74c.jpeg?crop=4500%2C3000%2Cx0%2Cy0&width=1560",
  "publishedAt": "2024-08-16T09:00:00Z",
  "content": "Since Elon Musk took over Twitter - now X - in 2022, hes increasingly used it to push his conservative views. A suit against a non-profit brand safety group of advertisers and an exclusive interview … [+601 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Slate Magazine"
  },
  "author": "Jenée Desmond-Harris",
  "title": "My Husband and I Divorced Amicably. Nine Months Later, He Wants Me Back. Help!",
  "description": "Jenée Desmond-Harris is joined by Rod and Karen Morrow, co-hosts of the pop-culture and politics podcast The Black Guy Who Tips.",
  "url": "https://slate.com/podcasts/dear-prudence/2024/08/how-to-navigate-divorce-advice-from-dear-prudence",
  "urlToImage": "https://compote.slate.com/images/65103985-d02e-42c4-a262-9968492d59af.jpeg?crop=1262%2C842%2Cx0%2Cy2&width=1560",
  "publishedAt": "2024-08-16T09:00:00Z",
  "content": "In this episode, Rod and Karen Morrow (co-hosts of the podcast The Black Guy Who Tips) join Prudie (Jenée Desmond-Harris) to answer letters from readers about what to do when your fiance asks you to … [+704 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Slate Magazine"
  },
  "author": "Jason Johnson",
  "title": "Countering JD Vance’s “Disgraceful, Deplorable” Jab at Black Farmers",
  "description": "The Biden administration greenlit $2 billion in relief for Black farmers who faced decades of discrimination. JD Vance called that bias.",
  "url": "https://slate.com/podcasts/a-word/2024/08/black-farmers-push-back-on-vance-claim",
  "urlToImage": "https://compote.slate.com/images/744a6cd6-aa0a-467f-b76e-e989b18b4bed.jpeg?crop=1560%2C1040%2Cx0%2Cy0&width=1560",
  "publishedAt": "2024-08-16T09:00:00Z",
  "content": "In a recent CBS News interview, Republican vice presidential nominee JD Vance charged that the Biden administration was favoring Black farmers over white farmers in federal policy. That came days aft… [+892 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Xataka.com"
  },
  "author": "Javier Marquez",
  "title": "Steve Jobs cambiaba su Mercedes-Benz SL55 AMG de 120.000 dólares cada seis meses. Y todo se debía a la matrícula",
  "description": "Cuando Steve Jobs era CEO de Apple solía conducir desde su casa en Palo Alto hasta la sede de la compañía en Cupertino. Se trataba de un viaje de unos 20 minutos que realizaba varias veces a la semana con su Mercedes-Benz SL55 AMG. Este coche, de aproximadame…",
  "url": "https://www.xataka.com/movilidad/steve-jobs-cambiaba-su-mercedes-benz-sl55-amg-120-000-dolares-cada-seis-meses-todo-se-debia-a-matricula",
  "urlToImage": "https://i.blogs.es/5b977c/steve-jobs-coche-portada/840_560.jpeg",
  "publishedAt": "2024-08-16T23:26:34Z",
  "content": "Cuando Steve Jobs era CEO de Apple solía conducir desde su casa en Palo Alto hasta la sede de la compañía en Cupertino. Se trataba de un viaje de unos 20 minutos que realizaba varias veces a la seman… [+2642 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Xataka.com"
  },
  "author": "Jose García",
  "title": "Epic quiere plantarle cara a la App Store a toda costa. Su siguiente paso: invertir en AltStore (que pasa a ser gratis)",
  "description": "Epic Games sigue combatiendo contra Apple, Google y las comisiones que cobran en App Store y Google Play, respectivamente. La compañía de Tim Sweeney busca una revolución en el mundo de las tiendas de terceros, particularmente en el ecosistema de Apple, y su …",
  "url": "https://www.xataka.com/aplicaciones/epic-quiere-plantarle-cara-a-app-store-a-toda-costa-su-siguiente-paso-invertir-altstore-que-ahora-gratis",
  "urlToImage": "https://i.blogs.es/465d7c/alstore/840_560.jpeg",
  "publishedAt": "2024-08-16T13:31:49Z",
  "content": "Epic Games sigue combatiendo contra Apple, Google y las comisiones que cobran en App Store y Google Play, respectivamente. La compañía de Tim Sweeney busca una revolución en el mundo de las tiendas d… [+3230 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Xataka.com"
  },
  "author": "Ricardo Aguilar",
  "title": "Hay una forma de saber si tu móvil puede usar IA con soltura. La potencia importa, pero no lo es todo",
  "description": "Si no tiene IA no compite por el mejor teléfono del mercado. Nadie ha escrito esa regla, pero los fabricantes la están aplicando a rajatabla. El nuevo Google Pixel 9, los Samsung Galaxy S24, los próximos iPhone con Apple Intelligence e incluso dispositivos má…",
  "url": "https://www.xataka.com/aplicaciones/hay-forma-saber-tu-movil-puede-usar-ia-soltura-potencia-importa-no-todo",
  "urlToImage": "https://i.blogs.es/e8f39f/img_8866/840_560.jpeg",
  "publishedAt": "2024-08-16T12:01:47Z",
  "content": "Si no tiene IA no compite por el mejor teléfono del mercado. Nadie ha escrito esa regla, pero los fabricantes la están aplicando a rajatabla. El nuevo Google Pixel 9, los Samsung Galaxy S24, los próx… [+3366 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Xataka.com"
  },
  "author": "Javier Lacort",
  "title": "La posibilidad de que Estados Unidos obligue a Google a trocearse es muy real. Tendría implicaciones para todo el ecosistema",
  "description": "El Departamento de Justicia de Estados Unidos, equivalente a nuestro Ministerio de Justicia, está valorando formas de frenar el dominio de Google en el mercado de las búsquedas online. Y una posibilidad que está cogiendo fuerza en los últimos días es la de di…",
  "url": "https://www.xataka.com/empresas-y-economia/posibilidad-que-estados-unidos-obligue-a-google-a-trocearse-muy-real-tendria-implicaciones-para-todo-ecosistema",
  "urlToImage": "https://i.blogs.es/57c5c4/google/840_560.jpeg",
  "publishedAt": "2024-08-16T07:14:57Z",
  "content": "El Departamento de Justicia de Estados Unidos, equivalente a nuestro Ministerio de Justicia, está valorando formas de frenar el dominio de Google en el mercado de las búsquedas online. Y una posibili… [+1898 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Xataka.com"
  },
  "author": "Jose García",
  "title": "La Epic Games Store llega oficialmente a iOS y Android con una sorpresa bajo el brazo. Y sí, 'Fortnite' vuelve a los iPhone",
  "description": "Era solo cuestión de tiempo que esto sucediera y al fin lo ha hecho. Epic Games, la compañía detrás de 'Fortnite' y el germen de todos los grandes cambios que Apple, la App Store y iOS han experimentado en los últimos meses, acaba de lanzar su propia tienda d…",
  "url": "https://www.xataka.com/aplicaciones/epic-games-store-llega-oficialmente-a-ios-android-sorpresa-brazo-fortnite-vuelve-a-iphone",
  "urlToImage": "https://i.blogs.es/87760f/epic/840_560.jpeg",
  "publishedAt": "2024-08-16T11:32:11Z",
  "content": "Era solo cuestión de tiempo que esto sucediera y al fin lo ha hecho. Epic Games, la compañía detrás de 'Fortnite' y el germen de todos los grandes cambios que Apple, la App Store y iOS han experiment… [+2637 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Xataka.com"
  },
  "author": "Ricardo Aguilar",
  "title": "Epic Games Store: qué es y cómo instalar en Android y iPhone",
  "description": "Epic Games acaba de presentar su propia tienda para iOS y Android. Se trata de una Store independiente a App Store y Google Play Store, desde la que podremos descargar los juegos de Epic evitando las comisiones de Apple y Google.\n<!-- BREAK 1 -->\nVamos a ense…",
  "url": "https://www.xataka.com/basics/epic-games-store-que-como-instalar-android-iphone",
  "urlToImage": "https://i.blogs.es/48353d/basics/840_560.jpeg",
  "publishedAt": "2024-08-16T12:13:06Z",
  "content": "Epic Games acaba de presentar su propia tienda para iOS y Android. Se trata de una Store independiente a App Store y Google Play Store, desde la que podremos descargar los juegos de Epic evitando las… [+3989 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Xataka.com"
  },
  "author": "Juan Carlos López",
  "title": "TSMC está a punto de vivir tiempos aún mejores. Ha encontrado la forma de resolver su fatídico cuello de botella",
  "description": "TSMC no da abasto. Bendito problema. A este fabricante de circuitos integrados taiwanés ya le iba bien antes del auge de los chips para inteligencia artificial (IA), pero durante los últimos años se ha visto desbordado por la avalancha de pedidos de sus clien…",
  "url": "https://www.xataka.com/empresas-y-economia/tsmc-esta-a-punto-vivir-tiempos-mejores-ha-encontrado-forma-resolver-su-fatidico-cuello-botella",
  "urlToImage": "https://i.blogs.es/d8a45d/tsmc-ap/840_560.jpeg",
  "publishedAt": "2024-08-16T16:01:47Z",
  "content": "TSMC no da abasto. Bendito problema. A este fabricante de circuitos integrados taiwanés ya le iba bien antes del auge de los chips para inteligencia artificial (IA), pero durante los últimos años se … [+3488 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Artofmanliness.com"
  },
  "author": "Brett & Kate McKay",
  "title": "Odds & Ends: August 16, 2024",
  "description": "Seiko SRPG33 Field Watch. About four years ago, I embraced the Apple Watch. But lately, I’ve decided to go back to plain old analog watches. Why? For one thing, smartwatches don’t look very good, in my opinion. For another, they’re distracting. I’m a big prop…",
  "url": "https://www.artofmanliness.com/odds-ends/odds-ends-august-16-2024/",
  "urlToImage": "https://content.artofmanliness.com/uploads/2023/01/Odds-and-Ends-no-logo-header-1-1.jpg",
  "publishedAt": "2024-08-16T17:33:26Z",
  "content": "Seiko SRPG33 Field Watch.About four years ago, I embraced the Apple Watch. But lately, I’ve decided to go back to plain old analog watches. Why? For one thing, smartwatches don’t look very good, in m… [+4073 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Digital Trends"
  },
  "author": "Aaron Mamiit",
  "title": "The 16-inch MacBook Pro with M3 Pro is $500 off today",
  "description": "The 16-inch Apple MacBook Pro with the M3 Pro processor and a 512GB SSD is on sale from B&H Photo Video with a $500 discount, bringing its price down to $2,399.",
  "url": "https://www.digitaltrends.com/computing/apple-macbook-pro-16-m3-pro-deal-b-h-photo-video-august-2024/",
  "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/01/apple-macbook-pro-16-m3-max-angled-e1704401729745.jpg?resize=1200%2C630&p=1",
  "publishedAt": "2024-08-16T23:45:23Z",
  "content": "Mark Coppock / Digital Trends\r\nThere’s always high demand for MacBook deals because Apple’s laptops are pretty expensive, but they rarely go on sale. That’s why we think there’s going to be a lot of … [+1908 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Digital Trends"
  },
  "author": "Bryan M. Wolfe",
  "title": "The iPhone 16 Pro may get a never-before-seen color. Here’s what it looks like",
  "description": "We expect the iPhone 16 Pro to come in four colors. One of them may have a familiar name, but it could look different from any previous models.",
  "url": "https://www.digitaltrends.com/mobile/iphone-16-pro-may-get-a-never-before-seen-color-photo/",
  "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2022/10/iphone-14-pro-max-review-4.jpg?resize=1200%2C630&p=1",
  "publishedAt": "2024-08-16T14:19:52Z",
  "content": "Apple usually saves its brightest colors for its standard iPhone models and offers more subtle color options for its iPhone Pro series. This trend is expected to continue with the upcoming iPhone 16 … [+1989 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Digital Trends"
  },
  "author": "Christine Romero-Chan",
  "title": "Google Pixel 9 Pro vs. iPhone 15 Pro: Which should you buy?",
  "description": "Are you wondering if you should pick up an iPhone 15 Pro or the new Google Pixel 9 Pro? Here's a full breakdown of these two phones for pros.",
  "url": "https://www.digitaltrends.com/mobile/google-pixel-9-pro-vs-apple-iphone-15-pro/",
  "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/08/google-pixel-9-pro-vs-iphone-15-pro.jpg?resize=1200%2C630&p=1",
  "publishedAt": "2024-08-16T20:00:02Z",
  "content": "Google has just unveiled the next generation of Pixel devices with the Pixel 9 series. This lineup now has four phones, similar to Apple’s own iPhone lin. They are the Google Pixel 9, Pixel 9 Pro, Pi… [+13666 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Digital Trends"
  },
  "author": "Jason Struss",
  "title": "What’s new on Tubi in September 2024",
  "description": "What's new on Tubi in September? True Lies, Ma, Assassin's Creed, Mortal Kombat, Never Been Kissed, Independence Day, Fear, Total Recall, and more.",
  "url": "https://www.digitaltrends.com/movies/what-is-new-on-tubi-september-2024/",
  "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2020/12/best-action-movies-amazon-prime-december-2020-true-lies.jpg?resize=1200%2C630&p=1",
  "publishedAt": "2024-08-16T19:38:28Z",
  "content": "20th Century Fox\r\nTubi is standing out from the rest of the competition. How so? Well, The New York Times just ran an article about how the streamer is grabbing more viewers than more high-profile an… [+3967 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Digital Trends"
  },
  "author": "Stephen Edelstein",
  "title": "Lamborghini’s Temerario combines high-octane and high-voltage thrills",
  "description": "The Lamborghini Temerario replaces the Huracán as the automaker's entry-level supercar, and adopts a plug-in hybrid powertrain like the flagship Revuelto.",
  "url": "https://www.digitaltrends.com/cars/lamborghini-temerario-supercar-huracan-replacement-preview/",
  "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/08/634_Embargo_16_august_7_PM_CEST-5.jpeg?resize=1200%2C630&p=1",
  "publishedAt": "2024-08-16T17:00:02Z",
  "content": "The unveiling of a new Lamborghini is always an event, partly because genuinely new Lambos (derivative special editions) appear at the same frequency as comets and partly because the Italian automake… [+8646 chars]"
  },
{
   "source": {
  "id": null,
  "name": "The Atlantic"
  },
  "author": "Damon Beres",
  "title": "Four Theories That Explain AI Art’s Default Vibe",
  "description": "The image-makers are stuck in a pattern.",
  "url": "https://www.theatlantic.com/newsletters/archive/2024/08/four-theories-that-explain-ai-arts-default-vibe/679498/?utm_source=feed",
  "urlToImage": null,
  "publishedAt": "2024-08-16T22:05:00Z",
  "content": "This is Atlantic Intelligence, a newsletter in which our writers help you wrap your mind around artificial intelligence and a new machine age. Sign up here.At this point, AI art is about as remarkabl… [+3334 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Userlandia.com"
  },
  "author": "Dan Vincent",
  "title": "The Apple IIGS Megahertz Myth – Userlandia",
  "description": "I love the Apple IIGS. It’s a great computer, but could it have been greater? The legend goes that Apple purposefully underclocked its CPU during development to avoid competing with the Macintosh. But is this actually true? Join me for a deep dive into the II…",
  "url": "https://www.userlandia.com/home/iigs-mhz-myth",
  "urlToImage": "http://static1.squarespace.com/static/612e13d117c72143ef0cf3a5/612e15c57ff45220eaaabfbb/66af734f559f5a6e8fe84bf6/1722868232973/IIGS-MHz_thumbnail.jpg?format=1500w",
  "publishedAt": "2024-08-16T17:08:10Z",
  "content": "I love the Apple IIGS. Its the fabulous home computer youd have to be crazy to hate. One look at its spec sheet will tell you why. The Ensoniq synthesizer chip brings 32 voices of polyphonic power to… [+47329 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Tbsnews.net"
  },
  "author": null,
  "title": "The world will lose $4.7T of revenue in the next decade to tax havens",
  "description": "The combined annual tax loss of $387 million represents 1.5% of Bangladesh's tax revenue, which is higher than the regional average",
  "url": "https://www.tbsnews.net/features/panorama/world-will-lose-47-trillion-revenue-next-decade-tax-havens-how-did-we-get-here",
  "urlToImage": "https://www.tbsnews.net/sites/default/files/styles/social_share/public/images/2023/08/13/dsadasda.png",
  "publishedAt": "2024-08-16T15:56:14Z",
  "content": "Countries around the world are about to lose, collectively, an estimated $4.7 trillion in revenue over the next decade unless reforms are made to global tax rules, according to a recent report releas… [+10529 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Texas Monthly"
  },
  "author": "Robyn Ross",
  "title": "A Texas \"Moth Man\" Photographed 550 Species in His Own Yard",
  "description": "Small, obscure moths are Curtis Eckerman’s favorites: “I love seeing the little jewels that you can’t normally see.”",
  "url": "https://www.texasmonthly.com/travel/curtis-eckerman-photographer-moth-man/",
  "urlToImage": "https://img.texasmonthly.com/2024/08/curtis-eckerman-texas-moths-photos-2.jpg?auto=compress&crop=faces&fit=fit&fm=pjpg&ixlib=php-3.3.1&q=45",
  "publishedAt": "2024-08-16T15:04:06Z",
  "content": "On a steamy June evening, Curtis Eckerman embarks on a mothing expedition in the Bauerle Ranch greenbelt, in far South Austin. Towing a wagon full of supplies, he follows a narrow trail that leads be… [+9469 chars]"
  },
{
   "source": {
  "id": null,
  "name": "The New Yorker"
  },
  "author": "Joshua Rothman",
  "title": "A New Theory of Distraction (2015)",
  "description": "Joshua Rothman on Matthew Crawford’s new book, “The World Beyond Your Head: Becoming an Individual in an Age of Distraction.”",
  "url": "https://www.newyorker.com/culture/cultural-comment/a-new-theory-of-distraction",
  "urlToImage": "https://media.newyorker.com/photos/59096e4c6552fa0be6830143/16:9/w_1280,c_limit/Rothman-Distraction.jpg",
  "publishedAt": "2024-08-16T18:40:34Z",
  "content": "Illustration by Daniel Zender\r\nAt painful times, when composition is impossible and reading is not enough, grammars and dictionaries are excellent for distraction, the poet Elizabeth Barrett Browning… [+13115 chars]"
  },
{
   "source": {
  "id": null,
  "name": "heise online"
  },
  "author": "Daniel Herbig",
  "title": "Richter im Fall Epic gegen Google: \"Werden die Barrieren niederreißen\"",
  "description": "Im Rechtsstreit zwischen Epic und Google steht das Urteil an. Der Richter stellt schon mal in Aussicht: Die Play-Store-Barrieren werden fallen.",
  "url": "https://www.heise.de/news/Richter-im-Fall-Epic-gegen-Google-Werden-die-Barrieren-niederreissen-9837662.html",
  "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/5/3/0/7/3/shutterstock_1806509395-038245570017521a.jpg",
  "publishedAt": "2024-08-16T11:38:00Z",
  "content": "Der im Rechtsstreit zwischen Google und Epic Games zuständige Richter James Donato hat ein Ende der Play-Store-Barrieren unter Android in Aussicht gestellt. \"Wir werden die Barrieren auf jeden Fall n… [+1718 chars]"
  },
{
   "source": {
  "id": null,
  "name": "9to5Mac"
  },
  "author": "Chance Miller",
  "title": "Redesigned M4 Mac mini, iPhone NFC access, Apple home robots",
  "description": "Benjamin and Chance get excited about the news of an enticing Mac mini redesign coming this fall, talk about the changes in the latest iOS 18 betas, and question the appeal of the rumored $1000 table-top HomePod device. Plus, Apple tries to appease regulators…",
  "url": "https://9to5mac.com/2024/08/15/happy-hour-499/",
  "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/9to5mac-happy-hour-lead1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
  "publishedAt": "2024-08-16T00:38:12Z",
  "content": "Benjamin and Chance get excited about the news of an enticing Mac mini redesign coming this fall, talk about the changes in the latest iOS 18 betas, and question the appeal of the rumored $1000 table… [+841 chars]"
  },
{
   "source": {
  "id": null,
  "name": "9to5Mac"
  },
  "author": "Ryan Christoffel",
  "title": "Dark Matter scores season two renewal on Apple TV+",
  "description": "One of 2024’s most popular Apple TV+ series, Dark Matter, has scored a season two renewal. The sci-fi thriller is bringing back showrunner and author Blake Crouch, plus stars Joel Edgerton and Jennifer Connelly, to continue exploring the mysteries of the mult…",
  "url": "https://9to5mac.com/2024/08/16/dark-matter-scores-season-two-renewal-on-apple-tv/",
  "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/08/dark-matter-apple-tv-plus.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
  "publishedAt": "2024-08-16T17:51:28Z",
  "content": "One of 2024s most popular Apple TV+ series, Dark Matter, has scored a season two renewal. The sci-fi thriller is bringing back showrunner and author Blake Crouch, plus stars Joel Edgerton and Jennife… [+2201 chars]"
  },
{
   "source": {
  "id": null,
  "name": "9to5Mac"
  },
  "author": "Ryan Christoffel",
  "title": "Apple Watch Series 10: Here’s what’s coming next month",
  "description": "Next month, the Apple Watch Series 10 will debut alongside the iPhone 16. When it does, it will bring a variety of upgrades to the Watch line. Larger displays, a more powerful chip, and other enhancements will push the Watch forward. Here’s everything that’s …",
  "url": "https://9to5mac.com/2024/08/16/apple-watch-series-10-heres-whats-coming-next-month/",
  "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/07/Apple-Watch-design.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
  "publishedAt": "2024-08-16T20:31:15Z",
  "content": "Next month, the Apple Watch Series 10 will debut alongside the iPhone 16. When it does, it will bring a variety of upgrades to the Watch line. Larger displays, a more powerful chip, and other enhance… [+3940 chars]"
  },
{
   "source": {
  "id": null,
  "name": "9to5Mac"
  },
  "author": "Ryan Christoffel",
  "title": "What will it take for Apple TV+ to finally be a hit?",
  "description": "Apple TV+ launched in 2019, yet in those five years it’s barely moved the needle in becoming a major streaming player. TV+ has hit series like Ted Lasso, Severance, and Silo. It has critically successful movies like CODA and Killers of the Flower Moon. But fo…",
  "url": "https://9to5mac.com/2024/08/16/what-will-it-take-for-apple-tv-to-finally-be-a-hit/",
  "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/05/apple-tv-generic.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
  "publishedAt": "2024-08-16T16:09:42Z",
  "content": "Apple TV+ launched in 2019, yet in those five years its barely moved the needle in becoming a major streaming player. TV+ has hit series like Ted Lasso, Severance, and Silo. It has critically success… [+5053 chars]"
  },
{
   "source": {
  "id": null,
  "name": "9to5Mac"
  },
  "author": "Fernando Silva",
  "title": "How to leverage credit card points for a free iPad Air",
  "description": "When people think of credit cards and their miles and points, they think of travel. But what most people don’t know is that these points are their own form of currency. You can use credit card points for gift cards, offset purchases, link to your Amazon, and …",
  "url": "https://9to5mac.com/2024/08/16/how-to-leverage-credit-card-points-for-a-free-ipad-air/",
  "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/08/fernando.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
  "publishedAt": "2024-08-16T16:30:00Z",
  "content": "When people think of credit cards and their miles and points, they think of travel. But what most people don’t know is that these points are their own form of currency. You can use credit card points… [+4570 chars]"
  },
{
   "source": {
  "id": null,
  "name": "9to5Mac"
  },
  "author": "Filipe Espósito",
  "title": "Apple no longer signing iOS 17.6, blocking downgrade from iOS 17.6.1",
  "description": "Following the release of iOS 17.6.1 for and iPad users last week, Apple has now stopped signing iOS 17.6. iPhone and iPad users who are already running a newer version of iOS can no longer downgrade to this version of the operating system.\n\n\n\n more…",
  "url": "https://9to5mac.com/2024/08/15/apple-no-longer-signing-ios-17-6-downgrade/",
  "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/05/iOS-17.6-hero.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
  "publishedAt": "2024-08-16T00:58:00Z",
  "content": "Following the release of iOS 17.6.1 for iPhone and iPad users last week, Apple has now stopped signing iOS 17.6. iPhone and iPad users who are already running a newer version of iOS can no longer dow… [+1200 chars]"
  },
{
   "source": {
  "id": null,
  "name": "9to5Mac"
  },
  "author": "Ben Lovejoy",
  "title": "Apple shows how you could try out a new iPhone inside Vision Pro",
  "description": "If you want to try out a new iPhone, you might not have to leave your home in future. Apple has applied for a patent which illustrates a virtual try-out of a new phone from within a Vision Pro environment. The company describes its use for iPads and Macs too.…",
  "url": "https://9to5mac.com/2024/08/16/try-out-a-new-iphone-inside-vision-pro/",
  "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/08/Apple-shows-how-you-could-try-out-a-new-iPhone-inside-Vision-Pro.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
  "publishedAt": "2024-08-16T11:03:23Z",
  "content": "If you want to try out a new iPhone, you might not have to leave your home in future. Apple has applied for a patent which illustrates a virtual try-out of a new phone from within a Vision Pro enviro… [+3643 chars]"
  },
{
   "source": {
  "id": null,
  "name": "9to5Mac"
  },
  "author": "Justin Kahn",
  "title": "Deals: M2 iPad Air Magic Keyboard $170 off, 1TB MacBook Pro up to $450 off, Bose AirPlay Smart Soundbar, and more",
  "description": "Your Friday 9to5Toys Lunch Break is now ready to go with deals on Apple’s Magic Keyboard for your new M2 iPad Air, the 1TB MacBook Pro, headphones, AirPlay sound bars, and more. You can now score Apple’s Magic Keyboard for the new M2 iPad Air starting from $1…",
  "url": "https://9to5mac.com/2024/08/16/deals-m2-ipad-air-magic-keyboard-macbook-pro/",
  "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/08/Apple-deals-Bose-MacBook-Beats.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
  "publishedAt": "2024-08-16T15:47:56Z",
  "content": "Your Friday 9to5Toys Lunch Break is now ready to go with deals on Apple’s Magic Keyboard for your new M2 iPad Air, the 1TB MacBook Pro, headphones, AirPlay sound bars, and more. You can now score App… [+9373 chars]"
  },
{
   "source": {
  "id": null,
  "name": "9to5Mac"
  },
  "author": "Ryan Christoffel",
  "title": "iPadOS 18’s new tab bar is more powerful than it first appears",
  "description": "iPadOS 18 is a huge release for the iPad, but most of its changes aren’t iPad-exclusive. New customization tools, Apple Intelligence, and various app updates are coming to iPhone too. \n\n\n\nOne iPad-only feature is a redesigned tab bar for apps. iPad apps have …",
  "url": "https://9to5mac.com/2024/08/16/ipados-18s-new-tab-bar-for-apps-is-more-powerful-than-it-first-appears/",
  "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/06/ipados18-tab-bar.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
  "publishedAt": "2024-08-16T14:50:05Z",
  "content": "iPadOS 18 is a huge release for the iPad, but most of its changes arent iPad-exclusive. New customization tools, Apple Intelligence, and various app updates are coming to iPhone too. \r\nOne iPad-only … [+2135 chars]"
  },
{
   "source": {
  "id": null,
  "name": "9to5Mac"
  },
  "author": "Benjamin Mayo",
  "title": "Fortnite and Epic Games Store now available on iPhone in the EU",
  "description": "The Epic Games Store is now available for iPhone users in the European Union, after Apple was forced to allow third-party app marketplaces as part of compliance with the EU’s Digital Markets Act.\n\n\n\nMost notably, this means Fortnite is now once again availabl…",
  "url": "https://9to5mac.com/2024/08/16/fortnite-and-epic-games-store-iphone-eu/",
  "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/08/apple-epic-games-store-ios.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
  "publishedAt": "2024-08-16T11:01:27Z",
  "content": "The Epic Games Store is now available for iPhone users in the European Union, after Apple was forced to allow third-party app marketplaces as part of compliance with the EU’s Digital Markets Act.\r\nMo… [+1840 chars]"
  },
{
   "source": {
  "id": null,
  "name": "9to5Mac"
  },
  "author": "Chance Miller",
  "title": "New image reveals iPhone 16 Pro in new ‘bronze’ color",
  "description": "While an image last month offered a clear look at three iPhone 16 Pro colors, it omitted the most exciting changes of all: a new “bronze” or “rose” colored option. Now, a new image posted to social media by Sonny Dickson toady shows off iPhone 16 Pro dummy un…",
  "url": "https://9to5mac.com/2024/08/16/new-image-reveals-iphone-16-pro-in-new-bronze-color/",
  "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/08/iPhone-16-production-now-in-full-flow.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
  "publishedAt": "2024-08-16T11:58:29Z",
  "content": "While an image last month offered a clear look at three iPhone 16 Pro colors, it omitted the most exciting changes of all: a new bronze or rose colored option. Now, a new image posted to social media… [+1587 chars]"
  },
{
   "source": {
  "id": null,
  "name": "9to5Mac"
  },
  "author": "Michael Potuck",
  "title": "Verizon opens smartphone protection enrollment with $0 deductible for screen repairs",
  "description": "If you missed the window to add protection for your iPhone or other smartphone, Verizon is offering customers a second chance through October 13. Verizon Mobile Protect features unlimited claims, a $0 deductible for screen and back glass repair, same-day repl…",
  "url": "https://9to5mac.com/2024/08/16/verizon-opens-smartphone-protection-enrollment-with-0-deductible/",
  "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/12/Apple-Self-Service-Repair.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
  "publishedAt": "2024-08-16T16:05:00Z",
  "content": "If you missed the window to add protection for your iPhone or other smartphone, Verizon is offering customers a second chance through October 13. Verizon Mobile Protect features unlimited claims, a $… [+1375 chars]"
  },
{
   "source": {
  "id": null,
  "name": "9to5Mac"
  },
  "author": "Bradley Chambers",
  "title": "HomeKit Weekly: Looking to start a smart home on a budget? The TP-Link 4 pack is an easy place to start",
  "description": "If you’re starting from zero on a smart home, it can look daunting and expensive as you consider upgrading all of the rooms in your house. I’ve found that starting with a few smart outlet adaptors is the best (and most economical way) to start, as you can upg…",
  "url": "https://9to5mac.com/2024/08/16/tp-link-tapo-p125/",
  "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/07/TP-Link-Tapo-P125-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
  "publishedAt": "2024-08-16T18:00:00Z",
  "content": "If you’re starting from zero on a smart home, it can look daunting and expensive as you consider upgrading all of the rooms in your house. I’ve found that starting with a few smart outlet adaptors is… [+2739 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Android Police"
  },
  "author": "Taylor Kerns",
  "title": "Google's got an XL-size hole in its Pixel 9 lineup",
  "description": "If you want a big Google phone, you'll have to go Pro",
  "url": "https://www.androidpolice.com/why-no-google-pixel-9-xl/",
  "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/08/google-pixel-9-family-in-pink-1.jpeg",
  "publishedAt": "2024-08-16T11:30:12Z",
  "content": "Google's heard the cries of the vocal minority calling for high-end small phones, and this year, the Pixel 9 Pro comes in two sizes: a 6.3\" version and a 6.8\" 9 Pro XL. It's been years since Google o… [+5167 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Android Police"
  },
  "author": "Daniel Bader",
  "title": "Pixel Screenshots may be Google's clearest way to prove AI is useful",
  "description": "Pixel Screenshots may be Google's clearest way to prove AI is useful",
  "url": "https://www.androidpolice.com/pixel-screenshots-ai-impressions/",
  "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/wm/2024/08/pixel-screenshots-app-169.jpg",
  "publishedAt": "2024-08-16T12:15:12Z",
  "content": "It’s easy to be overwhelmed by the sheer scope of announcements in the AI landscape and profoundly challenging to differentiate the practical from the noise. \r\n While most of the attention has been g… [+6294 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Android Police"
  },
  "author": "Zach Gray-Traverso",
  "title": "Xfinity: How to change your Wi-Fi password",
  "description": "Easily change your password when needed",
  "url": "https://www.androidpolice.com/change-xfinity-wifi-password-tutorial/",
  "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/08/xfinity-gateway-white.jpg",
  "publishedAt": "2024-08-16T07:05:12Z",
  "content": "Wi-Fi is essential for everything from watching your favorite show to writing an email. You need a provider and a router or modem to access the internet. One common provider in the US is Xfinity from… [+4512 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Autoblog"
  },
  "author": "Zac Palmer",
  "title": "2025 Lincoln Navigator revealed with dramatic look, massive screen in Monterey",
  "description": "Filed under:\n Lincoln,SUV,Luxury\n Continue reading 2025 Lincoln Navigator revealed with dramatic look, massive screen in Monterey\n2025 Lincoln Navigator revealed with dramatic look, massive screen in Monterey originally appeared on Autoblog on Thu, 15 Aug 202…",
  "url": "https://www.autoblog.com/2024/08/15/2025-lincoln-navigator-revealed-monterey/",
  "urlToImage": "https://edgecast-img.yahoo.net/mysterio/api/7947FDAE9404E1013E09C55375F14DBC9D70642E0B4C70D08A1DC579B6CB0E02/autoblog/resizefill_w1200_h675;quality_85;format_webp;cc_31536000;/https://s.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1200x675/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2024/08/15100618/2025-Lincoln-Navigator-Black-Label_Sunrise-Copper_011.jpg",
  "publishedAt": "2024-08-16T01:00:00Z",
  "content": "Say a big hello to the 2025 Lincoln Navigator, now more grand-looking and chock full of tech than ever before. This marks the fifth generation of Lincolns three-row luxury SUV, and while its bones ar… [+5056 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Thekitchn.com"
  },
  "author": "Kayla Hoang",
  "title": "My No-Bake Caramel Apple Icebox Cake Will Make You So Excited for Fall",
  "description": "It tastes like fall in every bite.\nREAD MORE...",
  "url": "https://www.thekitchn.com/caramel-apple-icebox-cake-recipe-23674441",
  "urlToImage": "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FRecipes%2F2024-08-caramel-apple-icebox-cake%2Fcaramel-apple-icebox-cake-199",
  "publishedAt": "2024-08-16T15:00:00Z",
  "content": "Juice 1/2 medium lemon until you have 2 teaspoons. Place the lemon juice, cream cheese, 2/3 cup granulated sugar, 1/3 cup packed light brown sugar, 2 teaspoons ground cinnamon, 1 1/2 teaspoons vanill… [+301 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Thekitchn.com"
  },
  "author": "Kiersten Hickman",
  "title": "Trader Joe’s Just Brought Back Its Most Famous $4 Fall Treat for a Limited Time",
  "description": "It’s that time of year again!\nREAD MORE...",
  "url": "https://www.thekitchn.com/trader-joes-apple-cider-donuts-23674971",
  "urlToImage": "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/stock%2Fshutterstock_2437758857",
  "publishedAt": "2024-08-16T18:15:00Z",
  "content": "We independently select these products—if you buy from one of our links, we may earn a commission. All prices were accurate at the time of publishing.\r\nFall is quickly approaching, which means all of… [+1835 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Thekitchn.com"
  },
  "author": "Meg Asby",
  "title": "My Grandmother's Fruit Fly Trap Works *Every* Time",
  "description": "And it costs nearly nothing to make. \nREAD MORE...",
  "url": "https://www.thekitchn.com/fruit-fly-trap-apple-cider-vinegar-diy-23675086",
  "urlToImage": "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/at%2Fhouse%20tours%20stock%20archive%2F49651d20aae8b9ba2fa996d9b62a6bf980a2242d",
  "publishedAt": "2024-08-16T20:45:00Z",
  "content": "We independently select these products—if you buy from one of our links, we may earn a commission. All prices were accurate at the time of publishing.\r\nWhenever fruit flies invade my kitchen, I think… [+2536 chars]"
  },
{
   "source": {
  "id": null,
  "name": "AppleInsider"
  },
  "author": "news@appleinsider.com (Malcolm Owen)",
  "title": "Consumers prefer Apple Watch Series 9 over SE and Ultra models",
  "description": "Consumers prefer the mid-priced Apple Watch models over the big-budget Ultras and the low-cost Apple Watch SE, a report finds, with the Series 8 and Series 9 making up the bulk of sales in the June quarter.A render of what the Apple Watch Series 10 could look…",
  "url": "https://appleinsider.com/articles/24/08/16/consumers-prefer-apple-watch-series-9-over-se-and-ultra-models",
  "urlToImage": "https://photos5.appleinsider.com/gallery/60714-124976-60232-123868-Apple-Watch---12-xl-xl.jpg",
  "publishedAt": "2024-08-16T12:10:51Z",
  "content": "A render of what the Apple Watch Series 10 could look like\r\nConsumers prefer the mid-priced Apple Watch models over the big-budget Ultras and the low-cost Apple Watch SE, a report finds, with the Ser… [+1717 chars]"
  },
{
   "source": {
  "id": null,
  "name": "AppleInsider"
  },
  "author": "news@appleinsider.com (Chip Loder)",
  "title": "Understanding Apple's on-device and server foundation models",
  "description": "Apple announced new AI language models at WWDC. These models run both locally on Apple devices and on Apple's own Apple Silicon-powered AI servers.Siri icon in a datacenterArtificial Intelligence (AI) relies on language models which provide knowledge input to…",
  "url": "https://appleinsider.com/articles/24/08/16/understanding-apples-on-device-and-server-foundation-models",
  "urlToImage": "https://photos5.appleinsider.com/gallery/60275-124949-siriinadatacenter-xl.jpg",
  "publishedAt": "2024-08-16T02:45:41Z",
  "content": "Siri icon in a datacenter\r\nApple announced new AI language models at WWDC. These models run both locally on Apple devices and on Apple's own Apple Silicon-powered AI servers.\r\nArtificial Intelligence… [+3627 chars]"
  },
{
   "source": {
  "id": null,
  "name": "AppleInsider"
  },
  "author": "news@appleinsider.com (Malcolm Owen)",
  "title": "Apple warns of February store changes for EU developers, authors",
  "description": "Apple is giving App Store developers and booksellers a heads-up that they have to update their details with a trader status by February, to meet EU Digital Services Act rules.App Store iconApple has to follow the rules of the EU Digital Services Act with its …",
  "url": "https://appleinsider.com/articles/24/08/16/apple-warns-of-february-store-changes-for-eu-developers-authors",
  "urlToImage": "https://photos5.appleinsider.com/gallery/60719-124981-49021-95915-000-lead-App-Store-xl-xl.jpg",
  "publishedAt": "2024-08-16T17:35:33Z",
  "content": "App Store icon\r\nApple is giving App Store developers and booksellers a heads-up that they have to update their details with a trader status by February, to meet EU Digital Services Act rules. \r\nApple… [+1403 chars]"
  },
{
   "source": {
  "id": null,
  "name": "AppleInsider"
  },
  "author": "news@appleinsider.com (William Gallagher)",
  "title": "Apple Intelligence vs Google AI, plus an iPad Robot on the AppleInsider Podcast",
  "description": "This week's Google launch did more to highlight the huge differences between its approach to AI and Apple's, but there's also news of the Apple Vision Pro and an iPad with a robotic arm for some reason.There's a good chance that a future iPad robot will have …",
  "url": "https://appleinsider.com/articles/24/08/16/apple-intelligence-vs-google-ai-plus-an-ipad-robot-on-the-appleinsider-podcast",
  "urlToImage": "https://photos5.appleinsider.com/gallery/60721-124983-000-lede-podcast-iPad-xl.jpg",
  "publishedAt": "2024-08-16T19:37:10Z",
  "content": "There's a good chance that a future iPad robot will have been designed on an iPad\r\nThis week's Google launch did more to highlight the huge differences between its approach to AI and Apple's, but the… [+2266 chars]"
  },
{
   "source": {
  "id": null,
  "name": "AppleInsider"
  },
  "author": "news@appleinsider.com (William Gallagher)",
  "title": "Leak shows rumored bronze titanium iPhone 16 Pro",
  "description": "A further leaked image purporting to be of colors for the forthcoming iPhone 16 Pro shows a different selection, this time including bronze.Image claiming to show colors for the forthcoming iPhone 16 ProThe addition of a new color to the range was first rumor…",
  "url": "https://appleinsider.com/articles/24/08/16/leak-shows-rumored-bronze-titanium-iphone-16-pro",
  "urlToImage": "https://photos5.appleinsider.com/gallery/60715-124977-000-lede-iPhone-colors-xl.jpg",
  "publishedAt": "2024-08-16T11:55:08Z",
  "content": "Image claiming to show colors for the forthcoming iPhone 16 Pro\r\nLast updated 10 minutes ago\r\nA further leaked image purporting to be of colors for the forthcoming iPhone 16 Pro shows a different sel… [+1480 chars]"
  },
{
   "source": {
  "id": null,
  "name": "AppleInsider"
  },
  "author": "news@appleinsider.com (Malcolm Owen)",
  "title": "Epic Games Store goes live for EU iPhone users",
  "description": "The Epic Games Store has finally launched in the European Union, providing gamers with ways to access games on their iPhone without going through the App Store.Epic Games StoreAfter the lengthy and expensive legal battle over payments and rival app storefront…",
  "url": "https://appleinsider.com/articles/24/08/16/epic-games-store-goes-live-for-eu-iphone-users",
  "urlToImage": "https://photos5.appleinsider.com/gallery/60716-124978-epicgamesstore1-xl.jpg",
  "publishedAt": "2024-08-16T12:57:52Z",
  "content": "Epic Games Store\r\nThe Epic Games Store has finally launched in the European Union, providing gamers with ways to access games on their iPhone without going through the App Store. \r\nAfter the lengthy … [+1425 chars]"
  },
{
   "source": {
  "id": null,
  "name": "AppleInsider"
  },
  "author": "news@appleinsider.com (Malcolm Owen)",
  "title": "Banshee Stealer malware haunts browser extensions on macOS",
  "description": "Security researchers have discovered a new malware for macOS, which can be used to attack over 100 browser extensions that may be installed on the target Mac.Web browser extensions are the target of Banshee Stealer on macOSApple tries hard to make macOS and i…",
  "url": "https://appleinsider.com/articles/24/08/16/banshee-stealer-malware-haunts-browser-extensions-on-macos",
  "urlToImage": "https://photos5.appleinsider.com/gallery/60718-124980-chromeextensiona-xl.jpg",
  "publishedAt": "2024-08-16T16:54:56Z",
  "content": "Web browser extensions are the target of Banshee Stealer on macOS\r\nSecurity researchers have discovered a new malware for macOS, which can be used to attack over 100 browser extensions that may be in… [+2075 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Gizmodo.jp"
  },
  "author": "そうこ",
  "title": "Appleレベルのデザインと音をお安く楽しめるワイヤレススピーカー「Beats Pill」",
  "description": "Photo:ArtemGolub/GizmodoUS8月8日に発売されたばかりのBeatsのスピーカー新モデルBeatsPill。バッテリーもち24時間と防水防塵に優れたワイヤレススピーカー。日本での価格は2万4800円。発売されたばかりのスピーカーを米Gizmodoがレビューしました。最近はすっかりヘッドホン寄りなBeatsでしたが、スピーカーも作っていたことを思い出したようです。Apple（ア",
  "url": "https://www.gizmodo.jp/2024/08/beats-pill-review-a-bunch-of-bells-and-whistles-without-the-apple-price-tag.html",
  "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2024/08/13/240813beatspill.jpg?w=1280&h=630&f=jpg",
  "publishedAt": "2024-08-16T12:00:00Z",
  "content": "88BeatsBeats Pill2424800\r\nGizmodo\r\nBeatsAppleBeats Pill+10Beats Pill\r\nBeats PillUlt Field 1Pill150Let Field 1130Pill24800Ult Field 119800\r\nPillIP67IP68\r\nUlt Field 1IP67Ult Field 1Ult Field 1USB Type-… [+317 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Gizmodo.jp"
  },
  "author": "金本太郎",
  "title": "スマホに『フォートナイト』が帰ってきた！ アプリの入れ方はこちら（iPhoneはまだ）",
  "description": "Image:EpicGames復活の『フォートナイト』です。AppleやGoogleによる、アプリストア決済ルートの独占に異を唱えた「フォートナイトの乱」から4年。スマホのアプリストアから一度は姿を消した『フォートナイト』が、独自アプリストア「EpicGameStore」とともに帰ってきました。今日からは、かつてのようにスマートフォンでも『フォートナイト』を遊べるようになります。なお、現在Epic",
  "url": "https://www.gizmodo.jp/2024/08/292125.html",
  "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2024/08/16/unnamed.jpg?w=1280&h=630&f=jpg",
  "publishedAt": "2024-08-16T12:30:00Z",
  "content": "AppleGoogle4Epic Game Store\r\nEpic Game StorePixelAndroidiPhone\r\nEpic Game Store\r\nEpic GamesEpic Game Store\r\nPixelChrome\r\n1.Epic Games StoreAPK\r\nEpic Games StoreAndroidAPK\r\nEpic Games Store\r\n2.APK\r\nAP… [+52 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Gizmodo.jp"
  },
  "author": "小暮ひさのり",
  "title": "M4 MacBook Pro、すでに生産が進んでいるのかもしれない",
  "description": "Image:Appleもうこれは期待していいってことだよね？2024年5月、iPadProから始まった、Apple（アップル）の最新M4チップの物語。でも、当然M4のMacだって準備が進んでいるようです。ディスプレイアナリストのロス・ヤング氏によれば、14インチと16インチのM4MacBookPro用ディスプレイパネルの出荷が7月と8月に始まったそうな。さらに、Bloombergのマーク・ガーマン",
  "url": "https://www.gizmodo.jp/2024/08/m4-macbook-pro.html",
  "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2024/08/16/2024-08-16mak01.jpg?w=1280&h=630&f=jpg",
  "publishedAt": "2024-08-16T08:30:00Z",
  "content": "20245iPad ProAppleM4M4Mac\r\n1416M4 MacBook Pro78\r\nBloombergM4MacBook Pro\r\nMacBook ProM4 ProM4 Max\r\nAIMac\r\nSource: MacRumors"
  },
{
   "source": {
  "id": null,
  "name": "Gizmodo.jp"
  },
  "author": "小暮ひさのり",
  "title": "薄さこそ正義。来年「iPhone Air」が出るかもしれない",
  "description": "Image:AppleなんでもAirにすればいいってもん…なのだ！MacBookAir、iPadAir、そしてAirPods。Apple（アップル）のフットワーク重視なプロダクトには「Air」の名が加えられていますが、iPhoneは？Airってないですよね。iPhoneSEはAirじゃないし。でも、ついに「iPhoneAir」が出るかも？なウワサがあります。Bloombergのマーク・ガーマン記者",
  "url": "https://www.gizmodo.jp/2024/08/iphone-air-next-year.html",
  "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2024/08/15/2024-08-15Aik00.jpg?w=1280&h=630&f=jpg",
  "publishedAt": "2024-08-16T02:00:00Z",
  "content": "Air\r\nMacBook AiriPad AirAir PodsAppleAiriPhone AiriPhone SEAir\r\niPhone Air\r\nBloombergiPhone 17 SlimiPhoneiPhone Air\r\niPhone Air\r\nPro Max1\r\nPlusiPhone 17iPhone 17 Pro\r\niPhone \r\niPhone 15 ProiPod touch… [+31 chars]"
  },
{
   "source": {
  "id": null,
  "name": "CNET"
  },
  "author": "Adrian Marlow",
  "title": "Score Microsoft Office for Only $25 Just in Time for Back-to-School",
  "description": "We can't make work and school more bearable, but we can help you save on the software you have to use.",
  "url": "https://www.cnet.com/deals/score-microsoft-office-for-only-25-just-in-time-for-back-to-school/",
  "urlToImage": "https://www.cnet.com/a/img/resize/5dc4d551b6eb71b3c9b08b6f741f8177642abb4d/hub/2024/06/05/0c4a5614-d0a6-4f23-8363-18134498e4eb/ms-office-2019-commerce-image.jpg?auto=webp&fit=crop&height=675&width=1200",
  "publishedAt": "2024-08-16T12:34:00Z",
  "content": "Whether you're a student heading back to school or you're fortunate enough to work from home, it's a fact of life that you're probably going to have to use Microsoft Office for something. Apps like W… [+1956 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Journal du geek"
  },
  "author": "tristan carballeda",
  "title": "Apple veut tirer le meilleur de l’iPad et du HomePod dans un nouvel appareil",
  "description": "Apple veut apporter de nouveaux produits dans sa gamme, notamment pour se renforcer sur le marché de la robotique.",
  "url": "https://www.journaldugeek.com/2024/08/16/apple-veut-tirer-le-meilleur-de-lipad-et-du-homepod-dans-un-nouvel-appareil/",
  "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/05/ipad-pro-apple-pencil-pro.jpg",
  "publishedAt": "2024-08-16T14:09:50Z",
  "content": "La domotique est l’un des grands points de travail d’Apple. La firme de Cupertino est bien consciente de l’essor des appareils comme les Amazon Echo Show, ou les Google Next. De son côté, la marque à… [+3020 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Journal du geek"
  },
  "author": "tristan carballeda",
  "title": "Epic Games sort le chéquier pour concurrencer l’App Store",
  "description": "Epic Games ne prend pas de vacances, surtout quand il est question de faire de l'ombre à l'App Store.",
  "url": "https://www.journaldugeek.com/2024/08/16/epic-games-sort-le-chequier-pour-concurrencer-lapp-store/",
  "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/03/epic-games-store-app-store.jpg",
  "publishedAt": "2024-08-16T10:03:29Z",
  "content": "Si vous n’avez pas suivi l’actualité technologique ces dernières années, il est possible de résumer la situation entre Epic Games et Apple en une phrase. Les deux entreprises ne s’aiment pas beaucoup… [+2631 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Journal du geek"
  },
  "author": "Anh Phan",
  "title": "L’Epic Game Store se lance sur iOS et Android avec Fortnite, Fall Guys et Rocket League",
  "description": "C'est maintenant officiel, l'Epic Game Store est désormais disponible sur iOS et Android. Les trois premiers jeux disponibles ne sont autres que Fortnite, Rocket League SideSwipe et surtout Fall Guys",
  "url": "https://www.journaldugeek.com/2024/08/16/lepic-game-store-se-lance-sur-ios-et-android-avec-fortnite-fall-guys-et-rocket-league/",
  "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/08/FR_EGS_Key-Art.jpg",
  "publishedAt": "2024-08-16T11:00:55Z",
  "content": "Après des années de batailles légales, de déclarations toutes plus virulentes les unes que les autres, cest enfin officiel ! En effet, lEpic Game Store vient dêtre lancé officiellement sur iOS et And… [+3904 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Journal du geek"
  },
  "author": "Thomas Estimbre",
  "title": "Ce fabricant charge complètement un smartphone en moins de 5 minutes",
  "description": "4 minutes et 30 secondes, c'est la durée qu'il faut à Realme pour recharger complètement la batterie d'un smartphone. Une performance rendue possible grâce à la charge SuperSonic de 320 W.",
  "url": "https://www.journaldugeek.com/2024/08/16/ce-fabricant-charge-completement-un-smartphone-en-moins-de-5-minutes/",
  "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/08/realme-supersonic-320w.jpg",
  "publishedAt": "2024-08-16T15:04:18Z",
  "content": "Realme relance la bataille autour de la charge ultra-rapide, ou plutôt de la charge supersonique. Le constructeur chinois, de nouveau présent en France, vient de présenter sa nouvelle technologie de … [+3391 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Core77.com"
  },
  "author": "Rain Noe",
  "title": "Industrial Design Case Study: A Self-Coiling Charging Cable",
  "description": "This Lup Cable, conceived of by ex-Apple mechanical engineer John Hanna, is a self-coiling charging cable. To turn it into a finished product, Hanna and his company, Reaction Labs, tapped industrial design and engineering consultancy Design 1st.Product Design…",
  "url": "https://www.core77.com/posts/133340/Industrial-Design-Case-Study-A-Self-Coiling-Charging-Cable",
  "urlToImage": "https://s3files.core77.com/blog/images/lead_n_spotlight/1564908_lead_400_133340_.jpg",
  "publishedAt": "2024-08-16T14:00:00Z",
  "content": "This Lup Cable, conceived of by ex-Apple mechanical engineer John Hanna, is a self-coiling charging cable. To turn it into a finished product, Hanna and his company, Reaction Labs, tapped industrial … [+2497 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Applesfera.com"
  },
  "author": "Guille Lomener",
  "title": "Apple ha perdido la batalla de los precios en China pero puede ganar la guerra con el iPhone 16",
  "description": "Apple es una de las empresas más valiosas del mundo, y buena parte de ello lo podemos comprobar cuando presentan sus resultados financieros. En su último informe económico, Apple sacó pecho de unos ingresos líderes y de un mayor aumento de su división de serv…",
  "url": "https://www.applesfera.com/iphone/apple-ha-perdido-batalla-precios-china-puede-ganar-guerra-iphone-16",
  "urlToImage": "https://i.blogs.es/91783e/iphone-16/840_560.jpeg",
  "publishedAt": "2024-08-16T11:02:50Z",
  "content": "Apple es una de las empresas más valiosas del mundo, y buena parte de ello lo podemos comprobar cuando presentan sus resultados financieros. En su último informe económico, Apple sacó pecho de unos i… [+3702 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Applesfera.com"
  },
  "author": "José A. Lizana",
  "title": "Apple ha crecido tanto en India que ya es la empresa más valiosa del país. Un claro indicador de hacia dónde nos dirigimos",
  "description": "Cuando hablamos de países que son claves para Apple, India sin duda se ha colado de lleno en el top. En los últimos años, se ha observado como este país se ha convertido en un auténtico refugio de Apple para poder compartir su trabajo de fabricaicón con China…",
  "url": "https://www.applesfera.com/apple-1/apple-ha-crecido-india-que-empresa-valiosa-pais-claro-indicador-donde-nos-dirigimos",
  "urlToImage": "https://i.blogs.es/2cd22a/apple-india/840_560.jpeg",
  "publishedAt": "2024-08-16T16:01:46Z",
  "content": "Cuando hablamos de países que son claves para Apple, India sin duda se ha colado de lleno en el top. En los últimos años, se ha observado como este país se ha convertido en un auténtico refugio de Ap… [+2877 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Applesfera.com"
  },
  "author": "José A. Lizana",
  "title": "Warren Buffett vendió la mitad de sus acciones de Apple. Ahora tiene que pagar en impuestos una cifra similar a lo que gana YouTube en publicidad",
  "description": "Warren Buffet es considerado como uno de los mayores inversores a nivel mundial, así como el mayor accionista y CEO de Berkshier Hathaway. Pero las inversiones no siempre permanentes, y van fluctuando a unos niveles vertiginosos, que a veces se puede escapar …",
  "url": "https://www.applesfera.com/apple-1/warren-buffett-vendio-mitad-sus-acciones-apple-ahora-tiene-que-pagar-impuestos-cifra-similar-a-que-gana-youtube-publicidad",
  "urlToImage": "https://i.blogs.es/ad4e60/buffet-apple/840_560.jpeg",
  "publishedAt": "2024-08-16T09:01:41Z",
  "content": "Warren Buffet es considerado como uno de los mayores inversores a nivel mundial, así como el mayor accionista y CEO de Berkshier Hathaway. Pero las inversiones no siempre permanentes, y van fluctuand… [+2903 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Applesfera.com"
  },
  "author": "Guille Lomener",
  "title": "\"¿Quieres copia?\" Lo que tienes que responder según el Banco de España pese a que hayas pagado con tu iPhone",
  "description": "¿Recuerdas cuando había que pagar con tarjeta, te pedían el DNI, tenías que firmar en un papel...? Cómo ha cambiado todo desde la llegada del contactless y, sobre todo, con Apple Pay. Reconozco que soy \"adicto\" a pagar con el Apple Watch o el iPhone. Y es que…",
  "url": "https://www.applesfera.com/general/quieres-copia-que-tienes-que-responder-banco-espana-pese-a-que-hayas-pagado-tu-iphone",
  "urlToImage": "https://i.blogs.es/5f04c4/pago-movil/840_560.jpeg",
  "publishedAt": "2024-08-16T08:01:42Z",
  "content": "¿Recuerdas cuando había que pagar con tarjeta, te pedían el DNI, tenías que firmar en un papel...? Cómo ha cambiado todo desde la llegada del contactless y, sobre todo, con Apple Pay. Reconozco que s… [+4005 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Applesfera.com"
  },
  "author": "Roberto Méndez",
  "title": "Ni AirPods ni Beats: estos auriculares Bluetooth baratos con cancelación de ruido son una maravilla y están a mitad de precio",
  "description": "Conseguir unos auriculares inalámbricos con cancelación de ruido y buen sonido para sacarle partido a tu suscripción de Apple Music en iPhone no tiene por qué salir caro. Un ejemplo de ellos son los Jabra Elite 4 Active, que ahora puedes encontrarlos con su m…",
  "url": "https://www.applesfera.com/seleccion/airpods-beats-estos-auriculares-bluetooth-baratos-cancelacion-ruido-maravilla-para-iphone-a-mitad-precio",
  "urlToImage": "https://i.blogs.es/899bc2/auriculares-tws-con-cancelacion-de-ruido-baratos-ideal-para-iphone-rebajados-a-mitad-de-precio/840_560.jpeg",
  "publishedAt": "2024-08-16T11:12:38Z",
  "content": "Conseguir unos auriculares inalámbricos con cancelación de ruido y buen sonido para sacarle partido a tu suscripción de Apple Music en iPhone no tiene por qué salir caro. Un ejemplo de ellos son los … [+1807 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Applesfera.com"
  },
  "author": "Guille Lomener",
  "title": "Epic lanza por sorpresa su tienda oficial en iOS: tras años de espera, ya estoy jugando a Fortnite en mi iPhone sin bloqueos",
  "description": "La historia entre Apple y Fortnite es una de las batallas más intensas que hemos tenido en los últimos años. Todo comenzó con una discrepancia entre Epic Games y las comisiones que tenía la App Store. Todo esto terminó con Fortnite fuera de la App Store y cie…",
  "url": "https://www.applesfera.com/juegos-ios/epic-lanza-sorpresa-su-tienda-oficial-ios-anos-espera-estoy-jugando-a-fortnite-mi-iphone-bloqueos",
  "urlToImage": "https://i.blogs.es/7868f4/portadilla/840_560.jpeg",
  "publishedAt": "2024-08-16T12:05:23Z",
  "content": "La historia entre Apple y Fortnite es una de las batallas más intensas que hemos tenido en los últimos años. Todo comenzó con una discrepancia entre Epic Games y las comisiones que tenía la App Store… [+2951 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Applesfera.com"
  },
  "author": "Isra Fdez",
  "title": "\"Objeto indefinido hecho de aluminio y cristal\". Así es el superyate diseñado por Steve Jobs que nunca pudo estrenar",
  "description": "Es sabido que Steve Jobs siguió trabajando hasta sus últimos días, pese a estar retirado de la vida pública e incluso de su rol como CEO en Apple. Uno de los bretes que intentaba resolver era clave para el futuro de la marca: cómo integrar la televisión dentr…",
  "url": "https://www.applesfera.com/curiosidades/objeto-indefinido-hecho-aluminio-cristal-asi-superyate-disenado-steve-jobs-que-nunca-pudo-estrenar-1",
  "urlToImage": "https://i.blogs.es/c4c525/superyate-venus/840_560.jpeg",
  "publishedAt": "2024-08-16T14:01:48Z",
  "content": "Es sabido que Steve Jobs siguió trabajando hasta sus últimos días, pese a estar retirado de la vida pública e incluso de su rol como CEO en Apple. Uno de los bretes que intentaba resolver era clave p… [+4425 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Applesfera.com"
  },
  "author": "Guille Lomener",
  "title": "Odio el mensaje \"El iPhone retomará la carga cuando baje la temperatura.\" Así evito que se caliente cuando uso Carplay",
  "description": "Estamos en verano y esto es sinónimo de calor, sol y muchos viajes en el coche. CarPlay es el mejor sistema de navegación, y ya uses Apple Maps, Google Maps o Waze, tendrás una experiencia de diez. Podrás ver con todo detalle los carriles, límites de velocida…",
  "url": "https://www.applesfera.com/iphone/odio-mensaje-iphone-retomara-carga-cuando-baje-temperatura-asi-evito-que-se-caliente-cuando-uso-carplay",
  "urlToImage": "https://i.blogs.es/69ea76/iphone-calor/840_560.jpeg",
  "publishedAt": "2024-08-16T10:01:43Z",
  "content": "Estamos en verano y esto es sinónimo de calor, sol y muchos viajes en el coche. CarPlay es el mejor sistema de navegación, y ya uses Apple Maps, Google Maps o Waze, tendrás una experiencia de diez. P… [+4372 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Phandroid - News for Android"
  },
  "author": "Mike Viray",
  "title": "The Epic Games Store Arrives for Android and iOS",
  "description": "Users will also have access to mobile titles such as Fortnite, Rocket League, as well as an all-new port of Fall Guys.\nThe post The Epic Games Store Arrives for Android and iOS appeared first on Phandroid.",
  "url": "https://phandroid.com/2024/08/16/the-epic-games-store-arrives-for-android-and-ios/",
  "urlToImage": "https://phandroid.com/wp-content/uploads/2024/08/epic-games-store-640x352.png",
  "publishedAt": "2024-08-16T18:07:07Z",
  "content": "While Epic has had quite a bit of a situation with both Apple and Google, the company’s Games Store has nonetheless continued to make the leap for mobile devices. As such, Android users worldwide can… [+1339 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Phandroid - News for Android"
  },
  "author": "Mike Viray",
  "title": "Google Pixel 9 vs Pixel 8a: Sibling Rivalry",
  "description": "If you're in the market for a 2024-series Pixel phone, then you might be interested in either of these two - let's check them out!\nThe post Google Pixel 9 vs Pixel 8a: Sibling Rivalry appeared first on Phandroid.",
  "url": "https://phandroid.com/2024/08/16/google-pixel-9-vs-pixel-8a-sibling-rivalry/",
  "urlToImage": "https://phandroid.com/wp-content/uploads/2024/08/pixel-9-and-9-pro-3.jpg",
  "publishedAt": "2024-08-16T19:53:37Z",
  "content": "There’s little doubt that Google’s newest Pixel 9 series devices pack some delightful hardware and software upgrades, such as more premium designs, brihgter displays, and improved cameras. It’s also … [+4362 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Golem.de"
  },
  "author": "Tobias Költzsch",
  "title": "In der EU: Mobiler Epic Games Store bringt Fortnite für iPhones zurück",
  "description": "Fortnite ist zurück auf dem iPhone - zumindest in der EU: Epic hat seinen mobilen Games Store gestartet und will seine Spiele auch auf andere App-Marktplätze bringen. (Epic Games, Apple)",
  "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fin-der-eu-mobiler-epic-games-store-bringt-fortnite-fuer-iphones-zurueck-2408-188099.html&referer=https%3A%2F%2Ft.co%2F2466098e18",
  "urlToImage": null,
  "publishedAt": "2024-08-16T13:35:02Z",
  "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Openculture.com"
  },
  "author": "OC",
  "title": "Hear the Very First Adaptation of George Orwell’s 1984 in a Radio Play Starring David Niven (1949)",
  "description": "Since George Orwell published his landmark political fable 1984, each generation has found ample reason to make reference to the grim near-future envisioned by the novel. Whether Orwell had some prophetic vision or was simply a very astute reader of the insti…",
  "url": "https://www.openculture.com/2024/08/hear-the-very-first-adaptation-of-george-orwells-1984.html",
  "urlToImage": "https://cdn8.openculture.com/wp-content/uploads/2015/08/10011740/bigbrother1-1024x535.png",
  "publishedAt": "2024-08-16T07:20:41Z",
  "content": "Since George Orwell pub­lished his land­mark polit­i­cal fable 1984, each gen­er­a­tion has found ample rea­son to make ref­er­ence to the grim near-future envi­sioned by the nov­el. Whether Orwell h… [+3580 chars]"
  },
{
   "source": {
  "id": null,
  "name": "Pitchfork"
  },
  "author": "Jazz Monroe",
  "title": "9 New Albums You Should Listen to Now: Post Malone, Tinashe, and More",
  "description": "Stream new releases from Post Malone, Tinashe, Charly Bliss, Chuck Johnson, Wishy, Horse Jumper of Love, Durkalini & Surf Gang, Delicate Steve, and NoCap",
  "url": "https://pitchfork.com/news/9-new-albums-you-should-listen-to-now-post-malone-tinashe/",
  "urlToImage": "https://media.pitchfork.com/photos/66bb7a9994a5342306c4b61d/16:9/w_1280,c_limit/Post-Malone.jpg",
  "publishedAt": "2024-08-16T12:23:38Z",
  "content": "With so much good music being released all the time, it can be hard to determine what to listen to first. Every week, Pitchfork offers a run-down of significant new releases available on streaming se… [+1074 chars]"
  },
{
   "source": {
  "id": null,
  "name": "GameSpot"
  },
  "author": "Jon Bitner",
  "title": "Hugh Howey's Stellar Sci-Fi Novel Wool Gets Collector's Edition Ahead Of Silo Season 2",
  "description": "Wool Collector's Edition: Silo Book One (Hardcover) \r\n $40 \r\nPreorder at Amazon \r\nApple TV+ is filled with critically acclaimed shows, but few are as impressive as Silo. The dystopian sci-fi series is based on a novel series of the same name by acclaimed nove…",
  "url": "https://www.gamespot.com/articles/hugh-howeys-stellar-sci-fi-novel-wool-gets-collectors-edition-ahead-of-silo-season-2/1100-6525673/",
  "urlToImage": "https://www.gamespot.com/a/uploads/screen_kubrick/1702/17023653/4348034-mixcollage-09-aug-2024-09-50-am-7391.jpg",
  "publishedAt": "2024-08-16T20:31:00Z",
  "content": "Apple TV+ is filled with critically acclaimed shows, but few are as impressive as Silo. The dystopian sci-fi series is based on a novel series of the same name by acclaimed novelist Hugh Howey. Fans … [+2972 chars]"
  },
{
   "source": {
  "id": null,
  "name": "GameSpot"
  },
  "author": "Phil Owen",
  "title": "How To Play Fortnite On iPhone In 2024",
  "description": "Fortnite has made its dramatic return to iPhones and the iOS platform for the first time since 2020, though only in the Euopean Union. This move was made possible by the EU requiring Apple to allow users to sideload other app marketplaces beyond Apple's own A…",
  "url": "https://www.gamespot.com/gallery/how-to-play-fortnite-on-iphone/2900-5685/",
  "urlToImage": "https://www.gamespot.com/a/uploads/screen_kubrick/1632/16320660/4350789-still008.jpg",
  "publishedAt": "2024-08-16T20:59:00Z",
  "content": "GameSpot may receive revenue from affiliate and advertising partnerships for sharing this content and from purchases through links."
  },
{
   "source": {
  "id": null,
  "name": "GameSpot"
  },
  "author": "Mat Elfring",
  "title": "Best Horror Movies Of All Time, According To Metacritic",
  "description": "Horror movies have been a part of cinema since 1896, when the film Le Manoir Du Diable (The House of the Devil) came out. While that movie was only three minutes long, it invoked a feeling of fear in the audience. Since then, there have been over thousands of…",
  "url": "https://www.gamespot.com/gallery/best-horror-movies/2900-5684/",
  "urlToImage": "https://www.gamespot.com/a/uploads/screen_kubrick/1562/15626911/4351538-dek.png",
  "publishedAt": "2024-08-16T18:37:00Z",
  "content": "GameSpot may receive revenue from affiliate and advertising partnerships for sharing this content and from purchases through links."
  }
  ]
  static defaultProps = {
    country: "in",
    category: "sports",
    page: 5
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,


  }
  constructor() {
    super();
    this.state = {
      articles: this.articles, // Initially empty array for articles
      loading: false, // Loading state to indicate data is being fetched
      page: 1
    };
  }

  async componentDidMount() {
    try {
      // let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=61116340b4b54c769d6d62c1c3f928ee&category=${this.props.category}&pageSize=${9}`);

      let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=61116340b4b54c769d6d62c1c3f928ee`);


      let fetchData = await response.json();

      // Update the state with the fetched data
      this.setState({ articles: fetchData.articles, loading: false });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ loading: false });
    }
  }


  btnPrev = async () => {
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=61116340b4b54c769d6d62c1c3f928ee&category=${this.props.category}&page=${this.state.page - 1}&pageSize=${9}`);
    let fetchData = await response.json();
    this.setState({
      page: this.state.page - 1,
      articles: fetchData.articles
    })
  };
  btnNext = async () => {
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=61116340b4b54c769d6d62c1c3f928ee&category=${this.props.category}&page=${this.state.page + 1}&pageSize=${9}`);
    let fetchData = await response.json();
    this.setState({
      page: this.state.page + 1,
      articles: fetchData.articles
    })
  };
  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center my-5">SaloSkilo Top-News</h1>

        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <div className="row">
            {this.state.articles.map((element) => (
              <div className="col md-4 my-3 d-flex justify-content-center" key={element.url}>
                <NewsItem
                  // ternary operator 
                  title={element.title ? element.title.slice(0, 20) : "Title is Null"}
                  description={element.description ? element.description.slice(0, 50) : "Description is Null in the API"}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  publishedData={new Date(element.publishedAt).toDateString()}
                />
              </div>
            ))}

          </div>
        )}
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" onClick={this.btnPrev} className="btn btn-dark">&larr; Previous</button>
          <button type="button" onClick={this.btnNext} className="btn btn-dark">&rarr; Next</button>
        </div>
      </div>
    );
  }
}

export default News;

