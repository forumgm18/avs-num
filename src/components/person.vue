<template>
  <div class="person-block">
    <div class="base-info">
      <div class="row source-info header">
        <div class="head-name"></div>
        <div class="el-input__inner1 num-str ">Цифрами</div>
        <div class="el-input__inner1 num-str ark">Аркан</div>
      </div>
      <div class="row source-info">
        <el-input  placeholder="Фамилия"  v-model="fam"  clearable>  </el-input>
        <div class="el-input__inner num-str"> {{fam | strToNumStr }} </div>
        <div class="el-input__inner num-str ark"> {{fam | strToArkan }} </div>
      </div>
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
            <el-checkbox v-model="retro" v-if="date">Ретроградный</el-checkbox>
          </div>
        </div>
        <div class="matrix-code" v-if="date">
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

    </div>
    <div v-if="date">
      <h2>Базовый расчет</h2>
      <base-calculation-table :date="date" ></base-calculation-table>
      <h2>Таблица</h2>
      <base-table2 :date="date"></base-table2>
    </div>
  </div>
</template>

<script>
    import store from '../store';
    import {mapGetters} from 'vuex';

    import baseCalculationTable from '../components/baseCalculationTable.vue'
    import baseTable2 from '../components/baseTable2.vue'
    import * as func from "@/functions";




    export default {
        name: "person",
        props:{
            'date1': Date,
            'index': Number
        },

        components: {
            baseCalculationTable,
            baseTable2,
            // baseTable2Row,
            // compozit,
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
            ...mapGetters([
                // 'fam', 'name', 'otch', 'vin', 'carNum', 'text', 'date', 'retro', 'date4compozit',
              //   'famToNumStr',
              //   'nameToNumStr',
              //   'otchToNumStr',
              // 'textToNumStr',
              // 'vinToNumStr',
              // 'carNumToNumStr',
              //
              // 'famToArkan',
              // 'nameToArkan',
              // 'otchToArkan',
              // 'textToArkan',
              // 'vinToArkan',
              // 'carNumToArkan',

      // 'matrixCode',
      // 'trueMatrixCode',


            ]),
            fam: {
                get () { return this.$store.state.obj[this.index].fam },
                set (value) { this.$store.commit('set_Fam', {index: this.index, value: value}) }
                // set (value) { this.$store.commit('set_Fam', value, this.index) }
                // set (value) { this.$store.state.obj[this.index].fam = value }
            },
            name: {
                get () { return this.$store.state.obj[this.index].name },
                set (value) { this.$store.commit('set_Name', {index: this.index, value: value}) }
            },
            otch: {
                get () { return this.$store.state.obj[this.index].otch },
                set (value) { this.$store.commit('set_Otch', {index: this.index, value: value}) }
            },
            retro: {
                get () { return this.$store.state.obj[this.index].retro },
                set (value) { this.$store.commit('set_Retro', {index: this.index, value: value}) }
            },
            date: {
                get () { return this.$store.state.obj[this.index].date },
                set (value) { this.$store.commit('set_Date', {index: this.index, value: value}) }
            },
            date4compozit: {
                get () { return this.$store.state.obj[this.index].date4compozit },
                set (value) { this.$store.commit('set_Date4Compozit', {index: this.index, value: value}) }
            },

            matrixCode: {
                get () { return this.$store.getters.matrixCode(this.index) },
            },
            trueMatrixCode: {
                get () { return this.$store.getters.trueMatrixCode(this.index) },
            },


            // Другие вычисляемые свойства
        },

    }
</script>

<style scoped>

</style>