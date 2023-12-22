class PathFinder {
  constructor(initState, methods){
    this.state = initState; 
    this.methods = methods;    
  }
  paths = [];
  state = {
    // properties to have methods modify
  };
  methods = {
    // These are the methods to get populated by the codebase
  };
  goto(targetState, fromState, avoidState){
    // targetState is the end goal ... the destination.
    // fromState is the starting point status
    // avoidState means it's not allowed to have certain values
  }
}
