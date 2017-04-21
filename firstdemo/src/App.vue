<template>
  <div id="app">
      <input v-model="newItem" @keyup.enter="addNew" />
      <p> {{message}}</p>
      <ol>
        <li v-for='item in items' :class="{finished:item.isFinished}" v-on:click="toggleFinish(item)" >
        {{item.label}}
        </li>
      </ol>
  </div>
</template>

<script>

export default {
  data(){
     return {
        message:"hello vuejs hhhhhhhhh",
        items:[
        ],
         newItem:''
     }
  },
  methods:{
      toggleFinish:function(item){
            item.isFinished = !item.isFinished;
   },
      addNew:function(){
//            console.log(this.newItem);
//            每次enter完了以后清空表单中的值，小小的处理操作。

            this.items.push({
              label:this.newItem,
              isFinished:false
            })
            this.newItem='';
      }
  }
}
</script>

<style>
.finished{
    color: #0a803b;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
