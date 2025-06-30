const data = [
  {
    name: "Etemon",
    level: "Ultimate",
    type: "Puppet",
    img: "https://digimon.net/cimages/digimon/etemon.jpg",
    description:
      "An unidentified Digimon that suddenly appeared in the Digital World. The self-proclaimed “King of Digimon,” Etemon’s combat strength is unimaginable. Oh, and rumors say it manipulates the mysterious Monzaemon from behind the scenes. Clad in a reinforced monkey suit that withstands any and all attacks, Etemon bounds all over the world to this very day for the sake of unending battles. It uses its special move Love Serenade to break the enemy’s heart and sap their fighting spirit, or Dark Spirits to attack with a black sphere that obliterates all it touches.",
  },
  {
    name: "MetalEtemon",
    level: "Mega",
    type: "Android",
    img: "https://digimon.net/cimages/digimon/metaletemon.jpg",
    description:
      "The “King of Digimon”... This ultimate Digimon was once referred to as such. MetalEtemon sought strong individuals, embarking on a journey of brutal encounters. Although it obtained valuable combat data, the constant battles left it with severe physical damage. It then researched its own weaknesses from the data it gained in battle, completely reviving itself as the ultimate fully mechanized battle machine. MetalEtemon has completely coated the surface of its body with Chrondigizoid, a substance used by Metal Digimon. It uses its special move Banana Slip to trip up its opponent, despite having maximized its basic combat abilities. An invincible fighter has been born, utilizing both strong and dirty fighting techniques.",
  },
  {
    name: "WereGarurumon",
    level: "Ultimate",
    type: "Beast man",
    img: "https://digimon.net/cimages/digimon/weregarrumon.jpg",
    description:
      "A Beast Man Digimon that Digivolved from Garurumon, and which can now walk on two legs. Becoming bipedal reduced WereGarurumon’s speed, but turned it into a Commando-type Digimon with enhanced offensive and defensive power, as well as a knack for tactics. Retaining the leg strength of Garurumon, WereGarurumon’s kicks are extremely powerful, and it has one of the best jumps in the world of Digimon. It is also extremely loyal and will do anything if ordered by its master, making it highly reliable. WereGarurumon’s special move is Wolf Claw, by which it slices opponents to shreds with its sharp claws.",
  },
  {
    name: "MetalGarurumon",
    level: "Mega",
    type: "Android",
    img: "https://digimon.net/cimages/digimon/metalgarurumon.jpg",
    description:
      "This final form of Garurumon has been enhanced by making most of its body metallic. Despite this process, MetalGarurumon has not lost any agility, and it can destroy its foes using countless weapons hidden all over its body. The four laser sights at the tip of its nose emit invisible beams, and MetalGarurumon makes use of a wide array of sensors, including those for infrared- and X-rays, to analyze its targets. This makes it impossible to escape from MetalGarurumon, even in perfect darkness. What’s more, the mechanical arms extending from MetalGarurumon’s back can emit photoelectric beam wings, allowing it to fly through Net Space at incredible speed. MetalGarurumon’s special move is Freezing Breath, by which it breathes out a blast of air at absolute zero that freezes everything it touches. This move will instantly suspend the vital functions of any living creature it hits. It also uses Garuru Tomahawk to fire a huge missile called the Freeze Bomber from its chest, and Ice Wolf Claw to fire all the weapons on its body at once and wipe out its foes.",
  },
];

class InfoContext {
  constructor(strategy, data, element) {
    this.setStrategy(strategy);
    this.data = data;
    this.element = element;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  show() {
    this.strategy.show(this.data, this.element);
  }
}

class ListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((ac, digimon) => {
      return (
        ac +
        `<div>
        <h2>${digimon.name}</h2>
        <p>${digimon.level}</p>
        </div>
        <hr>`
      );
    }, "");
  }
}

class DetailedStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((ac, digimon) => {
      return (
        ac +
        `<div>
        <h2>${digimon.name}</h2>
        <p>${digimon.level}</p>
        <p>${digimon.type}</p>
        <p>${digimon.description}</p>
        </div>
        <hr>`
      );
    }, "");
  }
}
class ImageStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((ac, digimon) => {
      return (
        ac +
        `<div>
        <img width="200px" src="${digimon.img}">
        <h2>${digimon.name}</h2>

        </div>
        <hr>`
      );
    }, "");
  }
}

const strategies = [
  new ListStrategy(),
  new DetailedStrategy(),
  new ImageStrategy(),
];

const info = new InfoContext(new ListStrategy(), data, content);
info.show();

slcOptions.addEventListener("change", (event) => {
  const op = event.target.value;
  info.setStrategy(strategies[op]);
  info.show();
});
