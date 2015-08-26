Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  defaults: {
    GUID: "",
    vendor: false,
    name: "Default Name",
    categories: ["category 1", "category 2"],
    moderator: false,
    moderators: ["moderator 1", "moderator 2"],
    shipsTo: "",
    headerhash: "imgs/defaultBanner.png",
    about: "default about text",
    website: "",
    email: "",
    social_accounts: {
      twitter: {
        username: "",
        proof_url: ""
      },
      facebook: {
        username: "",
        proof_url: ""
      }
    },
    followers: ["handle1", "handle2", "handle3"],
    following: ["handle4", "handle5", "handle6"],
    contracts: ["ID1", "ID2", "ID3"],
    primary_color: "",
    secondary_color: "",
    text_color: "",
    background_color: "",
    pgp_key: "",
    nsfw: false,
    location: "UNITED_STATES",
    avatar_hash: "",
    handle: "",
    GUID: "",
    email: "",
    encryption_key: ""
  }
});