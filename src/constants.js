import { urls } from './urls';
export const scaleFactor = 1; // TODO: change back to 4 when finished testing

function createLink(url, text) {
  return `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
}

export const dialogueData = {

  // A

  // B
  'binary-tree': `01110100 01110010 01100101 01100101<p>Hmm...<p>I wonder what that means...`,
  'bookcase': `HelioHost's ${createLink(urls.tutorials, 'tutorial')} section is like a big bookcase full of information! I can build all kinds of things with the help of their how-to guides!`,

  // C
  'common-errors': `Whoa, that's a big error! Did you know that HelioHost has a big help section for ${createLink(urls.commonErrors, 'Common Errors')}? You can get all kinds of help there!`,
  'cpu': `HelioHost accounts have a limit of ${createLink(urls.accountLoadLimits, 'no more than 10,000 CPU')} usage per day.<p>If that's not enough, they also have ${createLink(urls.morty, 'scaling hosting')}! For people who need even more CPUs, they offer a range of ${createLink(urls.vps, 'VPS plans')}, with a 10% discount when paying for 6 months upfront.`,

  // D
  'domain-limit': `We can host up to ${createLink(urls.addonDomains, '10 domains')} on one account! I use my ${createLink(urls.mainDomain, 'main domain')} for my website and requested a ${createLink(urls.subdomain, 'subdomain')} for my blog.<p>When I think of a cool custom domain name, I'll register it with ${createLink(urls.namecheap, 'Namecheap')} since HelioHost has an ${createLink(urls.affiliate, 'affiliate')} agreement with them. HelioHost will get a small commission when I use the referral link, and that's a great way I can help support them!`,

  // E

  // F
  'fireplace': `< fireplace noises >`,
  'firewall': `Hmm...<p>Oh, wait...<p>It's a <em>firewall</em>!<p>It's a lot more fiery than I expected...`,
  'forest-green': `Oh, hello! Uhh, I mean...<p>< tree noises >`,
  'forum-news': `I've seen a few emails from HelioHost but I forgot what they said. I better check the ${createLink(urls.news, 'HelioNet forum News')} section to catch up on any important service announcements!`,
  'frog-side': `Who, me? Yeah, I've always been a frog!<p>At least... I <em>think</em> I have.<p>< ribbit >`,
  'frog': `I wasn't always a frog, you know...<p><em>< sad frog noises ></em><p>If only I had followed the ${createLink(urls.terms, 'rules')}!`,

  // G
  'green-grass': `When something in a game looks a little out of place, sometimes it's hiding a secret!<p>But not here. This is just a patch of really green grass.<p>I'm going to go read the ${createLink(urls.news, 'HelioNet forum News')} section now.`,

  // H
  'horse': `What's this sign for?<p>***** NOTICE: Have you found my horse? Last seen moving 2 squares forward and 1 square right! *****<p>Hmm, I'll keep an eye out for sure. Hay, speaking of stable solutions, the flagship ${createLink(urls.morty, 'Morty')} server offers great uptime, reliability, and speed. No horsing around!`,

  // I
  'inactive-accounts': `To make sure that old, unused accounts don't fill up the servers, HelioHost has an ${createLink(urls.inactivityPolicy, 'inactivity policy')} on the ${createLink(urls.tommy, 'Tommy')} and ${createLink(urls.johnny, 'Johnny')} servers. I guess making sure that accounts stay active means they can keep finding room for new users to join!<p>When I travel to the moon, I'll move my account to ${createLink(urls.morty, 'Morty')} so I won't have to worry about inactivity suspensions as long as there's a positive account balance!`,
  'internet': `This looks like... a series of tubes? Whoa, it must be the internet!`,

  // J
  'johnny': `This is the ${createLink(urls.johnny, 'Johnny')} server! He's ${createLink(urls.tipsForJohnny, 'incredibly popular')} since he hosts all of HelioHost's free accounts!`,

  // K

  // L
  'ladder-left': `I'm not sure I should touch this...`,
  'ladder-right': `I have a strange feeling I might regret using this ladder...`,
  'ledge-vase': `What is this? A clay pot? A vase? Why would anyone leave this here?<p>Did I seriously walk <em>all the way over here</em> just to find an empty vase?!`,
  'lily': `This is the ${createLink(urls.lily, 'Lily')} server! She's pretty special because she runs Windows Server!`,
  'logs': `If an error on my site <em>leaves</em> me <em>stumped</em>, I can check the ${createLink(urls.errorLogs, 'Error Logs')} in Plesk to get to the <em>root</em> of the problem.<p>If I still can't get things working <em>pine</em>, I'll <em>log</em> in to the ${createLink(urls.customerSupport, 'Customer Support')} forum, where I'm sure people <em>wood</em> be happy to help me!<p> < puns included at no cost >`,

  // M
  'memory': `HelioHost accounts have a memory limit of ${createLink(urls.accountLoadLimits, 'no more than 100 GB')} per day.<p>If that's not enough, they also have ${createLink(urls.morty, 'scaling hosting')}! For people who need even more memory, they offer a range of ${createLink(urls.vps, 'VPS plans')}, with a 10% discount when paying for 6 months upfront.`,
  'morty': `This is the ${createLink(urls.morty, 'Morty')} server! He's HelioHost's flagship server, offering ${createLink(urls.mortySignup, 'unlimited memory and CPU usage')}! Morty is fast. Like... super fast.<p>How fast can you blink? Yeah, he's much faster than that.`,

  // N

  // O

  // P
  'plesk': `I'm going to ${createLink(urls.backupYourAccount, 'backup my account')} right now and download a copy to my local computer!<p>I worked so hard on my site, I should definitely save a copy of it somewhere safe, just in case!`,
  'potion-storage': `Whoever left all this stuff on the floor clearly needs a better storage solution.<p>If I ever need more than the ${createLink(urls.storage, '1000 MB')} of disk space that comes with my standard HelioHost account, I can make a ${createLink(urls.donationsForStorage, 'one-time donation')} to add more storage, increasing my filespace up to a total of 6000 MB. That would hold so many memes...`,

  // Q

  // R
  'red-button': `A big red button in the middle of nowhere? It's <em>definitely</em> a good idea to push this!<p>< click ><p>Ooh, this must be the ${createLink(urls.softaculous, 'Softaculous "one-click" installer')}! I can use this to easily install all kinds of popular software packages!<p>< clicks again >`,
  'rules': `Like most places, HelioHost has some ${createLink(urls.terms, 'rules')} everyone needs to follow. Here's a big 1!<p>What does the big 1 have to do with the rules? Well, everyone is only allowed <strong>one</strong> account on HelioHost. 1. One. <strong>ONE</strong>. People who make more than one account will be ${createLink(urls.duplicateAccounts, 'suspended')}.<p>This rule helps HelioHost provide free accounts to as many people as possible.`,

  // S
  'server-restart': `Apache restarts happen every 2 hours on the shared hosting servers. My site might display a ${createLink(urls.error502, '502 Bad Gateway')} or ${createLink(urls.error504, '504 Gateway Timeout')} error for the few minutes it's rebooting. <p>If my site ever loads a bit slowly or displays an error, I check the ${createLink(urls.statusPage, 'HelioHost Services Status Page')} first to see if it's a server restart. <p>I could get a ${createLink(urls.vps, 'VPS')} if I wanted to leave my server running for weeks or months without a reboot. I'd probably still reboot it anyway though, just so it can enjoy a little nap every so often.`,
  'server-status': `A real-time ${createLink(urls.statusPage, 'server status page')}?! Neat! This is the first place I'll check if I notice anything unusual happening with my site!`,
  'sofa-account-load': `I check my ${createLink(urls.accountLoad, 'account load')} every so often, to make sure I don't risk ${createLink(urls.highServerUsage, 'account suspension')}.<p>Sofa, so good! ha ha ha!<p>`,

  // T
  'table-terms': `These are HelioHost's ${createLink(urls.terms, 'Terms of Service')}! I better check this out to make sure I don't break any rules and get my ${createLink(urls.suspensionPolicy, 'account suspended')}.`,
  'table-wiki': `HelioHost has a ${createLink(urls.wiki, 'Wiki')}, too?! Awesome!<p>I bet other folks have asked the same questions I have. I guess I'll find my answers in the ${createLink(urls.faq, 'FAQ')} section!<p>First up: figuring out what 'FAQ' even means...<p>Then I'll build something cool with the help of their ${createLink(urls.tutorials, 'tutorials')}!`,
  'tommy': `This is the ${createLink(urls.tommy, 'Tommy')} server! He's fast, reliable, and available only to donors. For as little as $1 USD, you can ${createLink(urls.tommySignup, 'get an account')} on Tommy any time of day!`,
  'tower-left': `I wonder what's in there...`,
  'tower-right': `< weird noises ><p>Umm... I better leave this alone.`,
  'treasure-chest': `I wonder what's in here...`,
  'treasure-rug': `A treasure chest? And it's open?! There's a note inside! Maybe it's a map? A list of magic spells?! I'm going to read it! It says...<p>Hmm... It says... 'Please do not walk on the rug.'<p>Grr! This note could have been an email! Speaking of email, HelioHost has a great ${createLink(urls.emailDeliveryIssues, 'troubleshooting help page')} for any mail delivery issues you might have.`,
  'twenty-years': `${createLink(urls.helioHost, 'HelioHost')} has been offering free web hosting services to the community for over 20 years!<p>You can ${createLink(urls.donate, 'make a donation')} to help support their efforts, or check out some ${createLink(urls.howYouCanHelp, 'other ways')} you can help.`,

  // U

  // V
  'vps': `These are the ${createLink(urls.vps, 'VPS')} servers! Wanna know a secret?<p>If you pay for 6 months upfront, you get a <strong>10% discount</strong>!<p>Well... I guess it's not really a secret. The discount is shown right on the page when you choose a VPS plan!`,

  // W
  'welcome': `Welcome to Heliopolis! This is a fan website where you can learn more about ${createLink(urls.helioHost, 'HelioHost')} and their services.<p>All details have been sourced from the ${createLink(urls.wiki, 'HelioHost Wiki')}.<p>Please feel free to interact with your surroundings: Read signs, hug trees, talk to the wildlife, and walk around some more.<p>Running is strictly forbidden.`,

  // X

  // Y

  // Z
};