"use strict";

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const results = ['大吉', '中吉', '小吉', '凶'];
    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];
    btn.textContent = results[Math.floor(Math.random() * results.length)];
    //この上の式＝配列からランダムにひとつ要素を選ぶときの公式

  
    // btn.textContent = n;

    // switch (n) {
    //   case 0:
    //     btn.textContent = '大吉';
    //     break;
    //   case 1:
    //     btn.textContent = '中吉';
    //     break;
    //   case 2:
    //     btn.textContent = '小吉';
    //     break;
    // }
  });

}