// Массив соответсвия символов языка цифрам
export const charNums = ['1аисъajs','2бйтыbkt','3вкуьclu','4глфэdmv','5дмхюenw','6енцяfox','7ёочgpy','8жпшhqz','9зрщir'];

// Возвращает цифру соответствующую текстовому символу
export function charToNum(s) {
    s = s.toString().toLowerCase();
    for ( let i=0; i< charNums.length; i++) {
        if (charNums[i].includes(s)) { return i + 1}
    }
    return 0;
}

// Преобразует текстовую строку в цифровую, заменяя каждый символ его цифрой
export function strToNumStr(s, unprintable = false) {
    // unprintable - пропускаем или нет "непечатные" символы (не из массива charNums )
    let res = '';
    if(!s){s=''}
    s = s.toString().toLowerCase();
    for ( let i=0; i< s.length; i++) {
        if (unprintable) {
            res += charToNum(s[i]);
        } else {
            res += charToNum(s[i]) ? charToNum(s[i]) : s[i];
        }
    }
    return res;
}

// Возвращает Сумму всех символов строки
export function strToNum(s) {
    let res = 0;
    s = s.toString().toLowerCase();
    for ( let i=0; i< s.length; i++) { res += charToNum(s[i]);  }
    return res;
}

// Возвращает Аркан Строки
export function strToArkan(s) {
    if (!s || s == '' ) { return '' }
    // if (s=='') return ''
    // let res = strToNum(s);
    // if (res > 22) {res = res % 22}
    // if (res == 0) {return 22}
    // return res;

    return numToArkan(strToNum(s));
}

// Возвращает Аркан Числа
export function numToArkan(n) {
    n = parseInt(n);
    if (n<0) { n = -n }
    if (n > 22) {return n % 22}
    if (n == 0) {return 22}
    return n;
}

// Возвращает Аркан Дня рождения по Дате рождения
// Поле № 1 в Базовой таблице
export function ArkDay(data) {
    let dd = new Date(data);
    let d = dd.getDate();// + 1;
    // if (d>22) {return d % 22}
    return numToArkan(d);
}

// Возвращает Аркан Масяца рождения по Дате рождения
// Поле № 2 в Базовой таблице
export function ArkMonth (data) {
    let mm = new Date(data);
    let m = mm.getMonth() + 1;
    return m;
}
// Возвращает Аркан Года рождения по Дате рождения
// Поле № 3 в Базовой таблице
export function ArkYear (data) {
    let yy = new Date(data);
    let y = yy.getFullYear().toString();
    return strToArkan(y);
}

// Возвращает Аркан ТП1 (Точка препятствия 1) по Дате рождения
// Это сумма полей 1 + 2
// Поле № 4 в Базовой таблице
export function ADplusAM(data) {
    // Дубликат для того чтобы проще было строить Базовую таблицу
    return TP1(data);
}

// Возвращает Аркан ТП4 (Точка препятствия 4) по Дате рождения
// Это сумма полей 2 + 3
// Поле № 5 в Базовой таблице
export function AMplusAY(data) {
    // Дубликат для того чтобы проще было строить Базовую таблицу
    return TP4(data);
}

// Возвращает Аркан Миссии (Планетарная задача) по Дате рождения
// Поле № 7 в Базовой таблице
export function Mission(data) {
    let ad = ArkDay(data);
    let am = ArkMonth(data)
    let ag = ArkYear(data)
    return numToArkan(ad + am + ag);
}

// Возвращает Аркан Цели будующего воплощения по Дате рождения
// Это сумма полей 3 + 7
// Поле "Будущее" в Базовой таблице
export function future(data) {
    let ad = ArkDay(data);
    let am = ArkMonth(data)
    let ag = ArkYear(data)
    return numToArkan(ad + am + ag + ag);
}

// Возвращает Аркан Нереализованная цель по Дате рождения
// Это сумма полей 1 + 9
// Поле "Нереализованная цель" в Базовой таблице
export function unrealizedGoal(data) {
    let ad = ArkDay(data);
    let opv = OPV1(data);
    return numToArkan(ad + opv);
}

// Возвращает Аркан Инструмент с помощью которого можно выполнить свою миссию
// Это сумма полей 2 + 6
// Поле № 8 в Базовой таблице
export function Instrument(data) {
    let am = ArkMonth(data)
    let zk = ZK(data)
    return numToArkan(am + zk);
}

// Возвращает Аркан Стимул с помощью которого можно найти подход к человеку
// Это сумма полей 2 + 8
// Поле № 8а в Базовой таблице
export function Stimul(data) {
    let am = ArkMonth(data)
    let inst = Instrument(data)
    return numToArkan(am + inst);
}

// Возвращает Аркан Пустые хлопоты
// Это разность полей 9 - 7
// Поле "Хлопоты" в Базовой таблице
export function Troubles(data) {
    let opv = OPV1(data)
    let mis = Mission(data)
    return numToArkan(opv - mis);
}

// Возвращает Аркан "Восприятия себя" т.е. то как человек воспринимает себя
// Это сумма полей 1 + 4 + 6
// Поле № 13 в Базовой таблице
export function selfPerception(data) {
    let ad = ArkDay(data);
    let am = TP1(data); // АД + АМ
    let ag = ZK(data);
    return numToArkan(ad + am  + ag);
}

// Возвращает Аркан "Восприятие окружающими" т.е. то что ожидают от человека другие люди
// Это сумма полей 3 + 5 + 6
// Поле № 14 в Базовой таблице
export function perceptionByOthers(data) {
    let ad = ZK(data);
    let am = TP4(data); // АМ + АГ
    let ag = ArkYear(data)
    return numToArkan(ad + am + ag);
}

// Возвращает Аркан "Черты характера в минусе " т.е. то что человек проявляет если "уходит в карму"
// Это разность полей 1 - 3
// Поле "ЧХМ" в Базовой таблице
export function traitsMinus(data) {
    let ad = ArkDay(data);
    let ag = ArkYear(data)
    return numToArkan(ad - ag);
}

// Возвращает Аркан Зоны комфорта
// Это сумма полей 4 + 5
// Поле № 6 в Базовой таблице
export function ZK(data) {
    // let ad = ArkDay(data);
    // let am = ArkMonth(data)
    // let ag = ArkYear(data)
    // return numToArkan(ad + am + am + ag);
    return numToArkan(TP1(data) + TP4(data));

}

// Возвращает Аркан ОПВ1
// Это разность полей 1 - 2.  Формула ОПВ1 = АД - АМ
// Поле № 9 в Базовой таблице
export function OPV1(data) {
    let ad = ArkDay(data);
    let am = ArkMonth(data)
    return numToArkan(ad - am);
}

// Возвращает Аркан ОПВ2
// Формула ОПВ2 = АД - АГ
export function OPV2(data) {
    let ad = ArkDay(data);
    let ag = ArkYear(data)
    return numToArkan(ad - ag);
}

// Возвращает Аркан ОПВ3
// Формула ОПВ2 = ОПВ1 - ОПВ2
export function OPV3(data) {
    return numToArkan(OPV1(data) - OPV2(data));
}

// Возвращает Аркан ОПВ4
// Формула ОПВ2 = АМ - АГ
export function OPV4(data) {
    let am = ArkMonth(data);
    let ag = ArkYear(data)
    return numToArkan(am - ag);
}

// Возвращает Аркан ОПВ5
// Формула ОПВ5 = ОПВ1 + ОПВ2 + ОПВ3 + ОПВ4
export function OPV5(data) {
    return numToArkan(OPV1(data) + OPV2(data) + OPV3(data) + OPV4(data));
}

// Возвращает массив ТП по дате
export function arrayTP(data) {
    let res=[];
    res[0] = TP1(data);
    res[1] = TP2(data);
    res[2] = TP3(data);
    res[3] = TP4(data);
    res[4] = TP5(data);
    return res;
}
// Возвращает массив ОПВ по дате
export function arrayOPV(data) {
    let res=[];
    res[0] = OPV1(data);
    res[1] = OPV2(data);
    res[2] = OPV3(data);
    res[3] = OPV4(data);
    res[4] = OPV5(data);
    return res;
}

// Возвращает пересечение ОПВ (массив общих ОПВ) 2х человек по их датам рождения
export function genericOPV(data1, data2) {
    let res=[];
    let o1 = arrayOPV(data1);
    let o2 = arrayOPV(data2);

    for (let i = 0; i< o1.length; i++) {
        if (o2.includes(o1[i], 0)) {res.push(o1[i])}
    }
    return res;
}

// Возвращает true если val является какой-либо ОПВ человека.
export function isOPV(val, data) {
    if (!val || !data) {return false}
    let arrOPV = arrayOPV(data);
    val = parseInt(val);
    return arrOPV.includes(val, 0);
}

// Возвращает Число Жизни
export function numberOfLife(data) {
    let dd = new Date(data);
    let d = dd.getDate();
    let m = dd.getMonth() + 1;
    let y = dd.getFullYear();
    let s = d.toString() + m.toString() + y.toString();
    let res = 0;

    for ( let i=0; i< s.length; i++ ) { res += parseInt(s[i]);  }

    return res;
}

// Возвращает Аркан Числа Жизни
export function ArkNumberOfLife(data) {
    return numToArkan(numberOfLife(data));
}

// Возвращает Аркан ТП1
// Формула ТП1 = АД + АМ
export function TP1(data) {
    let n1 = ArkDay(data)
    let n2 = ArkMonth(data);
    return numToArkan(n1 + n2);
}

// Возвращает Аркан ТП2
// Формула ТП2 = АД + АГ
export function TP2(data) {
    let n1 = ArkDay(data)
    let n2 = ArkYear(data);
    return numToArkan(n1 + n2);
}

// Возвращает Аркан ТП3
// Формула ТП3 = ТП1 + ТП2
export function TP3(data) {
    return numToArkan(TP1(data) + TP2(data));
}

// Возвращает Аркан ТП4
// Формула ТП4 = АМ + АГ
export function TP4(data) {
    let n1 = ArkMonth(data)
    let n2 = ArkYear(data);
    return numToArkan(n1 + n2);
}

// Возвращает Аркан ТП5
// Формула ТП5 = ТП1 + ТП2 + ТП3 + ТП4
export function TP5(data) {
    return numToArkan(TP1(data) + TP2(data) + TP3(data) + TP4(data));
}

// Возвращает "Крышу" в Базовой таблице 2 (т.е. Качества для наработки)
export function roof1(data) { return numToArkan(TP1(data) + OPV1(data));}
export function roof2(data) { return numToArkan(TP2(data) + OPV2(data));}
export function roof3(data) { return numToArkan(TP3(data) + OPV3(data));}
export function roof4(data) { return numToArkan(TP4(data) + OPV4(data));}
export function roof5(data) { return numToArkan(TP5(data) + OPV5(data));}

export function arrayRoof(data) {
    let res = [];
    res[0] = numToArkan(TP1(data) + OPV1(data));
    res[1] = numToArkan(TP2(data) + OPV2(data));
    res[2] = numToArkan(TP3(data) + OPV3(data));
    res[3] = numToArkan(TP4(data) + OPV4(data));
    res[4] = numToArkan(TP5(data) + OPV5(data));
    return res;
}


// Возвращает "Подвал" в Базовой таблице 2 (т.е. сценарии которые "включают" карму)
export function footer1(data) { return numToArkan(TP1(data) - OPV1(data));}
export function footer2(data) { return numToArkan(TP2(data) - OPV2(data));}
export function footer3(data) { return numToArkan(TP3(data) - OPV3(data));}
export function footer4(data) { return numToArkan(TP4(data) - OPV4(data));}
export function footer5(data) { return numToArkan(TP5(data) - OPV5(data));}

export function arrayFooter(data) {
    let res = [];
    res[0] = numToArkan(TP1(data) - OPV1(data));
    res[1] = numToArkan(TP2(data) - OPV2(data));
    res[2] = numToArkan(TP3(data) - OPV3(data));
    res[3] = numToArkan(TP4(data) - OPV4(data));
    res[4] = numToArkan(TP5(data) - OPV5(data));

    return res;
}

// Возвращает Матричный код
export function matrixCode(data) {
    let dd = new Date(data);
    let d = dd.getDate();
    let m = dd.getMonth() + 1;
    return 55 - d - 2 * m;
}

// Возвращает Истинный Матричный код человека если он ретрограден
export function trueMatrixCode(data,retro) {
    let code = matrixCode(data);
    if (retro) return code < 40 ? code + 13 : code + 1;
    return code;
}

// Возврращает массив "совместимости" по начальным параметрам
// a1 - аркан партнера1
// a2 - аркан партнера2
export function compatibilityArray(a1,a2) {
    let res=[];
    a1 = parseInt(a1);
    a2 = parseInt(a2);
    res[0] = numToArkan(a1);                                // A1
    res[1] = numToArkan(a2);                                // A2
    res[2] = numToArkan(a1 + a2);                        // A3
    res[4] = numToArkan(a1 + res[2]);                    // A1 + A3
    res[5] = numToArkan(a2 + res[2]);                    // A2 + A3
    res[3] = numToArkan(res[4]-res[5]);                  // A4
    return res;
}
