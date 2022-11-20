// let name = prompt('Adinizi daxil edin:');
// function logGreeting(){
//     console.log(`${name} ıs a JS developer`);
// }
// logGreeting();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function name(username){
// console.log(`${username} is active now`);
// }
// name('Aisel');
// name('Xədicə');
// name('Nərmin');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let a = Number(prompt('1-ci ededi daxil et:'));
// let b = Number(prompt('2-ci ededi daxil et:'));
// let c = Number(prompt('3-cu ededi daxil et:'));
// function max(){
//     if(a>b && a>c){
//         console.log(a);
//     }
//     else if(b>a && b>c){
//         console.log(b);
//     }
//     else{
//         console.log(c);
//     }
// }
// max();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Tutaq ki, müştərinin rubl hesabında 1200 rubl,
//  dollar hesabında isə 20 dollar var.Bir dollar üçün məzənnə 75 rubl təşkil edir.
//  Bu halda, funksiya belə mesaj göstərməlidir: Bütün depozitlər üzrə məbləğ: 2700 rubl.

// let rubl=Number(prompt('Rubl Balansinizi daxil edin:'));
// let dollar=Number(prompt('Dollar balansinizi daxil edin:'));
// let exchange=Number(dollar*75);
// let sum= Number(exchange+rubl);
// function balance(sum){
//     console.log(`Umumi balans: ${sum}`);
// }
// balance(sum);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Parametr kimi iki ədəd qəbul edən və onlardan ən kiçiyini qaytaran min() funksiyası tərtib edin.

// let value;
// let min=(a,b) => {
// if(a>b){
//     value=b;
// }
// else{
//     value=a;
// }
// return value;
// }
// console.log(min(5,7));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Parametr kimi iki ədəd və riyazi əməliyyatın işarəsini qəbul edən və
//  bu riyazi əməliyyatın nəticəsini qaytaran calc funksiyasını yazın.

// let a = Number(prompt('1-ci ededi daxil et:'));
// let b = Number(prompt('2-ci ededi daxil et:'));
// let emeliyyat = prompt('Her hansi emeliyyat (+,-,/,*) daxil et:');
// function calc(a,b,emeliyyat) {   
// switch (emeliyyat) {
//     case '+':
// console.log(a+b);
//         break;
//     case '-':
// console.log(a-b);
//         break;
//     case '/':
// console.log(a/b);
//         break;
//     case '*':
// console.log(a*b);
//         break;
//     default:
//         console.log('duzgun emeliyyat daxil et!');
//         break;
// }
// }
// calc(a,b,emeliyyat);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let num=0;
// while(num<5){
//     num++;
//     console.log(num);
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let num = prompt('Enter the number:');

// while (num > 0) {
//   num--;
//   console.log(num);
// }

// console.log('The cycle is over');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let num = Number(prompt('Ikireqemli eded daxil edin:'));
// while(num<1000){
//     num+=7;
//     console.log(num);
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  istifadəçi  bankomatdan cixarmaq istədiyi məbləği daxil edir(sonsuz sayda, əməliyyatı dayandırmağıda  nəzərə alın).
//             * daxil edilən məbləğə uyğun console-a əskinasları sayi ile çap edirik.
//             *
//             * eskinaslar : 200, 100, 50, 20, 10, 5, 1
//             *
//             * məsələn daxil edilən pul miqdari 45 dir:
//             * 2 ədəd 20 azn
//             * 1 ədəd 5 azn
//             *Qeyd: nəzərə alın ki ilkin olaraq hesabda olan ən böyük pul əskinaslarından bizə verməlidir
//              məsələn 25 azn çıxarırıqsa bunu ilk olaraq ən böyük əskinasa uyğun 1 ədəd 20 azn və bir ədəd 5 azn 
//              əgər 20 azn-lik əskinas bitibsə bankomatda 2 ədəd 10 azn 1 ədəd 5 azn qaytarmaldır
            
// let mebleg=Number(prompt('Cixarmaq istediyiniz meblegi daxil edin:'));
// let eskinas=[1,5,10,20,50,100,200]
// let say=1;
// for(i=0;i<eskinas.length;i++){
//     console.log(eskinas[i]);
 
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin. 
// Bu rəqəmi üçrəqəmli olana qədər 7 - ədədə qədər artırın.
// Son dəyəri konsola çıxarın.

// let num=Number(prompt('Ikireqemli eded daxil edin:'));
// while(num<=100){
//     num+=7;
// }
// console.log(num);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Konsola N dəfə 
// «I know how to use cycles»
// mesajı çıxaran proqram yazın. 
// Proqram N ədədini 
// istifadəçidən soruşur.

// let n=Number(prompt('Eded daxil edin:'));
// let i=0;
// while(i<n)
// {console.log('I know how to use cycles');
//     i++;
// }
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Sonu 0 ilə bitən bütün üçrəqəmli ədədləri konsola çıxaran proqram yazın.

// let n=100;
// while(n<1000){
//     n++;
// if(n%10==0){
// console.log(n);
// }
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Bütün ikirəqəmli tək ədədlərin cəmini konsola çıxaran proqram yazın.
// let sum=0;
// let num=10;
// while(num<100){
// num++;
// if(num%2==1){
//     sum+=num;
// }
// }
// console.log(sum);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let n;
// while(n=2){
//     n++;
//     if(n%n==1 && n%1==n){
// console.log('sade ededdir');
//     }
//     else{
//         console.log('murekkeb ededdir');
//     }
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Sayğaclı dövrün köməyi ilə 10-a qədər bütün ədədlərin hasilin tapan proqram tərtib edin. 
// Alınan dəyəri konsola çıxarın.

// let hasil=1;
// for(let i=1;i<=10;i++){
//     hasil*=i;
//     ;
// }console.log(hasil)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// İstifadəçidən mətn daxil etməsini tələb edən və mətn elementlərini əks qaydada düzən proqram tərtib edin.

// let text=prompt('Enter text here');
// for(let i=text.length-1;i>=0;i--){
//     console.log(text);
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Üç addan ibarət massiv yaradın.
// Massivin ikinci elementinin dəyərini “Classified” ilə əvəz edin.
// Massivi konsola çıxarın.

// let name=['Inci','Aisel','Subhan']
// name[1]='classified';
// console.log(name);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Massivin duzelmesi

// let names=['Aisel','Inci','Subhan','Mehbube']
// names.push('Almaz');
// console.log(names);  massivin sonuna element elave etmek

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let names=['Aisel','Inci','Subhan','Mehbube','Almaz'];
// let remove=names.pop();
// console.log(names);
// console.log(remove); massivden sonuncu elementi silmek
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let names=['Aisel','Inci','Subhan','Mehbube','Almaz'];
// let remove=names.shift();
// console.log(names);
// console.log(remove);  massivin ilk elementinin silinmesi
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let names=['Inci','Subhan','Mehbube','Almaz'];
// names.unshift('Aisel');
// console.log(names);  massivin evveline element elave etmek;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Üç qrup yoldaşının adlarından ibarət massiv yaradın;
// Başqa bir qrup yoldaşının adını massivin sonuna əlavə edin;
// İlk adı silin;
// Massivi konsola çıxarın.

// let name=['Aysel','Xedice','Nermin']
// name.push('Nuray');
// let remove=name.shift();
// console.log(name);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let name=['Aysel','Xedice','Nermin']
// let names=name.join(' ve ');
// console.log(names); massivi metne cevirmek ucundur

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// '32, 31, 34, 36, 31' mətni verilmişdir;
// İçindəki vergülləri nöqtəli vergüllə əvəz edin.

// let str = '32, 31, 34, 36, 31';
// let arr1=str.split(',');
// let arr=arr1.join(';');
// console.log(arr);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let names=['Aisel','Efendi','Almaz']
// let [firstname,lastname,fathername]=names;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const nameParts = ['John', 'Jonah', 'Jameson'];
// const [firstName, ...otherParts] = nameParts;

// console.log(firstName);
// // John
// console.log(otherParts);
// // ['Jonah', 'Jameson']

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 10 ədəddən ibarət massiv yaradın. 
// İlk 2 ədədi dəyişənlərə yazın və qalanlardan yeni massiv yaradın.

// let num=[1,2,3,4,5,6,7,8,9,10]
// let [first,second, ...others]=num;
// console.log(first,second);
// console.log(others);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let num=[1,2,3,4,5,6,7,8,9,10]
// console.log(...num);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10 ədəddən ibarət massiv yaradın.
// Massiv deyil, arqumentlər qəbul edən Math.max funksiyasından istifadə edərək onların arasında maksimumu tapın. 
// spread-operatorundan istifadə edərək massiv arqumentlərini funksiyaya ötürün.

// let nums=[1,2,3,4,5,6,7,8,9,10];
// let [bir,iki,uc,dord,bes,alti,yeddi,sekkiz,doqquz,on]=nums;
// let max=Math.max(...nums);
// console.log(max);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5 rəqəmdən ibarət massiv yaradın. 
// Orijinal massivin surətini çıxarın və yeni massivin bütün elementlərini ikiqat artırın.
// Orijinal massivin dəyişmədiyini yoxlayın.

// let num=[1,2,3,4,5]
// let number=[...num];
// num.push();2;
// console.log(num);
// console.log(number);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const player={
//     name: "Eric Cartman",
//     greet()
//     {
//         console.log('Hello');
//     }
// }
// console.log(player.greet);



// const user = {
//     firstName: 'John',
//     lastName: 'Smith',
//     age: 37,
//     department: 'management',
//     setAge(age){
//       this.age=age ;
//        getYearsBeforeRetirement(){

//     }  
//     console.log(getYearsBeforeRetirement(`50-${this.age}`))
//     }
// }

//   // user.setAge(40);
//   user.getYearsBeforeRetirement();
//   // console.log(user)

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// KLASLAR

// Person klası yaradın, hansıki surname, name, age, gender özəllikləri ilə obyekt yaradır . 
// Bu klasın üç nümunəsini yaradın və onları konsola çıxarın.

// class Person{
// constructor(surname,name,age,gender){
// this.surname=surname;
// this.name=name;
// this.age=age;
// this.gender=gender;
// }
// }
// const person1=new Person('Efendieva','Aisel',19,'F');
// const person2=new Person('Efendiev','Almaz',52,'M');
// const person3=new Person('Efendieva','Inci',7,'F');

// console.log(person1);
// console.log(person2);
// console.log(person3);

class Person {
  constructor(name, surname,age,gender){
      this.name=name,
      this.surname=surname,
      this.age=age,
      this.gender=gender
  }
  celebrateBirthday (){
      return ++this.age;
  }
}
let person1=new Person('Gulshen','Settarova',26,1);
let person2=new Person('Samid','Mirsaabov',35,0);
let person3=new Person('Nurlan','Shukurov',26,0);
console.log(person1.celebrateBirthday())
console.log(person2)
console.log(person3)