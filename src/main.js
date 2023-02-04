import generator from "megalodon";
import screams from "./screams/index.js";

const TOOT_URL = process.env.MASTODON_SERVER_URL;
const API_TOKEN = process.env.MASTODON_API_TOKEN;

const screamers = Object.values(screams);
const screamer = screamers[Math.floor(Math.random() * screamers.length)];

const scream = screamer();

const client = new generator.Mastodon(TOOT_URL, API_TOKEN);
await client.postStatus(scream);
