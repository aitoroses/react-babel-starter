// Create an instance of Asteroid
export var asteroid = new Asteroid("localhost:3000");

// On connected
asteroid.on("connected", () => {
  console.log("Succesfully connected to meteor backend.");
});

// Suscribe to meteor collections
export var users = asteroid.getCollection("users");
export var usersQuery = users.reactiveQuery({});
