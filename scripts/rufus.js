/*
1. Characters
2. Weapons
3. Buildings
4. Map
5. Mobs
6. Cars
*/

const grenade = {
  name: "grenade",
  damage: 400,
  range: 10,
  areaOfEffect: 20,
  rounds: 0,
  manual: true,
  delay: 3
}

const chainsaw = {
  name: "chainsaw",
  damage: 300,
  range: 1,
  areaOfEffect: 1,
  rounds: "infinite",
  manual: true,
  delay: 0
}

const character = {
  name: "Duke Nukem",
  health: 10000000000000,
  inventory: [
      chainsaw,
      grenade
  ],
  pickUpWeapon: function (weapon) {
      this.inventory.push(weapon)
  },
  dropWeapon: function (weapon) {
      const weaponIndex = this.inventory.findIndex((w) => { // findIndex method iterates over elements in an array. Needs a callback function within it to return a boolean. Once the callback function returns true, the method will return the index of the element that was last checked
        return w.name === weapon.name
      })
      this.inventory.splice(weaponIndex, 1) // splice method will remove elements from an array starting at the index provided as the first argument (weaponIndex in this case). It will then remove the number of elements specified as the second argument (1 in this case)
  }
}

character.dropWeapon(grenade)

console.log(character.inventory)

const apartmentComplex = {
  height: 100,
  depth: 30,
  width: 50,
  address: {
      lat: 50.45356,
      long: 946.2358478
  },
  stories: 8
}


const gameMap = {
  width: 3000,
  height: 12,
  buildings: [
      apartmentComplex
  ]
}