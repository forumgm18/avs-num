import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

import * as func from '../functions.js';

export const store = new Vuex.Store({
   strict: true,
     state : {
      obj : [
         {
            fam: '',
            // name: '',
            name: '',
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
      eventName: '',
      calc_compozit: false,  // считать совместимость (с партнером по умолчанию)
      compozit_person: true,    // совместимость с партнером
      compozit_event_date: false,    // совместимость с объектом/событием (датой)
      compozit_type: 'person',    // совместимость с партнером (partner) или объектом/событием (event) (по умолчанию с партнером)
      // date4compozit: '1981-08-02',
      date4compozit: null,
      arkanDescription: null,


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

        compozit_person: state => {return state.compozit_person; },
        compozit_date: state => {return state.compozit_date; },
        date4compozit: state => {return state.date4compozit; },
        arkanDescription: state => {return state.arkanDescription; },

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
        set_EventName: (state, value) => {state.eventName = value;},
        set_CarNum: (state, value) => {state.carNum = value;},
        set_Text: (state, value) => {state.text = value;},
        set_Date: (state, valObj) => {state.obj[valObj.index].date = valObj.value;},
        set_Retro: (state, valObj) => {state.obj[valObj.index].retro = valObj.value;},

        set_CalcCompozit: (state, val) => {state.calc_compozit = val;},
        set_CompozitPerson: (state, val) => {state.compozit_person = val;},
        set_CompozitEventDate: (state, val) => {state.compozit_event_date = val;},
        set_CompozitType: (state, val) => {state.compozit_type = val;},
        // set_Date4Compozit: (state, val) => {state.date4compozit = state.date4compozit = val; },
        set_Date4Compozit: (state, val) => {state.date4compozit = val; },
        set_arkanDescription: (state, val) => {state.arkanDescription = val; },
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
        setEventName: async (context, value) => { context.commit('set_EventName', value);  },
        setCarName: async (context, value) => { context.commit('set_CarName', value);  },
        setDate: async (context, valObj) => { context.commit('set_Date', valObj);  },
        setRetro: async (context, valObj) => { context.commit('set_Retro', valObj);  },

        setCalcCompozit: async (context, val) => { context.commit('set_CalcCompozit', val);  },
        setCompozitEventDate: async (context, val) => { context.commit('set_CompozitEventDate', val);  },
        setCompozitPerson: async (context, val) => { context.commit('set_CompozitPerson', val);  },
        setCompozitType: async (context, val) => { context.commit('set_CompozitType', val);  },

        setDate4Compozit: async (context, val) => { context.commit('set_Date4Compozit', val);  },
        setArkanDescription: async (context) => {
            axios
                .get('/dbase/arkan2.json')
                .then(response => (
                    context.commit('set_arkanDescription', response.data)))
                .catch(
                    context.commit('set_arkanDescription', null)
            );
        },

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