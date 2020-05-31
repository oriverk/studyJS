'use strict';

{
  // const score = 80;
  // const score = 90;
  // const score = 100;

  // const otherScores = [10, 20];
  // const scores = [80, 90, 100, 70, ...otherScores];
  // scores.push(60, 50);　// ケツを追加
  // scores.pop();   // ケツを削除
  // scores.shift(); // 先頭を削除
  // scores.unshift(55); //先頭追加

  // console.log(scores);
  // console.log(scores[1]);
  // scores[2] = 44;
  // console.log(scores[2]);

  // console.log(scores.length);

  // for (let i = 0; i < 3; i++){
  // for (let i = 0; i < scores.length; i++){
  //   console.log(`Score ${i}: ${scores[i]}`);
  // }

  // console.log(scores);

  // function sum(a, b) {
  //   console.log(a + b);
  // }

  // sum(...otherScores);

  // const [a, b, c, d] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(c);
  // console.log(d);

  // const [ a,b, ...others]

  // const scores = [80, 90, 40, 70];
  
  // scores.forEach((score) => {
  // scores.forEach((score, index) => {
  //   console.log(`Score ${index}: ${score}`);
  // })

  // const prices = [180, 190, 200];
  // const updatePrices = prices.map((price) => {
  //   return price + 20;
  // })

  // const updatePrices = prices.map(price => price + 20);
  // console.log(updatePrices);

  // const numbers = [1, 4, 7, 8, 10];
  // const evenNumbers = numbers.filter(number => {
  //   if (number % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  // const evenNumbers = numbers.filter(number => number % 2 === 0);
  // console.log(evenNumbers);

  // const point = [100, 180];
  // const point = { x: 100, y: 180 };

  // point.x = 120;
  // // point['y'] = 20;
  // // console.log(point);
  // // console.log(point.x);
  // // console.log(point['y']);

  // point.z = 90;
  // delete point.y;
  // console.log(point);

  // const point = {
  //   x: 100,
  //   y: 200,

  // };

  // const keys = Object.keys(point);
  // keys.forEach(key => {
  //   console.log(`Key: ${key} value: ${point[key]}`);
  // });

  // const points = [
  //   { x: 20, y: 20 },
  //   { x: 10, y: 20 },
  //   { x: 40, y: 20 },
  // ];
  // console.log(points[1].y);

  // let x = 1;
  // let y = x;   
  // x = 5;
  // console.log(x);   //x = 5
  // console.log(y);   //y = 1
  // let x = [1,2];
  // let y = x;
  // x[0] = 5;
  // console.log(x);   // x = [5,2]
  // console.log(y);   // y = [5, 2]

  // const str = 'hello';
  // console.log(str.length);
  //str.substring(開始位置、終了位置)
  // console.log(str.substring(2, 4));
  // console.log(str[1]);

  // const d = [2019, 11, 14];
  // console.log(d.join('/'));
  // console.log(d.join(''));
  
  // const t = '17:08:24';
  // console.log(t.split(':'));

  // const [hour, minute, second] = t.split(':');
  // console.log(hour);
  // console.log(minute);
  // console.log(second);

  // const scores = [10, 3, 9];
  // let sum = 0;
  
  // scores.forEach(score => {
  //   sum += score;
  // });

  // const avg = sum / scores.length;
  // console.log(sum);
  // console.log(avg);

  // console.log(Math.floor(avg));  // kirisage
  // console.log(Math.ceil(avg));   // kiriaege
  // console.log(Math.round(avg));   //shisha gonyuu
  // console.log(avg.toFixed(3));    // dai 3 i made

  // console.log(Math.floor(Math.random() * 6) + 1);  

  // const d = new Date();
  // console.log(`${d.getMonth() + 1}月 ${d.getDate()}日`)
  // const d = new Date(2019, 10); // 2019/11/01 00:00:00
  // d.setHours(10, 20, 30);
  // d.setDate(31);
  // d.setDate(d.getDate() + 3);
  // console.log(d);

  // alert('hello');
  // const answer = confirm('delete?');
  // if (answer) {
  //   console.log("deleted");
  // } else {
  //   console.log('cancelled');
  // }

  // let i = 0;
  // function showTime() {
  //   console.log(new Date());
  //   i++;
  //   if (i > 2) {
  //     clearInterval(intervalId);
  //   }
  // };

  // const intervalId = setInterval(showTime, 1000);

  // let i = 0;
  // function showTime() {
  //   console.log(new Date());
  //   const timeoutId = setTimeout(showTime, 1000);

  //   i++;
  //   if (i > 2) {
  //     clearTimeout(timeoutId);
  //   }
  // };
  // showTime();

  // const name = 'taguchi';
  // try {
  //   console.log(name.toUpperCase());
  // } catch (e) {
  //   console.log(e);
  // }
  // console.log('finish');

  class Post{
    constructor(text) {
      this.text = text;
        this.likeCount = 0;
    }
    
    show() {
      console.log(`${this.text} - ${this.likeCount}likes`);
    }

    like() {
      this.likeCount++;
      this.show();
    }

    static showInfo() {
      console.log('post class ver 1.0');
    }
  }

  const posts = [
    new Post('ruby'),
    new Post('golang'),
  ];

  // posts[0].like();
  Post.showInfo();


}