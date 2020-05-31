'use strict';

{
  let t = 0;
  function draw() {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined') {
      retrun;
    }
    // ctx means context
    // const ctx = canvas.getContext('2d');
    
    // ctx.fillStyle = 'pink';
    // ctx.strokeStyle = '#f00';
    
    // ctx.fillRect(x, y, width, height);
    // ctx.fillRect(50, 50, 50, 50); //塗りつぶし
    // ctx.lineWidth = 8;
    // ctx.lineJoin = 'round'; //角丸
    // ctx.lineJoin = 'bevel';  //角ななめ
    // ctx.strokeRect(50, 50, 50, 50); //枠のみ
    
    // ctx.fillStyle = 'skyblue';
    // ctx.strokeStyle = '#00b';

    // ctx.fillRect(70, 70, 50, 50); //塗りつぶし
    // ctx.strokeRect(70, 70, 50, 50); //枠のみ

    // ctx.createLineGradient(x0, y0, x1, y1);
    // const g = ctx.createLinearGradient(0, 0, canvas.width, 0);

    // const g = ctx.createRadialGrarient(
    //   x0, y0, r0,
    //   x1, y1, r1
    // );
    // const g = ctx.createRadialGradient(
    //   canvas.width/2, canvas.height/2, 50,
    //   canvas.width/2 +100, canvas.height/2 +100, 500
    // );
    
    // g.addColorStop(0, '#f00');
    // g.addColorStop(0.3, '#0f0');
    // g.addColorStop(0.5, '#000000');
    // g.addColorStop(1, '#00f');

    // ctx.fillStyle = g;

    // // ctx.fillRect(0, 0, 600, 240);
    // ctx.fillRect(0, 0, canvas.width, canvas.height);

    // const ctx = canvas.getContext('2d');

    // ctx.shadowOffsetX = 4;
    // ctx.shadowOffsetY = 4;
    // ctx.shadowBlur = 4;
    // ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';

    // ctx.fillRect(50, 50, 50, 50);

    // ctx.beginPath();
    // ctx.moveTo(50, 50);
    // ctx.lineTo(100, 50);
    // ctx.lineTo(100, 100);
    // ctx.closePath();　//線を閉じる
    // // ctx.stroke();
    // ctx.fill();

    // const ctx = canvas.getContext('2d');

    // ctx.beginPath();
    // ctx.moveTo(100, 50);
    // ctx.lineTo(200, 50);
    // ctx.setLineDash([5, 10]); //点線
    // ctx.stroke();
    
    // ctx.beginPath();
    // ctx.moveTo(100, 100);
    // ctx.lineTo(200, 100);
    // ctx.setLineDash([]); //点線打ち消し
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.moveTo(100, 150);
    // ctx.lineTo(200, 150);
    // ctx.lineWidth = 16;
    // ctx.lineCap = 'round'; //線の終端を修飾
    // ctx.stroke();

    // const ctx = canvas.getContext('2d');
    // // ctx.arc(x, y, r, start radian, end radian); //円弧
    // // ctx.arc(100, 100, 50, 0, 2 * Math.PI);
    // // ctx.arc(100, 100, 50, 0, 300 / 360 * 2 * Math.PI);
    // // ctx.arc(100, 100, 50, 0, 300 / 180 * Math.PI);
    // ctx.moveTo(100, 100);
    // ctx.arc(100, 100, 50, 0, 300 / 180 * Math.PI, true); //半時計
    // // ctx.stroke();
    // ctx.fill();

    // const ctx = canvas.getContext('2d');

    // ctx.ellipse(x, y, x方向半径, y方向半径, 回転角度, start, end); // 楕円
    // ctx.ellipse(100, 100, 50, 30, 0, 0, 2 * Math.PI);
    // ctx.rect(50, 50, 50, 50);
    // ctx.stroke();

    // const ctx = canvas.getContext('2d');

    // ctx.beginPath();
    // ctx.moveTo(0, 100);
    // ctx.lineTo(canvas.width, 100);
    // ctx.moveTo(100, 0);
    // ctx.lineTo(100, canvas.height);
    // ctx.stroke();

    // ctx.font = 'bold 64px Verdana';
    // ctx.textAlign = 'right';
    // ctx.textBaseline = 'top';

    // // ctx.fillText('Tokyo', 100, 100);
    // // ctx.fillText('Tokyo', 100, 100, 100);
    // ctx.strokeText('Tokyo', 100, 100, 100);

    // const ctx = canvas.getContext('2d');

    // const img = document.createElement('img');
    // img.src = 'logo.png';

    // img.addEventListener('load', () => {
    //   // ctx.drawImage(img, 0, 0);
    //   // ctx.drawImage(img, 0, 0, 40, 40);
    //   // const pattern = ctx.createPattern(img, 'repeat'); //縦横に
    //   // repeat-x, repeat-y, no-repeat
    //   const pattern = ctx.createPattern(img, 'repeat-y'); //縦に
    //   ctx.fillStyle = pattern;
    //   ctx.fillRect(0, 0, canvas.width, canvas.height);
    // });

    // const ctx = canvas.getContext('2d');
    // const img = document.createElement('img');
    // img.src = 'img/sprite.png';

    // img.addEventListener('load', () => {
    //   // ctx.drawImage(img, 0, 0);
    //   ctx.drawImage(
    //     img,
    //     // sx, sy, sw, sh    s = source原点
    //     70 * 2, 70, 70, 70,
    //     // dx, dy, dw, dh   d = destination
    //     0, 0, 35, 35
    //   );
    // });

    // const ctx = canvas.getContext('2d');

    // // ctx.fillStyle = "pink";
    // // ctx.fillRect(0, 0, 200, 200);
    
    // ctx.beginPath();
    // ctx.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI);
    // ctx.fillStyle = 'black';
    // ctx.fill();
    
    // ctx.beginPath();
    // ctx.ellipse(80, 100, 8, 8, 0, 0, 2 * Math.PI);
    // ctx.ellipse(120, 100, 8, 8, 0, 0, 2 * Math.PI);
    // ctx.fillStyle = 'skyblue';
    // ctx.fill();
    
    // ctx.save();
    
    // ctx.scale(0.5, 0.5); //倍率
    // ctx.translate(400, 0); //移動
    // ctx.rotate(45 / 180 * Math.PI);
    
    // ctx.fillStyle = "olive";
    // ctx.fillRect(0, 0, 200, 200);
    
    // ctx.beginPath();
    // ctx.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI);
    // ctx.fillStyle = 'black';
    // ctx.fill();
    
    // ctx.beginPath();
    // ctx.ellipse(80, 100, 8, 8, 0, 0, 2 * Math.PI);
    // ctx.ellipse(120, 100, 8, 8, 0, 0, 2 * Math.PI);
    // ctx.fillStyle = 'skyblue';
    // ctx.fill();
    
    // ctx.restore();
    // ctx.fillStyle = 'black';
    // ctx.fillRect(80, 120, 40, 40);

    // アニメーション    
    // const ctx = canvas.getContext('2d');

    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    // ctx.beginPath();
    // ctx.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI);
    // ctx.fillStyle = 'black';
    // ctx.fill();
    
    // ctx.beginPath();
    // ctx.ellipse(80 + Math.sin(t /30), 100, 8, 8, 0, 0, 2 * Math.PI);
    // ctx.ellipse(120 + Math.sin(t /30), 100, 8, 8, 0, 0, 2 * Math.PI);
    // ctx.fillStyle = 'skyblue';
    // ctx.fill();

    // t++;
    // setTimeout(draw, 10); // 10ms

    //高解像度化
    const ctx = canvas.getContext('2d');

    const CANVAS_WIDTH = 600;
    const CANVAS_HEIGHT = 240;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = CANVAS_WIDTH * dpr;
    canvas.height = CANVAS_HEIGHT * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = CANVAS_WIDTH + 'px';
    canvas.style.height = CANVAS_HEIGHT + 'px';

    ctx.font = 'bold 48px Verdana';
    ctx.strokeText('Tokyo', 100, 100);
  }
  
  draw();
}
