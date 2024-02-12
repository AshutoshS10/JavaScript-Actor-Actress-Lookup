// Store actor/actress names in an object
const actors = {
    "Salman Khan": ["Ek Tha Tiger", "Dabangg", "Sultan", "Kick", "Partner"],
    "Vidyut Jamval": ["Force", "Commando", "Junglee", "Khuda Haafiz"],
    "Leonardo DiCaprio": ["Inception", "Titanic", "The Wolf of Wall Street"],
    "Priyanka Chopra": ["Andaaz ", "Bajirav Mastani", "Agneepath", "Krrish", "Barfi", "Mujhse Shaadi Karogi"],
    "Joan Abraham": ["Force", "Dhoom", "Shootout at Wadala", "Welcome Back", "Dostana"],
    "Rajpal Yadav": ["Mujhse Shaadi Karogi", "Bhagam Bhag", "Partner", "Coolie No.1"]
  };

  //method to to convert input into proper format (first letter capital & other in lowercase)
  const normalizedInput = function (input){
    let str = input.split(" ");
    for(let i =0; i < str.length; i++){
        str[i] = str[i][0].toUpperCase() + str[i].toLowerCase().substring(1).toLowerCase();
    }
    return str.join(" ");
  }
  
  // Method to find actors by movie name (case-insensitive)
  function findActorByMoviesName(movieName) {
    if (!movieName) {
      throw new Error("Invalid movie name. Please provide a movie name.");
    }
    const updatedMovieName = normalizedInput(movieName);
    let actorsFound = [];
    for (const actorName in actors) {
      if (actors[actorName].includes(updatedMovieName)) {
        actorsFound.push(actorName);
      }
    }
    if (actorsFound.length > 0) {
       return (`Actors in "${updatedMovieName}": ${actorsFound.join(", ")}`);
    } else {
      return `No actors found in "${movieName}".`;
    }
  }

  //// Method to find movies by actor name (case-insensitive)
  function findMoviesByActorName(actorName) {
    if (!actorName) {
      throw new Error("Invalid actor name. Please provide an actor name.");
    }

    const updatedActorName = normalizedInput(actorName);
    
    if (actors.hasOwnProperty(updatedActorName)) {
      return `${updatedActorName} has appeared in the following movies: ${actors[updatedActorName].join(", ")}`;
    } else {
      return `Actor "${actorName}" not found.`;
    }
  }
  console.log(findActorByMoviesName("pArtner"));
  console.log(findMoviesByActorName("rAjpAl yAdav"));
  
