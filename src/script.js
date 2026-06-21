export default function sort(heroes) {
  heroes.sort((a, b) => b.health - a.health);
  return heroes;
};


