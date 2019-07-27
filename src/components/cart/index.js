import { createDecipher } from "crypto";

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
			if(state.cart.length===0){
				state.cart.push(payload);
		}
		else{	
			// console.log(payload)
			if(state.cart.length===0){
				state.cart.push(payload);
		}
		else{	
			var flag = state.cart.some((item)=>{
					 if(item.ItemCode===payload.ItemCode){
							 item.count++;
							 return true
					 }
					 else{
							return false;
					 }
			  });
			 if(!flag){
				  state.cart.push(payload);
			  }
			 
		}
		sessionStorage.setItem("cart",JSON.stringify(state))
	}
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
					if(item.count>1){
						item.count--;
					}else{
						item.count=1
					}	
				}
			})
			sessionStorage.setItem("cart",JSON.stringify(state))
		},
		delet(state,id){
			state.cart.forEach((item,index)=>{
				if(item.ItemCode===id){
					state.cart.splice(index,1)
				}
				
			})
			sessionStorage.setItem("cart",JSON.stringify(state))
		}


	},
  actions: {

  }
}