function Monday() {
    exerciseRoutine(liftWeights);
    /*runFiveMiles(); //console.log('Go for a five-mile run');
    liftWeights(); //console.log('Pump iron');*/
  }
  
  function Tuesday() {
      exerciseRoutine(swimFortyLaps);
    /*runFiveMiles(); //console.log('Go for a five-mile run');
    swimFortyLaps(); //console.log('Swim 40 laps');*/
  }
  
  function Wednesday() {
      exerciseRoutine(runFiveMiles);
    /*runFiveMiles(); //console.log('Go for a five-mile run');
    runFiveMiles(); //console.log('Go for a five-mile run');*/
  }
  
  function Thursday() {
      exerciseRoutine(liftWeights);
    /*runFiveMiles(); //console.log('Go for a five-mile run');
    liftWeights(); //console.log('Pump iron');*/
  }
  
  function Friday() {
      exerciseRoutine(() => console.log('Stretch! Work that core!'));
   /*runFiveMiles(); //console.log('Go for a five-mile run');
    swimFortyLaps(); //console.log('Swim 40 laps');*/
  }

  function runFiveMiles() {
    console.log('Go for a five-mile run');
  }
  function liftWeights() {
    console.log('Pump iron');
  }
  
  function swimFortyLaps() {
    console.log('Swim 40 laps');
  }

  function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }

  function morningRoutine(exercise) {
    var breakfast = null;
  
    if (exercise === liftWeights) {
      breakfast = 'protein bar';
    } else if (exercise === swimFortyLaps) {
      breakfast = 'kale smoothie';
    } else {
      breakfast = 'granola';
    }
  
    exerciseRoutine(exercise);
  
    
    return function() {
      console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    }
  }
  var afterExercise = morningRoutine(liftWeights);

  afterExercise();