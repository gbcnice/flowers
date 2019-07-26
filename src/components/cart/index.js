export default {
	state: {
		cart:sessionStorage.getItem("cart")?JSON.parse(sessionStorage.getItem("cart")).cart:[]
	   
	},
	
  	getters:{
  		money(state){
			//   console.log(state)
  			var m=0;
  				state.cart.forEach((item)=>{
  					 m+=item.Price*item.count;
  				})
  			return m;
  		},
  		count(state){
  			var m=0;
  				state.cart.forEach((item)=>{
  					 m+=item.count;
  				})
  			return m;
  		}
  	},
	mutations: {
		add(state,payload){
			// console.log(payload)
			if(state.cart.length===0){
				state.cart.push(payload);
		}
		else{	
			// console.log(state.cart[0])	   	   
			var flag = state.cart.some((item)=>{
					 if(item.ItemCode===payload.ItemCode){
							 item.count++;		   	  	   	
							 return true
					 }
					 else{
							return false;
					 }
			  });
		
			 if(!flag)
			 {
				  state.cart.push(payload);
			  }
			  
		}
		sessionStorage.setItem("cart",JSON.stringify(state))
		console.log()
		},
		inc(state,id){
			state.cart.forEach((item)=>{
				if(item.ItemCode===id){
					item.count++;
				}
			})
			sessionStorage.setItem("cart",JSON.stringify(state))
		},
		dec(state,id){
			state.cart.forEach((item)=>{
				if(item.ItemCode===id){
					if(item.count>0){
						item.count--;
					}	
				}
			})
			sessionStorage.setItem("cart",JSON.stringify(state))
		}


	},
  actions: {

  }
}