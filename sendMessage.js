const axios = require("axios");

const slackToken = "xoxb-2248581341719-2263554854451-6e1twyGdOn7C7aXpSYpxcfld";

run().catch((err) => console.log(err));

async function run() {
  const url = "https://slack.com/api/chat.postMessage";
  const res = await axios.post(
    url,
    {
      channel: "#software",
      text: "I'm paul melchi zedek",
      username: "Test App",
      icon_emoji: ":+1:",
    },
    { headers: { authorization: `Bearer ${slackToken}` } }
  );

  console.log("Done", res.data);
}
