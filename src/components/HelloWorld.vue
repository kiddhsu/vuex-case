<template>
  <div class="hello">
    <p>
      輸入值:
      <span>{{ $store.state.name }}</span>
    </p>
    <p>
      輸入值長度 =
      <span>{{ $store.getters.nameLength }}</span>
    </p>
    <span> 輸入完成後，按Enter。 </span>
    <p></p>
    <!-- dispatch 觸發 action 事件, 並傳遞內容 -->
    <input
      type="text"
      v-model="userName"
      placeholder="請輸入"
      @keydown.enter="$store.dispatch('updateName', userName)"
    />
    
  
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      userName: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 400px;
  height: auto;
  margin:0 auto;
  text-align: left;
  font-size: 20px;
}
input {
  font-size: 16px;
  text-align: center;
  padding: 5px 2px;
}
span {
  color: seagreen;
}
p > span {
  color: orangered;
  font-weight: bold;
}
</style>
