<template>
  <div class="container">
      <h1 class="fav">
        <span class="img"></span>
        <span>Нумерология - для Жизни</span>
      </h1>
      <div class="additionally">
        <a href="#" class="additionally-link"><span>Дополнительно</span></a>
        <div class="additionally-content">
          <div class="row source-info header">
            <div class="head-name"></div>
            <div class="el-input__inner1 num-str ">Цифрами</div>
            <div class="el-input__inner1 num-str ark">Аркан</div>
          </div>
          <div class="row source-info">
            <el-input  placeholder="VIN"  v-model="vin"  clearable/>
            <div class="el-input__inner num-str"> {{vin | strToNumStr }} </div>
            <div class="el-input__inner num-str ark"> {{vin |  strToArkan }} </div>
          </div>
          <div class="row source-info">
            <el-input  placeholder="Номер машины"  v-model="carNum"  clearable/>
            <div class="el-input__inner num-str"> {{carNum | strToNumStr }} </div>
            <div class="el-input__inner num-str ark"> {{carNum | strToArkan }} </div>
          </div>
          <div class="row source-info text">
            <el-input  placeholder="Произвольный текст" :rows="3" type="textarea" v-model="text"  clearable/>
            <div class="el-input__inner textarea">{{text | strToNumStr }}</div>
            <div class="el-input__inner num-str"> {{text | strToArkan }} </div>
          </div>
        </div>
      </div>
      <person :index="0"></person>
      <div class="compozit-block">
        <div class="compozit-confirm">
          <el-checkbox v-model="CalcCompozit" v-if="date1">Посчитать Совместимость</el-checkbox>
        </div>

        <div v-if="CalcCompozit">
          <div class="compozit-type">
            <el-radio-group  v-model="CompozitType" size="medium">
              <el-radio-button label="person" >Копозит c Партнером</el-radio-button>
              <el-radio-button label="event" >Композит c Событием</el-radio-button>
            </el-radio-group>
          </div>

          <div class="compozit-content" v-if="CompozitType === 'person'">
            <person :index="1"></person>
          </div>
          <div class="compozit-content" v-if="CompozitType === 'event'">
            <el-input  placeholder="Название события"  v-model="eventName"  clearable>  </el-input>
            <div class="compozit-date-block">
                <div class="compozit-event-label">Дата события</div>
                  <el-date-picker
                      v-model="Date4Compozit"
                      type="date"
                      format="dd.MM.yyyy"
                      value-format="yyyy-MM-dd"
                      placeholder="Дата События">
                  </el-date-picker>
            </div>
          </div>


          <div v-if="date1 && date2 && CompozitType === 'person'">
            <h2>Композиты</h2>
            <div class="table">
              <base-table2-row bgr="part1" title="ОПВ" :name="name1" :date="date1"></base-table2-row>
              <base-table2-row bgr="part2" title="ОПВ" :name="name2" :date="date2"></base-table2-row>
            </div>
            <div class="compozit">
              <compozit compType="AD" :date1="date1" :date2="date2" title="День"></compozit>
              <compozit compType="AM" :date1="date1" :date2="date2"  title="Месяц"></compozit>
              <compozit compType="AY" :date1="date1" :date2="date2"  title="Год"></compozit>
              <compozit compType="M" :date1="date1" :date2="date2"  title="Миссия"></compozit>
              <compozit compType="ZK" :date1="date1" :date2="date2"  title="ЗК"></compozit>
              <compozit compType="TP" :date1="date1" :date2="date2"  tp title="ТП"></compozit>
            </div>
          </div>

          <div v-if="date1 && Date4Compozit && CompozitType === 'event'">
            <h2>Композиты</h2>
            <div class="table">
              <base-table2-row bgr="part1" title="ОПВ" :name="name1" :date="date1"></base-table2-row>
              <base-table2-row bgr="part2" title="ОПВ" name="Событие" :date="Date4Compozit"></base-table2-row>
            </div>
            <div class="compozit">
              <compozit compType="AD" :date1="date1" :date2="Date4Compozit" title="День"></compozit>
              <compozit compType="AM" :date1="date1" :date2="Date4Compozit"  title="Месяц"></compozit>
              <compozit compType="AY" :date1="date1" :date2="Date4Compozit"  title="Год"></compozit>
              <compozit compType="M" :date1="date1" :date2="Date4Compozit"  title="Миссия"></compozit>
              <compozit compType="ZK" :date1="date1" :date2="Date4Compozit"  title="ЗК"></compozit>
              <compozit compType="TP" :date1="date1" :date2="Date4Compozit"  tp title="ТП"></compozit>
            </div>
          </div>


        </div>
      </div>


    <div class="arkan-descriptions" style="display: none">
      <div v-for="ark in ArkanDesc" :key="ark.id">
        <h3><strong>Аркан:</strong>{{ark.id}}</h3>
        <p><strong>Название:</strong>{{ark.name}}</p>
        <p><strong>Краткое описание:</strong>{{ark.shortDescription}}</p>
        <p><strong>Небесный покровитель:</strong>{{ark.heavenlyRuler}}</p>
        <p><strong>Стихия:</strong>{{ark.element}}</p>
        <p><strong>Цвет:</strong>{{ark.color}}</p>
        <p><strong>Талисман (камень):</strong>{{ark.talisman}}</p>
        <p><strong>Эфирное масло:</strong>{{ark.essentialOil}}</p>
        <p><strong>Таланты:</strong>{{ark.talents}}</p>
        <p><strong>Описание личности:</strong>{{ark.personalityDescription}}</p>
        <p><strong>Кармические черты характера:</strong>{{ark.karmicTraits}}</p>
        <p><strong>События в +:</strong>{{ark.eventsPlus}}</p>
        <p><strong>События в -:</strong>{{ark.eventsMinus}}</p>
        <p><strong>Урок:</strong>{{ark.lesson}}</p>
        <p><strong>Задача:</strong>{{ark.challenge}}</p>
        <p><strong>Социальная Задача:</strong>{{ark.socialChallenge}}</p>
        <p><strong>Профессии:</strong>{{ark.professions}}</p>

      </div>

    </div>

  </div>
</template>

<script>
import * as func from './functions.js';
// import tabCell from './components/tabCell.vue'
import person from './components/person.vue'
// import baseCalculationTable from './components/baseCalculationTable.vue'
// import baseTable2 from './components/baseTable2.vue'

import baseTable2Row from './components/baseTable2Row.vue'
import compozit from './components/compozit.vue'

// import taroInput from './components/taroInput.vue'
import store from './store';


export default {
  name: 'App',
  components: {
      // tabCell,
      person,
      // baseCalculationTable,
      // baseTable2,
      baseTable2Row,
      compozit,
      // taroInput
  },
  store,
  filters: {
      charToNum: function(s) {return func.charToNum(s);},
      strToNum: function(s) {return func.strToNum(s); },
      strToNumStr: function(s) { return func.strToNumStr(s);},
      strToArkan: function(s) {return func.strToArkan(s); }

  },
  computed: {
      date1: {
          get () { return this.$store.state.obj[0].date },
          // set (value) { this.$store.commit('set_Date', {index: 0, value: value}) }
      },
      date2: {
          get () { return this.$store.state.obj[1].date },
          // set (value) { this.$store.commit('set_Date', {index: 0, value: value}) }
      },

      name1: {
          get () { return this.$store.state.obj[0].name },
      },
      name2: {
          get () { return this.$store.state.obj[1].name },
      },

      vin: {
          get () { return this.$store.state.vin },
          set (value) { this.$store.commit('set_Vin', value) }
      },
      eventName: {
          get () { return this.$store.state.eventName },
          set (value) { this.$store.commit('set_EventName', value) }
      },
      carNum: {
          get () { return this.$store.state.carNum },
          set (value) { this.$store.commit('set_CarNum', value) }
      },
      text: {
          get () { return this.$store.state.text },
          set (value) { this.$store.commit('set_Text', value) }
      },

      CompozitEventDate: {
          get () { return this.$store.state.compozit_event_date },
          set (value) { this.$store.commit('set_CompozitEventDate', value) }
      },

      CompozitPerson: {
          get () { return this.$store.state.compozit_person },
          set (value) { this.$store.commit('set_CompozitPerson', value) }
      },


      CompozitType: {
          get () { return this.$store.state.compozit_type },
          set (value) { this.$store.commit('set_CompozitType', value) }
      },

      CalcCompozit: {
          get () { return this.$store.state.calc_compozit },
          set (value) { this.$store.commit('set_CalcCompozit', value) }
      },

      Date4Compozit: {
          get () { return this.$store.state.date4compozit },
          set (value) { this.$store.commit('set_Date4Compozit', value) }
      },
      ArkanDesc: {
          get () { return this.$store.state.arkanDescription },

      },

  },
  mounted () {
        this.$store.dispatch('setArkanDescription');
    }
}

</script>

<style>
  * {box-sizing: border-box;}
  body {
    margin: 0;
    padding: 0;
    background: url(/img/bgr-num.png) no-repeat center top;
    background-attachment: fixed;

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
   padding: 0 15px;
   max-width: 992px;
   width: 100%;
   margin-bottom: 50px;
   background-color: #fff;

 }
 .fav {
   display: flex;
   align-items: center;
 }
 .fav .img{
   display: inline-block;
   font-size: 70px;
   height: 1em;
   width: 1em;
   margin-right: 30px;
   flex-shrink: 0;
   background: url(/img/fav1.png) no-repeat center;
   background-size: contain;
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
.compozit-block {
  margin-top: 30px;
  margin-bottom: 30px;
}

.compozit-confirm {
  margin-bottom: 30px;
}
.compozit-type {
  margin-bottom: 30px;
}
.compozit-date-block {
  max-width: 220px;
  margin-top: 15px;
}
.compozit-event-label {

  margin-bottom: 5px;
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
