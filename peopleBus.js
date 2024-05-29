var number = function(busStops){
   const sum1rstelem = busStops.reduce((acum,busStop) => acum + busStop[0],0);
  const suma2sndelem = busStops.reduce((acum,busStop) => acum + busStop[1],0);
  return (sum1rstelem - suma2sndelem);
}
