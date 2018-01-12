const webpush = require('web-push');
var argv = require('minimist')(process.argv.slice(2));

if (!argv.endpoint || !argv.p256dh || !argv.auth) {
  console.log('missing some required parameters');
  return;
}

// VAPID keys should only be generated only once.
const vapidKeys = webpush.generateVAPIDKeys();

webpush.setVapidDetails(
  'mailto:sebastien.ollivier@gmail.com',
  'BH4YZ_yQDkf77ZGs361qyO24CNswEFDrd4zcTJMVTqqr1kgAC6t8eTrPMTCnZfXcOuoyuKMvRLT-XQa9E7ld_sk',
  'eh-xZQ14_AXjDpgBci1Hm3x3HQIOGCCI4mL9Aa13qcY'
);

const pushSubscription = {
  endpoint: argv.endpoint,
  keys: {
    auth: argv.auth,
    p256dh: argv.p256dh
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');