class PathFinder {
  constructor(initState, methods){
    this.state = initState; 
    this.methods = methods;    
  }
  paths = [];
  intersections = [];
  state = {
    // properties to have methods modify
  };
  nodes = {
    // connections between dots/nodes for paths
  };
  methods = {
    // These are the methods to get populated by the codebase
  };
  goto(targetState, fromState, avoidState){
    // Placeholder logic for the goto method
    if (targetState === undefined || fromState === undefined) {
      throw new Error('Please provide targetState and fromState');
    }
    if (stateMatch(targetState, fromState)){
      return "same";
    }
    if (avoidState("", fromState)){
      return "avoid";
    }

    // Perform logic to navigate from fromState to targetState
    // (pathfinding logic goes here)

    // For demonstration purposes, assuming a direct path from fromState to targetState
    const path = `Path from ${fromState} to ${targetState}`;
    this.paths.push(path);
    return path;
  }
  stateMatch(stateA, stateB){
    return stateA === stateB;
  }
}
