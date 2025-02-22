const axios = require('axios');
const chalk = require('chalk');

const { input, currentTimeStamp, info, saveTo } = require('./helper');

const userRecon = async (username) => {
  username = username || (await input('Your Username'));

  const path = `${process.cwd()}/results/infoooze_userRecon_${currentTimeStamp()}.txt`;
  info('Results will be saved in ', path);

  const urlList = [
    `https://facebook.com/${username}`,
    `https://instagram.com/${username}`,
    `https://twitter.com/${username}`,
    `https://youtube.com/${username}`,
    `https://vimeo.com/${username}`,
    `https://github.com/${username}`,
    `https://plus.google.com/${username}`,
    `https://pinterest.com/${username}`,
    `https://flickr.com/people/${username}`,
    `https://vk.com/${username}`,
    `https://about.me/${username}`,
    `https://disqus.com/${username}`,
    `https://bitbucket.org/${username}`,
    `https://flipboard.com/@${username}`,
    `https://medium.com/@${username}`,
    `https://hackerone.com/${username}`,
    `https://keybase.io/${username}`,
    `https://buzzfeed.com/${username}`,
    `https://slideshare.net/${username}`,
    `https://mixcloud.com/${username}`,
    `https://soundcloud.com/${username}`,
    `https://badoo.com/en/${username}`,
    `https://imgur.com/user/${username}`,
    `https://open.spotify.com/user/${username}`,
    `https://pastebin.com/u/${username}`,
    `https://wattpad.com/user/${username}`,
    `https://canva.com/${username}`,
    `https://codecademy.com/${username}`,
    `https://last.fm/user/${username}`,
    `https://blip.fm/${username}`,
    `https://dribbble.com/${username}`,
    `https://en.gravatar.com/${username}`,
    `https://foursquare.com/${username}`,
    `https://creativemarket.com/${username}`,
    `https://ello.co/${username}`,
    `https://cash.me/${username}`,
    `https://angel.co/${username}`,
    `https://500px.com/${username}`,
    `https://houzz.com/user/${username}`,
    `https://tripadvisor.com/members/${username}`,
    `https://kongregate.com/accounts/${username}`,
    `https://${username}.blogspot.com/`,
    `https://${username}.tumblr.com/`,
    `https://${username}.wordpress.com/`,
    `https://${username}.devianart.com/`,
    `https://${username}.slack.com/`,
    `https://${username}.livejournal.com/`,
    `https://${username}.newgrounds.com/`,
    `https://${username}.hubpages.com`,
    `https://${username}.contently.com`,
    `https://steamcommunity.com/id/${username}`,
    `https://www.wikipedia.org/wiki/User:${username}`,
    `https://www.freelancer.com/u/${username}`,
    `https://www.dailymotion.com/${username}`,
    `https://www.etsy.com/shop/${username}`,
    `https://www.scribd.com/${username}`,
    `https://www.patreon.com/${username}`,
    `https://www.behance.net/${username}`,
    `https://www.goodreads.com/${username}`,
    `https://www.gumroad.com/${username}`,
    `https://www.instructables.com/member/${username}`,
    `https://www.codementor.io/${username}`,
    `https://www.reverbnation.com/${username}`,
    `https://www.designspiration.net/${username}`,
    `https://www.bandcamp.com/${username}`,
    `https://www.colourlovers.com/love/${username}`,
    `https://www.ifttt.com/p/${username}`,
    `https://www.trakt.tv/users/${username}`,
    `https://www.okcupid.com/profile/${username}`,
    `https://www.trip.skyscanner.com/user/${username}`,
    `http://www.zone-h.org/archive/notifier=${username}`,
  ];
  Promise.all(
    urlList.map((url) => {
      axios
        .get(url)
        .then((response) => {
          if (response.status === 200) {
            console.log(
              chalk.cyan('[') +
                chalk.greenBright(response.status) +
                chalk.cyan('] ') +
                chalk.greenBright(url),
            );
            saveTo(path, `[${response.status}]`, url);
          }
        })
        .catch((error) => {
          if (error?.response) {
            console.log(
              chalk.cyan('[') +
                chalk.redBright(error.response.status) +
                chalk.cyan('] ') +
                chalk.redBright(url),
            );
            saveTo(path, `[${error.response.status}]`, url);
          } else {
            console.log(
              chalk.cyan('[') +
                chalk.redBright('---') +
                chalk.cyan('] ') +
                chalk.redBright(url),
            );
            saveTo(path, '---', url);
          }
        });
    }),
  );
};

module.exports = userRecon;
