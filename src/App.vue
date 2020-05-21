<template>
  <div class="container">
    <div id="app1">
      <h1>Нумерология - Таро</h1>
      <div class="additionally">
        <a href="#" class="additionally-link"><span>Дополнительно</span></a>
        <div class="additionally-content">
          <div class="row source-info header">
            <div class="head-name"></div>
            <div class="el-input__inner1 num-str ">Цифрами</div>
            <div class="el-input__inner1 num-str ark">Аркан</div>
          </div>
          <div class="row source-info">
            <el-input  placeholder="VIN"  v-model="vin"  clearable>  </el-input>
            <div class="el-input__inner num-str"> {{vin | strToNumStr }} </div>
            <div class="el-input__inner num-str ark"> {{vin |  strToArkan }} </div>
          </div>
          <div class="row source-info">
            <el-input  placeholder="Номер машины"  v-model="carNum"  clearable>  </el-input>
            <div class="el-input__inner num-str"> {{carNum | strToNumStr }} </div>
            <div class="el-input__inner num-str ark"> {{carNum | strToArkan }} </div>
          </div>
          <div class="row source-info text">
            <el-input  placeholder="Произвольный текст" :rows="3" type="textarea" v-model="text"  clearable>  </el-input>
            <div class="el-input__inner textarea">{{text | strToNumStr }}</div>
            <div class="el-input__inner num-str"> {{text | strToArkan }} </div>
          </div>
        </div>
      </div>

      <person :index="0"></person>
      <div class="additionally">
        <a href="#" class="additionally-link"><span>Совместимость (Добавить Партнера)</span></a>
        <div class="additionally-content">
          <person :index="1"></person>
        </div>
      </div>

<!--      <div v-if="date && date2">-->
<!--        <h2>Композиты</h2>-->
<!--        <div class="table">-->
<!--          <base-table2-row bgr="part1" title="ОПВ" :name="name" :v="OPV"></base-table2-row>-->
<!--          <base-table2-row bgr="part2" title="ОПВ" :name="name2" :v="OPV2"></base-table2-row>-->

<!--        </div>-->
<!--        <div class="compozit">-->
<!--          <compozit :a1="arkDay" :a2="arkDay2" title="День"></compozit>-->
<!--          <compozit :a1="arkMonth" :a2="arkMonth2" title="Месяц"></compozit>-->
<!--          <compozit :a1="arkYear" :a2="arkYear2" title="Год"></compozit>-->
<!--          <compozit :a1="Mission" :a2="Mission2" title="Миссия"></compozit>-->
<!--          <compozit :a1="ZK" :a2="ZK2" title="ЗК"></compozit>-->
<!--          <compozit :a1="TP[0]" :a2="TP2[0]" tp title="ТП"></compozit>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import * as func from './functions.js';
// import tabCell from './components/tabCell.vue'
import person from './components/person.vue'
// import baseCalculationTable from './components/baseCalculationTable.vue'
// import baseTable2 from './components/baseTable2.vue'

// import baseTable2Row from './components/baseTable2Row.vue'
// import compozit from './components/compozit.vue'

// import taroInput from './components/taroInput.vue'
import store from './store';


export default {
  name: 'App',
  components: {
      // tabCell,
      person,
      // baseCalculationTable,
      // baseTable2,
      // baseTable2Row,
      // compozit,
      // taroInput
  },
  store,
  // data() {
  //   return {
  //     fam: '',
  //     name: '',
  //     // name: 'Андрей',
  //     otch: '',
  //     vin: '',
  //     carNum: '',
  //     text: '',
  //     // date: '1981-08-02',
  //     date: null,
  //     retro: false,
  //     retro2: false,
  //       fam2: '',
  //       name2: '',
  //       // name2: 'Разиля',
  //       otch2: '',
  //       // date2: '1967-07-03',
  //       date2: null,
  //
  //   }
  // },
  filters: {
      charToNum: function(s) {return func.charToNum(s);},
      strToNum: function(s) {return func.strToNum(s); },
      strToNumStr: function(s) { return func.strToNumStr(s);},
      strToArkan: function(s) {return func.strToArkan(s); }

  },
  computed: {
      vin: {
          get () { return this.$store.state.vin },
          set (value) { this.$store.commit('set_Vin', value) }
      },
      carNum: {
          get () { return this.$store.state.carNum },
          set (value) { this.$store.commit('set_CarNum', value) }
      },
      text: {
          get () { return this.$store.state.text },
          set (value) { this.$store.commit('set_Text', value) }
      },

      arkDay: function () { return  func.ArkDay(this.date).toString() || ''; },
      arkDay2: function () { return  func.ArkDay(this.date2).toString() || ''; },
      arkMonth: function () { return  func.ArkMonth(this.date).toString() || ''; },
      arkMonth2: function () { return  func.ArkMonth(this.date2).toString() || ''; },
      arkYear: function () { return  func.ArkYear(this.date).toString() || ''; },
      arkYear2: function () { return  func.ArkYear(this.date2).toString() || ''; },
      ADplusAM: function () { return  func.ADplusAM(this.date).toString() || ''; },
      AMplusAY: function () { return  func.AMplusAY(this.date).toString() || ''; },
      ZK: function () { return  func.ZK(this.date).toString() || ''; },
      ZK2: function () { return  func.ZK(this.date2).toString() || ''; },
      Mission: function () { return  func.Mission(this.date).toString() || ''; },
      Mission2: function () { return  func.Mission(this.date2).toString() || ''; },
      unrealizedGoal: function () { return  func.unrealizedGoal(this.date).toString() || ''; },
      Future: function () { return  func.future(this.date).toString() || ''; },
      Instrument: function () { return  func.Instrument(this.date).toString() || ''; },
      Stimul: function () { return  func.Stimul(this.date).toString() || ''; },
      Troubles: function () { return  func.Troubles(this.date).toString() || ''; },
      perceptionByOthers: function () { return  func.perceptionByOthers(this.date).toString() || ''; },
      selfPerception: function () { return  func.selfPerception(this.date).toString() || ''; },
      traitsMinus: function () { return  func.traitsMinus(this.date).toString() || ''; },
      numberOfLife: function () { return  func.numberOfLife(this.date).toString() || ''; },
      arkNumberOfLife: function () { return  func.ArkNumberOfLife(this.date).toString() || ''; },

      OPV: function () { return  func.arrayOPV(this.date); },
      TP: function () { return  func.arrayTP(this.date); },

      OPV2: function () { return  func.arrayOPV(this.date2); },
      TP2: function () { return  func.arrayTP(this.date2); },

      roof: function () { return  func.arrayRoof(this.date); },
      footer: function () { return  func.arrayFooter(this.date);},

      roof2: function () { return  func.arrayRoof(this.date2); },
      footer2: function () { return  func.arrayFooter(this.date2);},


      matrixCode: function () { return  func.matrixCode(this.date) || 0; }, // Матричный код (или ретроградный)
      trueMatrixCode: function () { return  func.trueMatrixCode(this.date, this.retro) || 0; }, // Истинный Матричный код в случае ретроградности

      matrixCode2: function () { return  func.matrixCode(this.date2) || 0; }, // Матричный код (или ретроградный)
      trueMatrixCode2: function () { return  func.trueMatrixCode(this.date2, this.retro2) || 0; }, // Истинный Матричный код в случае ретроградности


  },

}

</script>

<style>
  * {box-sizing: border-box;}
  body {
    margin: 0;
    padding: 0;

  }
  .part1 { background: #55aaff!important;}
  .part2 { background: #ffaaff!important;}
  .part-duo { background: linear-gradient(90deg, #55aaff 0%, #55aaff 50%, #ffaaff 50%, #ffaaff 100%)!important;}

  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  max-width: 100%;
  background-color: #fafafa;
  padding: 0 15px;
  /*padding-top: 40px;*/
}
  .table {border: 1px solid gray;}
 .container {
     /*border: 1px solid red;*/
   margin: 0 auto;
   max-width: 992px;
   width: 100%;
   margin-bottom: 50px;

 }
 .row {
   display: flex;
   flex-wrap: wrap;
   margin-bottom: 15px;
 }
 .header > div {   text-align: center;}

 .date-info > div {
   margin-bottom: 15px;
   width: calc( 50% - 15px);
 }
 .num-str:not(.ark){   font-size: 14px;}
.date-info > div:not(:last-child) {  margin-right: 15px;}

 .source-info > div {   width: calc( 33% - 15px); }
 .source-info > div:not(:last-child) {   margin-right: 15px; }
.base-info{  margin-bottom: 50px;  padding: 15px 0;}

.block > div {    width: 100%!important;}
.block .label {    text-align: left; margin-bottom: 5px;}
.textarea { height: initial;  align-self: stretch;  font-size: 14px;}

.date-retro {
    display: flex;
    align-items: center;
}
.date-retro > div {
  margin-right: 30px;
  min-width: 140px;
}
.matrix-code {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.matrix-code > div {
  text-align: left;
  width: 100%;
  max-width: 100%;
}
.matrix-content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  /*justify-content: space-between;*/
  min-height: 40px;
}
.matrix-content > div  {  width: 140px;}
.matrix-content > div span:first-child {
  min-width: 100px;
  margin-right: 15px;
  font-size: .8em;
}
.matrix-content > div span:last-child {  font-weight: bold;}

.date-info > div {  width: 48%;}


.additionally {
  text-align: left;
  padding: 30px 15px;

  background-color: #f3f3f3;
  margin: 30px -15px;
}
  .additionally.show {padding-bottom: 0;}
.additionally-content {
  overflow: hidden;
  transition: .5s;
  max-height: 0;
  background-color: #f3f3f3;


}
.additionally-content.show {
  max-height: 2000px;
  padding: 15px 0;
  margin-top: 30px;
}
.additionally-link {
  display: flex;
  align-items: center;

  color: #333;
  text-decoration: none;
  cursor: pointer;
}
.additionally-link:hover {
  color: #999;
  text-decoration: none;
}
.additionally-link:after {
  content: '';
  display: block;
  width: 8px;
  height: 8px;
  border: 0px solid #333;
  border-right-width: 1px;
  border-bottom-width: 1px;
  transform: rotate(45deg);
  transition: .5s;
  margin-left: 15px;
  margin-bottom: 3px;
}
.additionally-link.show {
  background-color: #f3f3f3;
}
.additionally-link.show:after {
  transform: rotate(225deg);
  margin-bottom: -6px;
}

.compozit .compatibility-block{  margin: 15px;}
.compozit {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 30px;

}

@media (max-width: 500px) {
    .date-retro {justify-content: space-between;}
    .date-retro > div { max-width: 50%;}
    .matrix-code {justify-content: space-between;}
    .matrix-code > div { width: 100%;}


}
@media (max-width: 600px) {
   .base-info .row  { margin-bottom: 20px;}
   .source-info > div:first-child {
        max-width: unset;
        width: 100%;
        margin-bottom: 10px;
       margin-right: 0;
    }
    .source-info > div:nth-child(2) {
        max-width: unset;
        flex: 1 1 auto;

    }
    .row.header { font-size: 14px; }
  .date-info > div {  width: 100%;}
}
</style>
