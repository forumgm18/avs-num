<template>
  <div class="row source-info">
    <el-input  :placeholder="placeholder"  v-model="value"   clearable>  </el-input>
    <div class="el-input__inner num-str"> {{ str | strToNumStr }} </div>
    <div class="el-input__inner num-str ark"> {{str | strToArkan }} </div>
  </div>

</template>



<script>
    // export default {
    //     name: "slug",
    //     props: ["value"],
    //     computed: {
    //         msg: {
    //             get: function() {
    //                 return this.value;
    //             },
    //             set: function(val) {
    //                 this.$emit("input", val);
    //             }
    //         }
    //     }
    // };
    import * as func from './../functions.js';

    export default {
        name: "taroInput",

        props:{
            value:  String,
            placeholder: String
        },
            computed: {
                str: {
                    get: function() {
                        return this.value;
                    },
                    set: function(val) {
                        this.$emit("input", val);
                    }
                }
            },

        filters: {
            strToNumStr: function(s) { return func.strToNumStr(s);},
            strToArkan: function(s) {return func.strToArkan(s); }
        },

    }
</script>

<style scoped>

</style>