const ADVERBS = ["GENTLY", "SCREAMILY", "", "", ""];

const VERBS = [
  "DANCE WITH",
  "HIDE FROM",
  "HUG",
  "PLAY WITH",
  "SCREAM WITH",
  "THINK ABOUT",
  "SNUGGLE",
];

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

const TARGETS = ["BUNNY", "DINOSAUR", "DOG", "KITTY", "PTERYODACTYL", "SHARK"];

export default () => {
  const adverb = pick(ADVERBS);
  const verb = pick(VERBS);
  const target = pick(TARGETS);

  return `${adverb} ${verb} THE ${target}`.trim();
};
