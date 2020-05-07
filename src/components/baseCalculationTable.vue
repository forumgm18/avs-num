<template>
  <div class="base-table">
      <div class="row">
          <tab-cell cel-num="13" cel-title="Воспр. себя" :cel-value="selfPerception" > </tab-cell>
          <tab-cell cel-num="" cel-title='Черты хр-ра в "-"' :cel-value="traitsMinus" > </tab-cell>
          <tab-cell cel-num="14" cel-title="Воспр. окруж." :cel-value="perceptionByOthers" > </tab-cell>
      </div>
      <div class="row">
          <tab-cell cel-num="1" cel-title="Аркан Дня" :cel-value="arkDay" > </tab-cell>
          <tab-cell cel-num="2" cel-title="Аркан Месяца" :cel-value="arkMonth" > </tab-cell>
          <tab-cell cel-num="3" cel-title="Аркан Года" :cel-value="arkYear" > </tab-cell>
      </div>
      <div class="row">
          <tab-cell cel-num="" cel-title="Нер.цель" :cel-value="unrealizedGoal" > </tab-cell>
          <tab-cell cel-num="4" cel-title="АД + АМ" :cel-value="ADplusAM" > </tab-cell>
          <tab-cell cel-num="5" cel-title="АМ + АГ" :cel-value="AMplusAY" > </tab-cell>
          <tab-cell cel-num="" cel-title="Будущее" :cel-value="Future" > </tab-cell>
      </div>
      <div class="row">
          <tab-cell cel-num="9" cel-title="ОПВ-1" :cel-value="OPV1" > </tab-cell>
          <tab-cell cel-num="6" cel-title="Зона комфорта" :cel-value="ZK" > </tab-cell>
          <tab-cell cel-num="7" cel-title="Предназначение" :cel-value="Mission" > </tab-cell>
      </div>
      <div class="row">
          <tab-cell cel-num="8" cel-title="Инструмент" :cel-value="Instrument" > </tab-cell>
      </div>
      <div class="row">
          <tab-cell cel-num="8а" cel-title="Стимул" :cel-value="Stimul" > </tab-cell>
      </div>
      <div class="row">
          <tab-cell cel-num="" cel-title="Хлопоты" :cel-value="Troubles" > </tab-cell>
      </div>
  </div>
</template>

<script>
    import * as func from './../functions.js';
    import tabCell from './tabCell.vue'


    export default {
        name: 'baseCalculationTable',
        components: { tabCell },
        props:{date: String},
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
            OPV1: function () { return  func.OPV1(this.date).toString() || ''; },



        },
    }

</script>

<style scoped>
    .base-table {  margin-bottom: 50px;  padding: 15px 0;}
    .base-table .row {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        margin-bottom: 2px;
    }
    .base-table .row > div{  width: calc( 100% / 5);}
    .base-table .row > div:not(:last-child){ margin-right: 2px;}
</style>
