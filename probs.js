module.exports = {

bottle1: function(n) {
        
	while (n > 2) {
  	return n + " bottles of beer on the wall, " + n + " bottles of beer. Take one down and pass it around, " + (n-1) + " bottels of beer on the wall.";
 	n--;
  
	}

	if (n == 2) {
  	return n + " bottles of beer on the wall, " + n + " bottles of beer. Take one down and pass it around, " + (n-1) + " bottel of beer on the wall.";
  	i--;
	}

	if (n == 1) {
  	return "1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottels of beer on the wall. No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.";
  			}

	},

	// (Recursive)

	bottle2: function(){

			return "1";

	},

	sumOfRange1: function(n){
  
  		var total = 0;  
  
      for (i = 0; i <= n; i++) {
    
		total += i;
			} 
  
  		return total;
},

	// (Recursive)

 sumOfRange2: function(num) {
        
        return function sumOfRangeRInner(innerNum) {
            
            if (innerNum === 1) {
                
                return 1;
            }
                return innerNum + sumOfRangeRInner(innerNum-1);

        }(num); // sumOfRangeRInner  
    }, // sumOfRange

// 	sumOfRange2: function sumOfRange2(num){
    
//     	if (num === 1){
      		
//       		return 1;
//     					}
    
//     return num + sumOfRangeInner(num-1);
  

// 			// return 1;

// },

	power1: function(n,x){

			return 1;
	},

	// (Recursive)

	power2: function power2(num, exp){
		
		if (exp === 0){

		return 1;	
	}
        return(num * power2(num, exp -1));

}







	




















}



