var greet = function(name) {
  let proper = name[0].toUpperCase() + name.slice(1).toLowerCase()
  return "Hello " + proper + "!"
};