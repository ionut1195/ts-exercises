interface exerciseCalcResult {
	periodLength: number,
  	trainingDays: number,
  	success: boolean,
  	rating: number,
  	ratingDescription: string,
  	target: number,
  	average: number,
    total: number
}

const parseValues = (args: Array<string>): Array<number> => {
  // if (args.length < 8) throw new Error('Not enough arguments');
  // if (args.length > 8) throw new Error('Too many arguments');

  args.forEach((element, idx) => {

    if (idx > 1){
      console.log(`${element} -- id ${idx}`)
      if ( isNaN(Number(element)))
        throw new Error('Some provided values were not numbers!');
    }
  });
  return args.map(element => Number(element)).filter(element => !isNaN(element))
}

const calcExercises = (args: Array<number>): exerciseCalcResult => {
  console.log(args)
  return {
    periodLength: args.length,
    trainingDays: args.filter(elem => elem > 0).length ,
    success: false,
  	rating: args.length % 3 === 0 ? 1 : 2,
  	ratingDescription: args.length % 3 === 0 ? 'very good!' : 'not bad',
  	target: 2,
  	average: args.reduce((previousValue, currentValue) => previousValue + currentValue, 0) / args.length,
    total: args.reduce((first, second) => (first + second), 0 )
  }
}

try {
	// calcExercises(parseValues(process.argv))
  console.log(calcExercises(parseValues(process.argv)))
  } catch (error: unknown) {
	let errorMessage = 'Something bad happened.'
	if (error instanceof Error) {
	  errorMessage += ' Error: ' + error.message;
	}
	console.log(errorMessage);
  }