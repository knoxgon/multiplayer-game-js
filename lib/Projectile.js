class Projectile extends Entity {
  constructor(damage, x, y, r, speed) {
    super(x, y, r, speed);
    this.damage = damage;
  }
  setDamage(dmg) {
    this.damage = dmg;
  }
}