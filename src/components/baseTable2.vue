<template>
  <div class="table">
    <div class="row">
      <div class="cell"></div>
      <div class="cell">
        <span class="cel-num">П-1</span>
        <span class="cel-title">до {{numberOfLife}}</span>
      </div>
      <div class="cell">
        <span class="cel-num">П-2</span>
        <span class="cel-title">{{ 1 | period(date) }} - {{ 2 | period(date)}}</span>
      </div>
      <div class="cell">
        <span class="cel-num">П-3</span>
        <span class="cel-title">{{ 2 | period(date) }} - {{ 3 | period(date)}}</span>
      </div>
      <div class="cell">
        <span class="cel-num">П-4</span>
        <span class="cel-title">{{ 3 | period(date) }} - {{ 4 | period(date)}}</span>

      </div>
      <div class="cell">
        <span class="cel-num">П-5</span>
        <span class="cel-title">{{ 4 | period(date) }} - {{ 5 | period(date)}}</span>
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
      <div class="cell">{{roof[0]}}</div>
      <div class="cell">{{roof[1]}}</div>
      <div class="cell">{{roof[2]}}</div>
      <div class="cell">{{roof[3]}}</div>
      <div class="cell">{{roof[4]}}</div>
    </div>
    <div class="row">
      <div class="cell">ТП</div>
      <div class="cell">{{TP[0]}}</div>
      <div class="cell">{{TP[1]}}</div>
      <div class="cell">{{TP[2]}}</div>
      <div class="cell">{{TP[3]}}</div>
      <div class="cell">{{TP[4]}}</div>

    </div>
    <div class="row">
      <div class="cell">ОПВ</div>
      <div class="cell">{{OPV[0]}}</div>
      <div class="cell">{{OPV[1]}}</div>
      <div class="cell">{{OPV[2]}}</div>
      <div class="cell">{{OPV[3]}}</div>
      <div class="cell">{{OPV[4]}}</div>

    </div>
    <div class="row">
      <div class="cell">Подвал</div>
      <div class="cell">{{footer[0]}}</div>
      <div class="cell">{{footer[1]}}</div>
      <div class="cell">{{footer[2]}}</div>
      <div class="cell">{{footer[3]}}</div>
      <div class="cell">{{footer[4]}}</div>
    </div>

  </div>

</template>

<script>
    import * as func from './../functions.js';

    export default {
        name: "baseTable2",
        props:{date: String},
        filters: {
            period: function(n, data) { return ( func.numberOfLife(data) + 9 * (n-1)).toString() || '';},
        },

        computed: {
            arkDay: function () { return  func.ArkDay(this.date).toString() || ''; },
            arkMonth: function () { return  func.ArkMonth(this.date).toString() || ''; },
            arkYear: function () { return  func.ArkYear(this.date).toString() || ''; },
            Mission: function () { return  func.Mission(this.date).toString() || ''; },
            numberOfLife: function () { return  func.numberOfLife(this.date).toString() || ''; },
            arkNumberOfLife: function () { return  func.ArkNumberOfLife(this.date).toString() || ''; },
            OPV: function () { return  func.arrayOPV(this.date); },
            TP: function () { return  func.arrayTP(this.date); },
            roof: function () { return  func.arrayRoof(this.date); },
            footer: function () { return  func.arrayFooter(this.date);},
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
    min-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .table .row .cell span{
    display: inline-block;
    width: 100%;
  }

  .table .row:not(:last-child) {  border-bottom-width: 1px;}
  .table .cell:not(:last-child) {  border-right-width: 1px;}
  @media (max-width: 500px) { .table .row .cell {   font-size: 12px;}}

</style>