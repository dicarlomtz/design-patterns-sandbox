// Provides an interface for creating objects in a superclass, but allows
// subclasses to alter the type of objects that will be created

interface Enemy {
  attack(): void;
}

class BooEnemy implements Enemy {
  attack(): void {
    console.log("Boo attacks!");
  }
}

class KoopaEnemy implements Enemy {
  attack(): void {
    console.log("Koompa attacks!");
  }
}

class Goomba implements Enemy {
  attack(): void {
    console.log("Goomba attacks!");
  }
}

// Factory Method
interface EnemyFactory {
  createEnemy(): Enemy;
}


// Factory Method Implementation
class RandomDifficultEnemyFactory implements EnemyFactory {
  createEnemy(): Enemy {
    return new Goomba();
    // Other enemies
  }
}

// Factory Method Implementation
class MediumEnemyFactory implements EnemyFactory {
  createEnemy(): Enemy {
    return new BooEnemy();
    // Other enemies
  }
}

// Factory Method Implementation
class EasyEnemyFactory implements EnemyFactory {
  createEnemy(): Enemy {
    return new KoopaEnemy();
    // Other enemies
  }
}

class Game {
  private mode: 'easy' | 'medium' | 'hard';
  private enemyFactory: EnemyFactory;
  private enemy: Enemy;

  constructor(mode: 'easy' | 'medium' | 'hard') {
    this.mode = mode;
    this.setupGame();
  }

  private setupGame(): void {
    switch(this.mode) {
      case 'easy':
        this.enemyFactory = new EasyEnemyFactory();
        break;
      case 'medium':
        this.enemyFactory = new MediumEnemyFactory();
        break;
      case 'hard':
        this.enemyFactory = new RandomDifficultEnemyFactory();
        break;
    }

    this.enemy = this.enemyFactory.createEnemy();
  }

  public play(): void {
    this.enemy.attack();
  }
}

const easyGame = new Game('easy');
easyGame.play();

const mediumGame = new Game('medium');
mediumGame.play();

const hardGame = new Game('hard');
hardGame.play();

