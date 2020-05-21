import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import * as func from '../functions.js';

export const store = new Vuex.Store({
   strict: true,
     state : {
      obj : [
         {
            fam: 'aassa',
            // name: '',
            name: 'Андрей',
            otch: '',
            // date: '1981-08-02',
            date: null,
            retro: false,
            // date4compozit: '1981-08-02',
            date4compozit: null,
         },
         {
            fam: '',
            name: '',
            // name: 'Андрей',
            otch: '',
            // date: '1981-08-02',
            date: null,
            retro: false,
            // date4compozit: '1981-08-02',
            date4compozit: null,
         },

      ],
      vin: '',
      carNum: '',
      text: '',

    },
     getters : {
        getObj: state => (index) => {return state.obj[index];},
        fam: state => (index) => {return state.obj[index].fam; },
        name: state => (index) => {return state.obj[index].name; },
        otch: state => (index) => {return state.obj[index].otch; },
        vin: state => {return state.vin; },
        carNum: state => {return state.carNum; },
        text: state => {return state.text; },
        date: state => (index) => {return state.obj[index].date; },
        retro: state => (index) => {return state.obj[index].retro; },
        date4compozit: state => (index) => {return state.obj[index].date4compozit; },

        strToNum: function(s) {return func.strToNum(s); },
        strToNumStr: function(s) { return func.strToNumStr(s);},
        strToArkan: function(s) {return func.strToArkan(s); },

        famToNumStr: state => {return func.strToNumStr(state.fam); },
        nameToNumStr: state => {return func.strToNumStr(state.name); },
        otchToNumStr: state => {return func.strToNumStr(state.otch); },
        textToNumStr: state => {return func.strToNumStr(state.text); },
        vinToNumStr: state => {return func.strToNumStr(state.vin); },
        carNumToNumStr: state => {return func.strToNumStr(state.carNum); },

        famToArkan: state => {return func.strToArkan(state.fam); },
        nameToArkan: state => {return func.strToArkan(state.name); },
        otchToArkan: state => {return func.strToArkan(state.otch); },
        textToArkan: state => {return func.strToArkan(state.text); },
        vinToArkan: state => {return func.strToArkan(state.vin); },
        carNumToArkan: state => {return func.strToArkan(state.carNum); },

        // matrixCode: state => { return  func.matrixCode(state.date) || 0; }, // Матричный код (или ретроградный)
        // trueMatrixCode: state => { return  func.trueMatrixCode(state.date, state.retro) || 0; }, // Истинный Матричный код в случае ретроградности

        matrixCode: state => (index) => { return  func.matrixCode(state.obj[index].date) || 0; }, // Матричный код (или ретроградный)
        trueMatrixCode: state => (index) => { return  func.trueMatrixCode(state.obj[index].date, state.obj[index].retro) || 0; }, // Истинный Матричный код в случае ретроградности



    },
     mutations : {
        // set_Fam: (state, value) => {state.fam = value;},
        // set_Name: (state, value) => {state.name = value;},
        // set_Otch: (state, value) => {state.otch = value;},
        // set_Vin: (state, value) => {state.vin = value;},
        // set_CarNum: (state, value) => {state.carNum = value;},
        // set_Text: (state, value) => {state.text = value;},
        // set_Date: (state, value) => {state.date = value;},
        // set_Retro: (state, value) => {state.retro = value;},
        // set_Date4Compozit: (state, value) => {state.date4compozit = value;},
        set_Fam: (state, valObj) => {state.obj[valObj.index].fam = valObj.value;},
        set_Name: (state, valObj) => {state.obj[valObj.index].name = valObj.value;},
        set_Otch: (state, valObj) => {state.obj[valObj.index].otch = valObj.value;},
        set_Vin: (state, value) => {state.vin = value;},
        set_CarNum: (state, value) => {state.carNum = value;},
        set_Text: (state, value) => {state.text = value;},
        set_Date: (state, valObj) => {state.obj[valObj.index].date = valObj.value;},
        set_Retro: (state, valObj) => {state.obj[valObj.index].retro = valObj.value;},
        set_Date4Compozit: (state, valObj) => {state.obj[valObj.index].date4compozit = valObj.value;},
    },
     actions : {
        // setFam: async (context, value) => { context.commit('set_Fam', value);  },
        // setName: async (context, value) => { context.commit('set_Name', value);  },
        // setOtch: async (context, value) => { context.commit('set_Otch', value);  },
        // setVin: async (context, value) => { context.commit('set_Vin', value);  },
        // setCarName: async (context, value) => { context.commit('set_CarName', value);  },
        // setDate: async (context, value) => { context.commit('set_Date', value);  },
        // setRetro: async (context, value) => { context.commit('set_Retro', value);  },
        // setDate4Compozit: async (context, value) => { context.commit('set_Date4Compozit', value);  },

        setFam: async (context, valObj) => {context.commit('set_Fam', valObj);  },
        setName: async (context, valObj) => { context.commit('set_Name', valObj);  },
        setOtch: async (context, valObj) => { context.commit('set_Otch', valObj);  },
        setVin: async (context, value) => { context.commit('set_Vin', value);  },
        setCarName: async (context, value) => { context.commit('set_CarName', value);  },
        setDate: async (context, valObj) => { context.commit('set_Date', valObj);  },
        setRetro: async (context, valObj) => { context.commit('set_Retro', valObj);  },
        setDate4Compozit: async (context, valObj) => { context.commit('set_Date4Compozit', valObj);  },

    }
});




// export default {
//     state,
//     getters,
//     mutations,
//     actions,
// };

// export const store = new Vuex.Store({
//     state: {},
//     getters: {},
//     mutations: {},
//     actions: {},
// });