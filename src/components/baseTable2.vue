<template>
  <div class="table">
    <div class="row">
      <div class="cell"></div>
      <div class="cell">
        <span class="cel-num">1 Период</span><br>
        <span class="cel-title">до {{numberOfLife}}</span>
      </div>
      <div class="cell">
        <span class="cel-num">2 Период</span><br>
        <span class="cel-title">{{numberOfLife}} - {{p2}}</span>
      </div>
      <div class="cell">
        <span class="cel-num">3 Период</span><br>
        <span class="cel-title">{{p2}} - {{p3}}</span>
      </div>
      <div class="cell">
        <span class="cel-num">4 Период</span><br>
        <span class="cel-title">{{p3}} - {{p4}}</span>
      </div>
      <div class="cell">
        <span class="cel-num">5 Период</span><br>
        <span class="cel-title">{{p4}} - {{p5}}</span>
      </div>
    </div>
    <div class="row">
      <div class="cell"></div>
      <div class="cell">{{arkDay}}</div>
      <div class="cell">{{arkMonth}}</div>
      <div class="cell">{{arkYear}}</div>
      <div class="cell">{{arkNumberOfLife}}</div>
      <div class="cell">{{Mission}}</div>
    </div>
    <div class="row">
      <div class="cell">Крыша</div>
      <div class="cell">{{roof1}}</div>
      <div class="cell">{{roof2}}</div>
      <div class="cell">{{roof3}}</div>
      <div class="cell">{{roof4}}</div>
      <div class="cell">{{roof5}}</div>
    </div>
    <div class="row">
      <div class="cell">ТП</div>
      <div class="cell">{{TP1}}</div>
      <div class="cell">{{TP2}}</div>
      <div class="cell">{{TP3}}</div>
      <div class="cell">{{TP4}}</div>
      <div class="cell">{{TP5}}</div>
    </div>
    <div class="row">
      <div class="cell">ОПВ</div>
      <div class="cell">{{OPV1}}</div>
      <div class="cell">{{OPV2}}</div>
      <div class="cell">{{OPV3}}</div>
      <div class="cell">{{OPV4}}</div>
      <div class="cell">{{OPV5}}</div>
    </div>
    <div class="row">
      <div class="cell">Подвал</div>
      <div class="cell">{{footer1}}</div>
      <div class="cell">{{footer2}}</div>
      <div class="cell">{{footer3}}</div>
      <div class="cell">{{footer4}}</div>
      <div class="cell">{{footer5}}</div>
    </div>

  </div>

</template>

<script>
    import * as func from './../functions.js';

    export default {
        name: "baseTable2",
        props:{date: String},
        computed: {
            arkDay: function () { return  func.ArkDay(this.date).toString() || ''; },
            arkMonth: function () { return  func.ArkMonth(this.date).toString() || ''; },
            arkYear: function () { return  func.ArkYear(this.date).toString() || ''; },
            Mission: function () { return  func.Mission(this.date).toString() || ''; },
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
        },

    }
</script>

<style scoped>
  .table .row {
    flex-wrap: nowrap;
    margin-bottom: 0;
  }
  .table {border: 1px solid gray;}
  .table .row {border: 0px solid gray;}
  .table .row .cell {
    max-width: calc( 100% / 6);
    width: calc( 100% / 6);
    border: 0px solid gray;
    margin-right: 0;
    text-align: center;
    line-height: 30px;
    font-size: 18px;
    color: #333;
  }

  .table .row:not(:last-child) {  border-bottom-width: 1px;}
  .table .cell:not(:last-child) {  border-right-width: 1px;}
  @media (max-width: 500px) { .table .row .cell {   font-size: 12px;}}

</style>