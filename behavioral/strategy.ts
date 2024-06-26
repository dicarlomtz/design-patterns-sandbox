// Let us define a family of algorithms, put each of the into separate class, and make their objects interchangeable

interface IStrategy {
  execute(): void;
}

class AttackWithGun implements IStrategy {
  execute(): void {
    console.log("hit with gun");
  }
}

class AttackWithSword implements IStrategy {
  execute(): void {
    console.log("attack with sword");
  }
}