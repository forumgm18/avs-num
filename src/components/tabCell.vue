<template>
  <div class="tab-cell">
    <div class="cell-head">
      <span class="cel-num" v-if="celNum">{{celNum}}.</span>
      <span class="cel-title">{{celTitle}}</span>
    </div>
    <div class="cell-value">{{ celValue }}</div>
  </div>
</template>

<script>
export default {
  name: 'tabCell',
  props: {
    celValue: String,
    celTitle: String,
    celNum: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tab-cell {
    height: 40px;
    max-width: 87px;

    background-image: none;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
  }
  .cell-head{
    display: flex;
    align-items: center;
    height: 10px;
  }
  .cel-num {
    width: 15px;
    font-size: 10px;

    text-align: center;
    color: #333;
  }
  .cel-title {
    flex: 1 1 auto;
    text-align: left;
    font-size: 9px;

    color: #333;

  }
  .cell-value {
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
  }

  @media (max-width: 400px) {
    .tab-cell { max-width: 70px;}

    .cel-title {font-size: 8px;}

  }
</style>
