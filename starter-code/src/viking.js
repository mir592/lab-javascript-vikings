// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function (){
  return this.strength;
};

Soldier.prototype.receiveDamage = function (damage){
  this.health -= damage;
};

// Viking
function Viking (name, health, strength) {
  this.name = name;
  Soldier.call(this,health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.attack = function (){
  return this.strength;
};

Viking.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if (this.health > 0){
    return this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in act of combat.";
  }
};

Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
};
// Saxon
function Saxon (health, strength) {
  Soldier.call(health, strength);
  this.health = health;
  this.strength = strength;
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.attack = function(){
  return this.strength;
};

Saxon.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if (this.health > 0){
    return "A Saxon has received " + damage + " points of damage";
  } else {
    return "A Saxon has died in combat";
  }
};

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];

}

War.prototype.addViking = function(Viking){
  this.vikingArmy.push(Viking);
};

War.prototype.addSaxon = function(Saxon){
  this.saxonArmy.push(Saxon);
};

};
War.prototype.vikingAttack = function(){
     var saxonRand = parseInt(Math.random()*((this.saxonArmy).length)); //Cogemos a un saxon aleatorio
     var vikingRand = parseInt(Math.random()*((this.vikingArmy).length)); //cogemos a un viking aleatorio
     this.saxonArmy[saxonRand].health -= this.vikingArmy[vikingRand].strength;
     var result = this.saxonArmy[saxonRand].name + " has received " + this.vikingArmy[vikingRand].strength + " points of damage"; //(esta frase viene en VikingSpcec.HTML)
     if(this.saxonArmy[saxonRand].health<=0){
       this.saxonArmy.splice(saxonRand,1); // splice borra del array saxonArmy el elemento de índice [saxonRand] y el número de elementos (1) desde saxonRand
       result = "A Saxon has died in combat";
       return result;
     }
 };


 War.prototype.saxonAttack = function(){
      var saxonRand = parseInt(Math.random()*((this.saxonArmy).length)); //Cogemos a un saxon aleatorio
      var vikingRand = parseInt(Math.random()*((this.vikingArmy).length)); //cogemos a un viking aleatorio
      this.vikingArmy[vikingRand].health -= this.saxonArmy[saxonRand].strength;
      var result = this.vikingArmy[vikingRand].name + " has received " + this.saxonArmy[saxonRand].strength + " points of damage"; //(esta frase viene en VikingSpcec.HTML)
      if(this.vikingArmy[vikingRand].health<=0){
        this.vikingArmy.splice(vikingRand,1); // splice borra del array vikingArmy el elemento de índice [vikingRand] y el número de elementos (1) desde vikingRand
        result = viking.name + " has received " + saxon.strength + " points of damage";
        return result;
      }
  };


 War.prototype.showStatus = function(){
     var result;
     if (this.saxonArmy.length === 0){
       result = "Vikings have won the war of the century!";
     }else if (this.vikingArmy.length === 0) {
       result= "Saxons have fought for their lives and survive another day...";
     }else{
       result= "Vikings and Saxons are still in the thick of battle.";
     }
     return result;
 };
