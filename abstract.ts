// base class as template for all other classes
abstract class BaseFighter {
    fight() {
        console.log(`Fight! ${this.attack()}`);
    }

    abstract attack(): void;
}

class Archer extends BaseFighter {
    attack() {
        console.log('Arrow!');
        return "Arrow!";
    }
}


class Barbarian extends BaseFighter {
    attack() {
        console.log('Sword!');
        return "Sword!";
    }
}

class HogRider extends BaseFighter {
    attack() {
        console.log('Spear!');
        return "Spear!";
    }
}

const archer = new Archer();
archer.fight();