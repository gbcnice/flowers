import axios from "axios"
export default {
	state: {
		products:[]  //产品的列表
  	},
	mutations: {
		changeList(state,payload){
			state.products = payload;
		}

	},
  actions: {
      getLise(){
        $axios.get("http://localhost:4000/secdetail/",{
            params:{
                id:this.id,
            }
        }).then((res)=>{
            this.info=res.data[0].fenlei.filter((item)=>{
                return (item.ItemCode == this.idx)
            })
            console.log(this.info[0])
            this.url = this.info[0].url
            this.Cpmc = this.info[0].Cpmc
            this.Instro = this.info[0].Instro
            this.LinePrice = this.info[0].LinePrice
            this.Price = this.info[0].Price
        })
      }
  }
}