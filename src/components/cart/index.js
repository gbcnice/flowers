export default {
    state:{
        cart:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")).cart:[]
    },
    geeters:{
        money(state){
            var m=0;
            state.cart.forEach((item)=>{
                m+=item.price*item.count;
            })
           return m
        },
        count(state){
             var m=0;
             state.cart.forEach((item)=>{
                 m+=item.count;
             })
             return m;
        }
    },
    mutations:{
        add(state,payload){
            if(state.cart.length===0){
                state.cart.push(payload)
            }else{
                var flag=state.cart.some((item)=>{
                    if(item.id===payload.id){
                          item.count++;
                          return true
                    }else{
                        return false;
                    }
                });
                if(!flag){
                    state.cart.push(payload);
                }
            }
            localStorage.setItem("cart",JSON.stringify(state))
        },
        inc(state,id){
            state.cart.forEach((item)=>{
                if(item.id===id){
                    item.count++;
                }
            })
            localStorage.setItem("cart",JSON.stringify(state))
        },
        dec(state,id){
            state.cart.forEach((item)=>{
                if(item.id===id){
                    if(item.count>0){
                        item.count--;
                    }
                }
            })
            localStorage.setItem("cart",JSON.stringify(state))
        }
    },
    actions: {

    }
}