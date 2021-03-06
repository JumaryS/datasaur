/********************
 * HELPER FUNCTIONS *
 ********************/

const makeDino = function(species,period,carnivore,extinct = false){
  const dino = {
    species: species,
    period: period,
    carnivore: carnivore,
    extinct: extinct,
  };

  return dino;
}

const makeSingular = function(dino){

  const originalArray = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  if (originalArray.species.endsWith('us')){
    originalArray.species = originalArray.species.slice(0,originalArray.species.length - 2)}
    
  return originalArray
}

const truncateSpecies = function(dino){
  const originalArray = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  };
  if (originalArray.species.length > 10 ){
    originalArray.species = originalArray.species.slice(0,7)+ "..."
    
    }
return originalArray 
}

const makeExtinct = function(dino){

  const originalArray = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }

  originalArray.extinct = true
  return originalArray
}


const isCarnivore = function(dino){

  const originalArray = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }

  
  return originalArray.carnivore === true
}


const isExtinct = function(dino){
  const originalArray = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }

  return originalArray.extinct === true
}

const isTriassic = function(dino){
  const originalArray = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }

  
  return originalArray.period === 'Triassic'
}



const isNotTriassic = function(dino){
  

  
  return   (dino.period !== "Triassic")
}

const isJurassic = function(dino){
  const originalArray = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }

  
  return originalArray.period === 'Jurassic'
}

const isCretaceous = function(dino){
  const originalArray = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }

  
  return originalArray.period === 'Cretaceous'
}

const isNotExtinct = function(dino){
  const originalArray = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  return originalArray.extinct === false
}
  

const herbavore = function(dino){
  const originalArray = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  return originalArray.carnivore === false
}

const isFirstAlphabeticallyBySpecies = function (name1, name2) {
  if (name1.species > name2.species) {
    return 1;
  } else if (name1.species < name2.species) {
    return -1;
  } else {
    return 0;
  }
};

const extinctIsLast = function (name1, name2) {
  if (name1.extinct > name2.extinct) {
    return 1;
  } else if (name1.extinct < name2.extinct) {
    return -1;
  } else {
    return 0;
  }
};

const carnivoreIsFirst = function (name1, name2) {
  if (name1.carnivore > name2.carnivore) {
    return -1;
  } else if (name1.carnivore < name2.carnivore) {
    return 1;
  } else {
    return 0;
  }
};
const isInPeriodOrder = function (name1, name2) {
  if (name1.period === 'Jurassic' && name2.period === 'Triassic') {
    return 1;
  } else if (name1.period === 'Cretaceous' && name2.period === 'Triassic') {
    return 1;
  } else if (name1.period === 'Cretaceous' && name2.period === 'Jurassic'){
    return 1;
  }else if (name1.period === 'Jurassic' && name2.period === 'Cretaceous') {
    return -1;
  }else if (name1.period === 'Triassic' && name2.period === 'Cretaceous') {
    return -1
  }else if (name1.period === 'Triassic' && name2.period === 'Jurassic') {
    return -1;
  }else {
    return 0
  }
}




/***********************
 * ITERATION FUNCTIONS *
 **********************/
const singularizeDinos = function(dino){
  return dino.map(makeSingular)
}
const truncateDinos = function(dino){
  return dino.map(truncateSpecies)
}

const makeAllExtinct = function(dino){
  return dino.map(makeExtinct)
}

const carnivoresOnly= function(dino){
return dino.filter(isCarnivore)
}

const herbivoresOnly= function(dino){
return dino.filter(herbavore)
}

const extinctOnly = function(dino){
  return dino.filter(isExtinct)
}


const notExtinct = function(dino){
  return dino.filter(isNotExtinct)
}

const triassicOnly = function(dino){
  return dino.filter(isTriassic)
}
const notTriassic = function(dino){
  return dino.filter(isNotTriassic)
}

const bySpecies = function (dino){
  const copyDino = dino.slice()
    return copyDino.sort(isFirstAlphabeticallyBySpecies)
  }
  
  const byExtinctLast = function (dino){
    const copyDino = dino.slice()
    return copyDino.sort(extinctIsLast)
  }
  
  const byCarnivoresFirst = function (dino){
  const clonedDino = dino.slice()
  
  return clonedDino.sort(carnivoreIsFirst)
  
  }
  
  const byPeriod = function (dino){
  const clonedDino = dino.slice()
  
  return clonedDino.sort(isInPeriodOrder)
  }
/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

  if (typeof makeDino === 'undefined') {
    makeDino = undefined
  }

  if (typeof makeSingular === 'undefined') {
    makeSingular = undefined
  }

  if (typeof truncateSpecies === 'undefined') {
    truncateSpecies = undefined
  }

  if (typeof makeExtinct === 'undefined') {
    makeExtinct = undefined
  }

  if (typeof isCarnivore === 'undefined') {
    isCarnivore = undefined
  }

  if (typeof isExtinct === 'undefined') {
    isExtinct = undefined
  }

  if (typeof isTriassic === 'undefined') {
    isTriassic = undefined
  }

  if (typeof isJurassic === 'undefined') {
    isJurassic = undefined
  }

  if (typeof isCretaceous === 'undefined') {
    isCretaceous = undefined
  }

  if (typeof isFirstAlphabeticallyBySpecies === 'undefined') {
    isFirstAlphabeticallyBySpecies = undefined
  }

  if (typeof extinctIsLast === 'undefined') {
    extinctIsLast = undefined
  }

  if (typeof carnivoreIsFirst === 'undefined') {
    carnivoreIsFirst = undefined
  }

  if (typeof isInPeriodOrder === 'undefined') {
    isInPeriodOrder = undefined
  }

  if (typeof singularizeDinos === 'undefined') {
    singularizeDinos = undefined
  }

  if (typeof truncateDinos === 'undefined') {
    truncateDinos = undefined
  }

  if (typeof makeAllExtinct === 'undefined') {
    makeAllExtinct = undefined
  }

  if (typeof carnivoresOnly === 'undefined') {
    carnivoresOnly = undefined
  }

  if (typeof herbivoresOnly === 'undefined') {
    herbivoresOnly = undefined
  }

  if (typeof extinctOnly === 'undefined') {
    extinctOnly = undefined
  }

  if (typeof notExtinct === 'undefined') {
    notExtinct = undefined
  }

  if (typeof triassicOnly === 'undefined') {
    triassicOnly = undefined
  }

  if (typeof notTriassic === 'undefined') {
    notTriassic = undefined
  }

  if (typeof bySpecies === 'undefined') {
    bySpecies = undefined
  }

  if (typeof byExtinctLast === 'undefined') {
    byExtinctLast = undefined
  }

  if (typeof byCarnivoresFirst === 'undefined') {
    byCarnivoresFirst = undefined
  }

  if (typeof byPeriod === 'undefined') {
    byPeriod = undefined
  }



module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  isFirstAlphabeticallyBySpecies,
  extinctIsLast,
  carnivoreIsFirst,
  isInPeriodOrder,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
  bySpecies,
  byExtinctLast,
  byCarnivoresFirst,
  byPeriod,
}
