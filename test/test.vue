<template>

</template>

<script>
	export default {
		name: ' ',
        data:function () {

	        return {
		        api:{},
                flag:false
	        }
        },
        methods:{
            get(){  //获取数据并绑定至data.api
                if(!flag){
                	return console.log( "非第一次请求" )
                }

                // 此处略去几行代码

                if(JSON.stringify(reponse.data) ===  JSON.stringify(this.api)){
                	return console.log( "新数据和上次请求到的数据相同" )
                }

                this.api = resposne.data;

                this.flag =  true
            } ,


            get_setInterval(){

            	if(!flag){
            		return console.log( "数据还未绑定成功" )
                }

	            setInterval( this.get , 1000 )

            }
			
			
        },
        created(){
			this.get() // 获取数据并绑定至data.api

            this.get_setInterval()   // 定期执行get 方法
        }

	}
</script>

<style lang="less">


</style>
