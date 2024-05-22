//  Da se definiraat 3 scope-a i vo site od niv da ima edna promenliva od tip number. Vo vtoriot scope da se ispecati proizvodot na site 3 promenlivi. Moze da se dodavaat povekje promenlivi vo bilo koj scope.

let globalScope = 10;

{
  let z = 2;       //scope 1
  
  {
    let y = 3;      //scope 2
    let proizvod;
    
    {
      let w = 4;          //scope 3
      proizvod = z*y*w;
    }

    console.log(proizvod);
  }
}
