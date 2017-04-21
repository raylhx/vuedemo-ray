/**
 * Created by Ray on 2017/4/19.
 */
Vue.component('todo-item',{
    props:['todo'],
    template:'<li>{{todo.text}}</li>'
});

var app7=new Vue({
    el:'#app7',
    data:{
        groceryList:[
            {text:'番茄'},
            {text:'鸡蛋'},
            {text:'番茄炒鸡蛋'}
        ]
    }
});