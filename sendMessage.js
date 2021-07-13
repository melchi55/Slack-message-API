const axios = require("axios");

const slackToken = "xoxb-2248581341719-2263554854451-b48SuTFLxu0Au9ZHL3K2ZWa6";

run().catch((err) => console.log(err));

async function run() {
  const url = "https://slack.com/api/chat.postMessage";
  //   const res = await axios.post(
  //     url,
  //     {
  //       channel: "#test",
  //       text: "Hello, World!",
  //     },
  //     { headers: { authorization: `Bearer ${slackToken}` } }
  //   );
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
