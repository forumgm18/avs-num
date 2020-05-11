export const charNums = ['1аисъajs','2бйтыbkt','3вкуьclu','4глфэdmv','5дмхюenw','6енцяfox','7ёочgpy','8жпшhqz','9зрщir'];
//llkjdjlefsdosd
export function charToNum(s) {
    s = s.toString().toLowerCase();
    for ( let i=0; i< charNums.length; i++) {
        if (charNums[i].includes(s)) { return i + 1}
    }
    return 0;
}

export function strToNumStr(s) {
    let res = '';
    if(!s){s=''}
    s = s.toString().toLowerCase();
    for ( let i=0; i< s.length; i++) {
        // res += charToNum(s[i]);
        res += charToNum(s[i]) ? charToNum(s[i]) : s[i];
    }
    return res;
}

export function strToNum(s) {
    let res = 0;
    s = s.toString().toLowerCase();
    for ( let i=0; i< s.length; i++) {    res += charToNum(s[i]);  }
    return res;
}

// export function strToArkan(s) {
//     let res = 0;
//     s = s.toString().toLowerCase();
//     for ( let i=0; i< s.length; i++) {   res += charToNum(s[i]);  }
//     if (res == 0) {return 22}
//     if (res > 22) {return res % 22}
//     return res;
// }
export function strToArkan(s) {
    if(!s){return ''}
    if (s=='') return ''
    let res = strToNum(s);
    if (res > 22) {res = res % 22}
    if (res == 0) {return 22}
    return res;
}

export function numToArkan(n) {
    if (n<0) { n = -n }
    if (n > 22) {return n % 22}
    if (n == 0) {return 22}
    return n;
}

export function ArkDay(data) {

    let dd = new Date(data);

    let d = dd.getDate();// + 1;

    if (d>22) {return d % 22}

    return d;
}

export function ArkMonth (data) {
    let mm = new Date(data);
    let m = mm.getMonth() + 1;
    if (m>22) {return m % 22}
    return m;
}

export function ArkYear (data) {
    let yy = new Date(data);
    let y = yy.getFullYear().toString();
    return strToArkan(y);
}

export function ADplusAM(data) {
    let ad = ArkDay(data);
    let am = ArkMonth(data)
    return numToArkan(ad + am);
}
export function AMplusAY(data) {
    let am = ArkMonth(data)
    let ag = ArkYear(data)
    return numToArkan(am + ag);
}
export function Mission(data) {
    let ad = ArkDay(data);
    let am = ArkMonth(data)
    let ag = ArkYear(data)
    return numToArkan(ad + am + ag);
}
export function future(data) {
    let ad = ArkDay(data);
    let am = ArkMonth(data)
    let ag = ArkYear(data)
    return numToArkan(ad + am + ag + ag);
}
export function unrealizedGoal(data) {
    let ad = ArkDay(data);
    let opv = OPV1(data);
    return numToArkan(ad + opv);
}
export function Instrument(data) {
    let am = ArkMonth(data)
    let zk = ZK(data)
    return numToArkan(am + zk);
}
export function Stimul(data) {
    let am = ArkMonth(data)
    let inst = Instrument(data)
    return numToArkan(am + inst);
}
export function Troubles(data) {
    let opv = OPV1(data)
    let mis = Mission(data)
    return numToArkan(opv - mis);
}
export function selfPerception(data) {
    let ad = ArkDay(data);
    let am = ADplusAM(data)
    let ag = ZK(data)
    return numToArkan(ad + am  + ag);
}
export function perceptionByOthers(data) {
    let ad = ZK(data);
    let am = AMplusAY(data)
    let ag = ArkYear(data)

    return numToArkan(ad + am + ag);
}
export function traitsMinus(data) {
    let ad = ArkDay(data);
    let ag = ArkYear(data)
    return numToArkan(ad - ag);
}
export function ZK(data) {
    let ad = ArkDay(data);
    let am = ArkMonth(data)
    let ag = ArkYear(data)
    return numToArkan(ad + am + am + ag);
}
export function OPV1(data) {
    let ad = ArkDay(data);
    let am = ArkMonth(data)
    return numToArkan(ad-am);
}

export function OPV2(data) {
    let ad = ArkDay(data);
    let am = ArkYear(data)
    return numToArkan(ad-am);
}

export function OPV3(data) {
    return numToArkan(OPV1(data)-OPV2(data));
}

export function OPV4(data) {
    let ad = ArkMonth(data);
    let am = ArkYear(data)
    return numToArkan(ad-am);
}

export function OPV5(data) {
    return numToArkan(OPV1(data)+OPV2(data)+OPV3(data)+OPV4(data));
}

export function numberOfLife(data) {
    let dd = new Date(data);
    let d = dd.getDate();// + 1;
    let m = dd.getMonth() + 1;
    let y = dd.getFullYear();
    let s = d.toString() + m.toString() + y.toString();
    let res = 0;

    for ( let i=0; i< s.length; i++ ) { res += parseInt(s[i]);  }

    return res;
}

export function ArkNumberOfLife(data) {
    let res = numberOfLife(data);
    if (res>22) {return res % 22}
    return res;
}

export function TP1(data) {
    let n1 = ArkDay(data)
    let n2 = ArkMonth(data);
    return numToArkan(n1+n2);
}
export function TP2(data) {
    let n1 = ArkDay(data)
    let n2 = ArkYear(data);
    return numToArkan(n1+n2);
}
export function TP3(data) {
    return numToArkan(TP1(data)+TP2(data));
}

export function TP4(data) {
    let n1 = ArkMonth(data)
    let n2 = ArkYear(data);
    return numToArkan(n1+n2);
}


export function TP5(data) {
    return numToArkan(TP1(data)+TP2(data)+TP3(data)+TP4(data));
}
export function roof1(data) { return numToArkan(TP1(data)+OPV1(data));}
export function roof2(data) { return numToArkan(TP2(data)+OPV2(data));}
export function roof3(data) { return numToArkan(TP3(data)+OPV3(data));}
export function roof4(data) { return numToArkan(TP4(data)+OPV4(data));}
export function roof5(data) { return numToArkan(TP5(data)+OPV5(data));}

export function footer1(data) { return numToArkan(TP1(data)-OPV1(data));}
export function footer2(data) { return numToArkan(TP2(data)-OPV2(data));}
export function footer3(data) { return numToArkan(TP3(data)-OPV3(data));}
export function footer4(data) { return numToArkan(TP4(data)-OPV4(data));}
export function footer5(data) { return numToArkan(TP5(data)-OPV5(data));}

export function matrixCode(data) {
    let dd = new Date(data);
    let d = dd.getDate();
    let m = dd.getMonth() + 1;

    return 55 - d - 2*m;
}
export function trueMatrixCode(data,retro) {
    let code = matrixCode(data);
    if (retro) return code < 40 ? code + 13 : code + 1;
    return code;
}
export function compatibilityArray(a1,a2) {
    let res=[];
    a1 = parseInt(a1);
    a2 = parseInt(a2);
    res[0] = numToArkan(a1);                                // A1
    res[1] = numToArkan(a2);                                // A2
    res[2] = numToArkan(a1 + a2);                           // A3
    res[4] = numToArkan(a1 + res[2]);                       // A1 + A3
    res[5] = numToArkan(a2 + res[2]);                       // A2 + A3

    res[3] = numToArkan(res[4]-res[5]);                       // A4
    return res;
}
