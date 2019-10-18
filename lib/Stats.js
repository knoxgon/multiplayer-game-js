class Stats {
  constructor(stats) {
    this.health = stats.hp;
    this.mana = stats.mp;
    this.attack = stats.ap;
    this.defense = stats.dp;
  }
  updateAttack(value) {
    this.attack += value;
  }
  updateDefense(value) {
    this.defense += value;
  }
  updateMana(value) {
    this.mana += value;
  }
  updateHealth(value) {
    this.health += value;
  }
}