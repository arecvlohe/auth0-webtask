# How many are coming?

You are busy with your day-to-day job and forget to check meetup.com to see how many people are coming to your next event. No worries. This webtask will check to see if you have any upcoming events for a group that you host and if there is an event upcoming, it will send you an SMS notification of the number of people who are RSVP. No need to remember everything now, it's automated! You can update the scheduler to send you as many notifications you want throughout the week, day, hour, or minute.

To run this application you will need:
- Meetup API Key
- Twilio SID Number
- Twilio Auth Token
- Twilio Number
- Your Cell Phone Number
- Your Group URL on Meetup.com

The easiest way to set this up would be to create a `.env` file with these values:
```
MEETUP_API_KEY=YOUR_API_KEY
TWILIO_SID=YOUR_TWILIO_SID
TWILIO_AUTH_TOKEN=YOUR_TWILIO_AUTH_TOKEN
MY_TWILIO_NUMBER=YOUR_TWILIO_NUMBER
MY_NUMBER=YOUR_CELL_NUMBER
GROUP=YOUR_GROUP_URL
```

To run this cron webtask with the values above in the webtask context run:

`wt cron schedule 5m ./webtask.js --secrets-file .env`

You may want to update the scheduler to be more or less than 5 minutes.
