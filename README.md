# PathFinder
Object State to Object State Path Finder Algorithm


const pathFinder = new PathFinder(
  { // initState
    x: 0,
    y: 1,
  }, 
methods);

pathFinder.goto(
    { // targetState
      x: 1,
      y: 1,
    },
    { // avoidState
      x: greaterThan -2 lessThan 2,
      y: greaterThan -2 lessThan 2,
    }
);
