// function func1(str){
//   return str;
// }

// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です"));

// const func2 = (str) => str;

// console.log("func2です");

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

// const myProfile = {
//   name: "じゃぇ",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age}= myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["ジャケ",28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name,age] = myProfile;

// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("ジャケ");

//分割代入

// const myProfile = {
//   name : "ジャケ",
//   age : 28,
//   addres : "広島"
// }

// const {name,age} = myProfile;
// console.log(name,age);

//配列の展開

// const arr1 =[1,2];
// // console.log(arr1);

// // console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// const arr2 =[1,2,3,4,5];
// const[...arr3] = arr2;
// // console.log(num1);
// // console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0]=100;
// console.log(arr6);//配列をコピー
// console.log(arr4);

// const arr7 = [...arr4,...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);

// arr8[0]=100;
// console.log(arr8);
// console.log(arr4);

//map filterを使った配列

// const nameArr = ["田中", "山田", "ジャケ"];
// // for (let index = 0;index < nameArr.length;index ++){
// //   console.log(`${index+1}番目は${nameArr[index]}です`);
// // }

// // // const nameArr2 = nameArr.map((name)=>{
// // //   return name;
// // // });

// // // console.log(nameArr2);

// // nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// // const numArr = [1,2,3,4,5];
// // const newNumArr = numArr.filter((num)=>{
// //   return num % 2 === 0; //条件式を抽出できる
// // });

// // console.log(newNumArr);

// const newNameArr = nameArr.map((name)=>{
//   if (name === "ジャケ"){
//     return name;
//   }else {
//     return `${name}さん`;
//   }
// })

// console.log(newNameArr);

// const val1 =1 >0 ? "tureです" :"falseです";
// console.log(val1);

// const num =1300;
// // console.log(num.toLocaleString());

// const formatNum = typeof num ==='number'? num.toLocaleString(): `数値を入力してください`;
// console.log(formatNum);

// const checkSum = (num1,num2) =>{
//   return num1 + num2 > 100 ? `100を超えています`:`許容範囲ないです`;
// }

// console.log(checkSum(50,30));

// const flag1 = true;
// const falg2 = false;
// if (flag1 || flag2){
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2){
//   console.log("1も2もtrueになります");
// }

// const num = 100;
// const fee = num || "金額未設定です";

// console.log(fee);

// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
