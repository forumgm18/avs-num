<template>
  <div class="container">
    <div id="app">
<!--      <img alt="Vue logo" src="./assets/logo.png">-->
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

      <div class="base-info">
        <div class="row source-info header">
          <div class="head-name"></div>
          <div class="el-input__inner1 num-str ">Цифрами</div>
          <div class="el-input__inner1 num-str ark">Аркан</div>
        </div>
<!--        <div class="row source-info">-->
<!--          <el-input  placeholder="Фамилия"  v-model="fam"  clearable>  </el-input>-->
<!--          <div class="el-input__inner num-str"> {{fam | strToNumStr }} </div>-->
<!--          <div class="el-input__inner num-str ark"> {{fam | strToArkan }} </div>-->
<!--        </div>-->
        <taro-input placeholder="Фамилия" :str="fam"></taro-input>
        <div class="row source-info">
          <el-input  placeholder="Имя"  v-model="name"  clearable>  </el-input>
          <div class="el-input__inner num-str"> {{ name | strToNumStr }} </div>
          <div class="el-input__inner num-str ark"> {{ name | strToArkan }} </div>
        </div>
        <div class="row source-info">
          <el-input  placeholder="Отчество"  v-model="otch"  clearable>  </el-input>
          <div class="el-input__inner num-str"> {{otch |strToNumStr }} </div>
          <div class="el-input__inner num-str ark"> {{otch | strToArkan }} </div>
        </div>
        <div class="row date-info">

          <template>
            <div class="block">
                <div class="label">Дата Рождения:</div>
                <div class="date-retro">
                    <el-date-picker
                          v-model="date"
                          type="date"
                          format="dd.MM.yyyy"
                          value-format="yyyy-MM-dd"
                          placeholder="Дата рождения">
                  </el-date-picker>
                  <el-checkbox v-model="retro">Ретроградный</el-checkbox>
              </div>
            </div>
          </template>
          <div class="matrix-code">
              <div class="label">Матричный код</div>
              <div class="matrix-content">
                <div v-if="retro">
                  <span>Ретроградно:</span>
                  <span>{{matrixCode}}</span>
                </div>
                <div>
                  <span>Истинный:</span>
                  <span>{{trueMatrixCode}}</span>
                </div>
              </div>
          </div>
        </div>
        <div class="additionally">
          <a href="#" class="additionally-link"><span>Совместимость</span></a>
          <div class="additionally-content">
            <div class="row source-info header">
              <div class="head-name"></div>
              <div class="el-input__inner1 num-str ">Цифрами</div>
              <div class="el-input__inner1 num-str ark">Аркан</div>
            </div>
            <div class="row source-info">
              <el-input  placeholder="Фамилия"  v-model="fam2"  clearable>  </el-input>
              <div class="el-input__inner num-str"> {{fam2 | strToNumStr }} </div>
              <div class="el-input__inner num-str ark"> {{fam2 | strToArkan }} </div>
            </div>
            <div class="row source-info">
              <el-input  placeholder="Имя"  v-model="name2"  clearable>  </el-input>
              <div class="el-input__inner num-str"> {{ name2 | strToNumStr }} </div>
              <div class="el-input__inner num-str ark"> {{ name2 | strToArkan }} </div>
            </div>
            <div class="row source-info">
              <el-input  placeholder="Отчество"  v-model="otch2"  clearable>  </el-input>
              <div class="el-input__inner num-str"> {{otch2 |strToNumStr }} </div>
              <div class="el-input__inner num-str ark"> {{otch2 | strToArkan }} </div>
            </div>

          </div>
        </div>

      </div>
      <h2>Базовый расчет</h2>
      <base-calculation-table :date="date"></base-calculation-table>
      <h2>Таблица</h2>
      <base-table2 :date="date"></base-table2>

    </div>
  </div>
</template>

<script>
import * as func from './functions.js';
// import tabCell from './components/tabCell.vue'
import baseCalculationTable from './components/baseCalculationTable.vue'
import baseTable2 from './components/baseTable2.vue'
import taroInput from './components/taroInput.vue'


export default {
  name: 'App',
  components: {
      // tabCell,
      baseCalculationTable,
      baseTable2,
      taroInput
  },

  data() {
    return {

      fam: '',
      name: '',
      otch: '',
      vin: '',
      carNum: '',
      text: '',
      date: '1981-08-02',
      retro: false,
        fam2: '',
        name2: '',
        otch2: '',
        date2: '',



    }
  },
  filters: {
      charToNum: function(s) {return func.charToNum(s);},
      strToNum: function(s) {return func.strToNum(s); },
      strToNumStr: function(s) { return func.strToNumStr(s);},
      strToArkan: function(s) {return func.strToArkan(s); }


  },
  computed: {
      arkDay: function () { return  func.ArkDay(this.date).toString() || ''; },
      arkMonth: function () { return  func.ArkMonth(this.date).toString() || ''; },
      arkYear: function () { return  func.ArkYear(this.date).toString() || ''; },
      ADplusAM: function () { return  func.ADplusAM(this.date).toString() || ''; },
      AMplusAY: function () { return  func.AMplusAY(this.date).toString() || ''; },
      ZK: function () { return  func.ZK(this.date).toString() || ''; },
      Mission: function () { return  func.Mission(this.date).toString() || ''; },
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
      p2: function () { return  (func.numberOfLife(this.date) + 9).toString() || ''; },
      p3: function () { return  (func.numberOfLife(this.date) + 18).toString() || ''; },
      p4: function () { return  (func.numberOfLife(this.date) + 27).toString() || ''; },
      p5: function () { return  (func.numberOfLife(this.date) + 36).toString() || ''; },
      TP1: function () { return  func.TP1(this.date).toString() || ''; },
      TP2: function () { return  func.TP2(this.date).toString() || ''; },
      TP3: function () { return  func.TP3(this.date).toString() || ''; },
      TP4: function () { return  func.TP4(this.date).toString() || ''; },
      TP5: function () { return  func.TP5(this.date).toString() || ''; },
      OPV1: function () { return  func.OPV1(this.date).toString() || ''; },
      OPV2: function () { return  func.OPV2(this.date).toString() || ''; },
      OPV3: function () { return  func.OPV3(this.date).toString() || ''; },
      OPV4: function () { return  func.OPV4(this.date).toString() || ''; },
      OPV5: function () { return  func.OPV5(this.date).toString() || ''; },

      roof1: function () { return  func.roof1(this.date).toString() || ''; },
      roof2: function () { return  func.roof2(this.date).toString() || ''; },
      roof3: function () { return  func.roof3(this.date).toString() || ''; },
      roof4: function () { return  func.roof4(this.date).toString() || ''; },
      roof5: function () { return  func.roof5(this.date).toString() || ''; },

      footer1: function () { return  func.footer1(this.date).toString() || ''; },
      footer2: function () { return  func.footer2(this.date).toString() || ''; },
      footer3: function () { return  func.footer3(this.date).toString() || ''; },
      footer4: function () { return  func.footer4(this.date).toString() || ''; },
      footer5: function () { return  func.footer5(this.date).toString() || ''; },

      matrixCode: function () { return  func.matrixCode(this.date) || 0; }, // Матричный код (или ретроградный)
      trueMatrixCode: function () { return  func.trueMatrixCode(this.date, this.retro) || 0; }, // Истинный Матричный код в случае ретроградности


  },
  // whatch: {
  //     date : function (val) {
  //         let s = func.ArkDay(val).toString();
  //         console.log('arkDay: ',s);
  //         this.arkDay =  s || '';
  //     }
  // }


}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 100%;
  background-color: #fafafa;
}

 .container {
     border: 1px solid red;
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
.block .label {    text-align: left;}
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

}
.additionally-content {
  overflow: hidden;
  transition: .5s;
  max-height: 0;
  background-color: #f3f3f3;

}
.additionally-content.show {  max-height: 500px;  padding: 15px 0;}
.additionally-link {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
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
.additionally-link.show:after {
  transform: rotate(225deg);
  margin-bottom: -6px;
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
