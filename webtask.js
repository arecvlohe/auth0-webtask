"use latest";

const isoFetch = require("isomorphic-fetch");
const twilio = require("twilio");

module.exports = function(ctx, done) {
  const MEETUP_API =
    "https://api.meetup.com/" +
    ctx.data.GROUP +
    "/events?key=" +
    ctx.data.MEETUP_API_KEY +
    "&page=1&only=yes_rsvp_count,name&sign=true";

  const client = twilio(ctx.data.TWILIO_SID, ctx.data.TWILIO_AUTH_TOKEN);

  isoFetch(MEETUP_API).then(r => r.json()).then(data => {
    if (data && data[0] && data[0].yes_rsvp_count) {
      const count = data[0].yes_rsvp_count;
      const eventName = data[0].name;
      client.messages.create(
        {
          to: ctx.data.MY_NUMBER,
          from: ctx.data.MY_TWILIO_NUMBER,
          body: `You have ${count} person(s) attending ${eventName}`
        },
        function(err, message) {
          done(null, message.body);
        }
      );
    }
  });
};
