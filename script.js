const weekDays1 = ['Sunday','Monday','Tuesday']
const weekDays2 = ['Wednesday','Thursday','Friday','Saturday']

const week =weekDays1.concat(weekDays2)
console.log(week);
//===========================================================
const words = ['knot', 'roof', 'snake', 'humanity', 'available', 'automatic'];

const longWords =words.filter((word)=> (word.length>6));
const shortWords =words.filter((word)=> (word.length==4));

console.log(longWords);
console.log(shortWords);
//===========================================================
const num = [1, 9, 16, 15, 36, 45];
const powerd =num.map(x=>x*x);
console.log(powerd);

const sqrt1 =num.map(x=>Math.sqrt(x));
console.log(sqrt1);

//==============================================================
const el = num.find(function(element) {
    return (element % 3 === 0 && element % 5 === 0)
})
console.log(el);

const el2 = num.find(function(element) {
    return element % 2=== 0
})
console.log(el2);

const weeknum =week.concat(num)
console.log(weeknum);
//======================================================
const number = ["5","6","3"];
const isContain3 = number.includes("3")
console.log(isContain3) 
//======================================================
const strWeek = week.join()
console.log(strWeek) 
//=======================================================
const strnum = number.join("@")
console.log(strnum) 
//=======================================================
const weekRev = week.reverse();
console.log(weekRev);
//=======================================================
const text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit, Eveniet beatae ut sequi ipsa, labore commodi,'
const arrayText = text.split(",")
console.log(arrayText);
//=======================================================