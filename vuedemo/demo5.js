/**
 * Created by Ray on 2017/4/19.
 */

var app5=new Vue({
    el:"#app5",
    data:{
        message:"hello world!hello vue!"
    },
    methods:{
        reverseMessage:function(){
            this.message=this.message.split("").reverse().join("");
        }
    }

});
