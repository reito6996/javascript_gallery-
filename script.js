// JavaScript
console.log('Hello world!');
const main = document.querySelector('#main-image');
const thumbs = document.querySelectorAll('.thumb');
const text = document.querySelector('#caption');
// 確認
// console.log(main);
// console.log(thumbs);
//     thumbs.forEach(function(item, index) {
    //     item.onmouseover= function() {
        //  console.log(this.dataset.image);
     //        main.src = this.dataset.image;
    //   }
// });
  //イベントリスナー
//thumbs.forEach(function (item, index) {
    //function change() {
      //main.src = this.dataset.image;
    //}
    //item.addEventListener('mouseover', change);
  //});
  //const text = document.querySelector('#caption');

//マウスオーバー
thumbs.forEach(function(item, index) {
  item.onmouseover = function() {
    main.src = this.dataset.image;
    text.textContent = this.title;
  }
});