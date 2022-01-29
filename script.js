function largest(n,xs){

    let mas = []
    xs.sort((a, b) => b - a);
  
    for(let i = 0; i < n; i++){
         mas.push(xs[i]);
        
    }
    mas.sort(function(a, b) {
        return a - b;
      });
 
 console.log(mas)  
  }


largest(2,[10,9,8,7,6,5,4,3,2,1]);


 