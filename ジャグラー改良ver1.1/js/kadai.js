
//確率：14７行周辺8
//リール速度：104行gurai
var kaiten = 0;
var bbkaiten = 0; //ボーナス間
var bb = 0;
var rb = 0;
var yakuCount = 0;
var startGogo = true;
//var jugren = false;



var betOk = false;
var nowStatus = false;

var tousigaku = 0

//スロット本体の設定
var credit = 0;
var pay = 0;
var peka = 0;//これが0 or 1になるとペカる

//trueじゃないとボーナス恩恵なし
var go777 = false; 


var goCount = 0; //天井　今の設定は15回

//button
var push1 = true;
var push2 = true;
var push0 = true;



//ペカランプの準備
function insertSmallImage() {
  const pekaElement = document.getElementById('peka');

  // 画像要素を作成
  const imgElement = document.createElement('img');

  // 画像のソースを設定
  imgElement.src = './img/gogo.png';

  // 画像のサイズを小さくするスタイルを設定
  imgElement.style.width = '100px'; // 例として幅を100pxに指定
  imgElement.style.height = 'auto'; // 縦横の比率を保ちつつ自動で高さを調整

  // 画像を <p id='peka'> の子要素として追加
  pekaElement.appendChild(imgElement);
}

//ペカランプを消す処理
function removeImage() {
  const pekaElement = document.getElementById('peka');
  const imgElement = pekaElement.querySelector('img'); // <p id='peka'> 内の img 要素を取得

  if (imgElement) {
    pekaElement.removeChild(imgElement); // img 要素を <p id='peka'> の子要素から削除
  }
}

//ベルの処理
function playAudioTwice() {
  const koyakuAudio = document.getElementById('koyaku_audio');

  // 音声を一回目再生
  koyakuAudio.currentTime = 0;
  koyakuAudio.play();

  // 0.5秒待ってから、音声を二回目再生
  setTimeout(function() {
    koyakuAudio.currentTime = 0;
    koyakuAudio.play();
  }, ); // 500ミリ秒（0.5秒）の待機時間
}

//リール
var carr = [
  {f:false,value:0,obj:null},
  {f:false,value:0,obj:null},
  {f:false,value:0,obj:null}
];

///////////////
       var correctPassword = "";

       function getPasswordAndExecute() {
           var enteredPassword = prompt("パスワードを入力してください:", "");

           if (enteredPassword === correctPassword) {
               kakin();
           } else {
               alert("パスワードが正しくありません。");
           }
       }

//1000円吸う
function kakin(){
  document.getElementById('tousi1').currentTime = 0; 
  document.getElementById('tousi1').play();

  //投資学ランを増やして、クレジット挿入
  tousigaku += 100;
  credit += 46;
  document.getElementById("tousi").innerHTML = tousigaku + "円";
  document.getElementById("credit").innerHTML = credit;

  /*z
  //よく見るあれの狂言版
  if(tousigaku > 100000){
    alert('はよ帰れ')
  }else if(tousigaku > 50000){
    alert('あなた本当にやばいです。 早く帰ってどこかに診てもらいしょう。')
  }else if(tousigaku > 40000){
    alert('ほんとにやめたほうがいいです..?')
  }else if(tousigaku > 30000){
    alert('熱くなりすぎです。 総投資額で今なにが買えるか今一度考え直してください')
  }else if(tousigaku > 20000){
    alert('パチンコ・スロットは適度に楽しむ遊びです。のめり込みに注意しましょうね??????????')
  }else if(tousigaku > 15000){
    alert('「パチンコ・スロットは適度に楽しむ遊びです。のめりこみに注意しましょう。」')
  }
  */
}


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
//リールの速さを調整するところはここ




window.addEventListener("load",function(){
  if (peka == 0){
        //koko
        setInterval(interval,67);
    for(let i = 0; i < carr.length ; i++){
      carr[i].obj=document.getElementById("c" + ( i + 1 ) );
    }

  }
});


function interval(){
  if(nowStatus){
    for(let i = 0; i < carr.length; i++){
      if(carr[i].f){
        //1を足して10で割った余りを入れる(9を超えない用)
        carr[i].value = (carr[i].value+1) %10;
        carr[i].obj.innerHTML = carr[i].value;
      }
    }
  }
}

//maxbet
function bet(){
if(credit >= 3){
    if(betOk == false){
      document.getElementById('btn_audio1').currentTime = 0; 
      document.getElementById('btn_audio1').play(); //クリックしたら音を再生
      betOk = true;
      document.getElementById("credit").innerHTML = credit -= 3;
      document.getElementById("pay").innerHTML = 0;
    }
  }else{
    alert('コインを入れてください。')}
  }


  //ミンナニハナイショダヨ
  function magic(){
    peka = 0;
  }


  /*

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
pekaランプ設定はここ
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ーーーーーーーーーーーーーーー


  */

//////////////////////////////////ここからスタート////////////////////////////////////////////////
function start(){
  
  //子役等ランダム処理
  //ここで確率いじれる
  peka = Math.floor(Math.random() * 120);
  //
  //

  /*
  //ジャグ連処理 BBごはBBが当たりやすい！
  if(bbkaiten <= 50 && jugren == true){
    peka = Math.floor(Math.random() * 60); 
  }else{
  jugren = false
  }
  */

  if(startGogo){
    startGogo = false;
    document.getElementById("kaiten").innerHTML = kaiten += 1;
    document.getElementById("bbkaiten").innerHTML = bbkaiten += 1;
    
  }
  //回転数追加
  
  if(betOk){

  if(nowStatus){return;}

    document.getElementById('btn_audio2').currentTime = 0; 
    document.getElementById('btn_audio2').play(); //クリックしたら音を再生
  nowStatus=true;

  for(let i = 0; i < carr.length; i++){
    carr[i].f = true;
  } 
}
}

//stopbutton*3
function stop(count){
  if(nowStatus){
    //同じボタンは二度押せない！
    if(count == 0 && push0 == true){
      document.getElementById('btn_audio3').currentTime = 0; 
      document.getElementById('btn_audio3').play(); //クリックしたら音を再生
      push0 = false;
    }
    if(count == 1 && push1 == true){
      document.getElementById('btn_audio3').currentTime = 0; 
      document.getElementById('btn_audio3').play(); //クリックしたら音を再生
      push1 = false;
    }
    if(count == 2 && push2 == true){
      document.getElementById('btn_audio3').currentTime = 0; 
      document.getElementById('btn_audio3').play(); //クリックしたら音を再生
      push2 = false;
    }

      carr[count].f=false;

    if(!carr[0].f && !carr[1].f && !carr[2].f){

      //初期化処理
      nowStatus = false;

      var judge = Math.floor(Math.random() * 3);

      //-----------------------------ーーーーーーーーーーーーーーーーーーーーーーーーー
      //777の処理
      //
      //
      setTimeout(function() {
        if (go777 == true && carr[0].value == 7 && carr[1].value == 7 && carr[2].value == 7 && judge == 0 ) {
            document.getElementById('btn_audio777').currentTime = 0; 
            document.getElementById('btn_audio777').play(); 
            // スリー７が揃ったらお祝いBGM

            //ペカランプ初期化　もう一度betさせる
            betOk = false;
            document.getElementById("credit").innerHTML = credit += 252;
            document.getElementById("pay").innerHTML = 252;
            removeImage();
            go777 = false;
            push0 = true;
            push1 = true;
            push2 = true;
            startGogo = true; 
            jugren = true;

            bbkaiten = 0;
            document.getElementById("bbkaiten").innerHTML = bbkaiten;
            document.getElementById("bb").innerHTML = bb += 1;
            document.getElementById("yakuCount").innerHTML = yakuCount += 1;

        }else if(go777 == true && carr[0].value == 7 && carr[1].value == 7 && carr[2].value == 7 && (judge == 1 || judge == 2)) {
          document.getElementById('btn_audio77').currentTime = 0; 
          document.getElementById('btn_audio77').play(); 
          // スリー７が揃ったらお祝いBGM

          //ペカランプ初期化　もう一度betさせる
          betOk = false;
          document.getElementById("credit").innerHTML = credit += 96;
          document.getElementById("pay").innerHTML = 96;
          removeImage();
          go777 = false;
          push0 = true;
          push1 = true;
          push2 = true;
          startGogo = true; 
          jugren = true;

          bbkaiten = 0;
          document.getElementById("bbkaiten").innerHTML = bbkaiten;
          document.getElementById("rb").innerHTML = rb += 1;
          document.getElementById("yakuCount").innerHTML = yakuCount += 1;

      }else if(go777 == false && carr[0].value == 7 && carr[1].value == 7 && carr[2].value == 7){
          ///777ハズレ処理
          document.getElementById("c3").innerHTML = 8;
                  //ハズレの処理
        document.getElementById("credit").innerHTML = credit += 1;
        document.getElementById("pay").innerHTML = 1;

          betOk = false;
          go777 = false;
          push0 = true;
          push1 = true;
          push2 = true;
          startGogo = true; 
        }
    }, 100);



    //約判定
      if(carr[0].value==carr[1].value && carr[1].value==carr[2].value){
        
        if (!(carr[0].value == 7 && carr[1].value == 7 && carr[2].value == 7)){

          if(carr[0].value == 1){
            //bell
            document.getElementById('koyaku_audio3').currentTime = 0; 
            document.getElementById('koyaku_audio3').play(); 
            betOk = false;
            document.getElementById("credit").innerHTML = credit += 10;
            document.getElementById("pay").innerHTML = 10;
            push0 = true;
            push1 = true;
            push2 = true;
            startGogo = true; 
            document.getElementById("yakuCount").innerHTML = yakuCount += 1;
          }else if(carr[0].value == 2){
            //bell
            document.getElementById('koyaku_audio').currentTime = 0; 
            document.getElementById('koyaku_audio').play(); 
            betOk = false;
            document.getElementById("credit").innerHTML = credit += 9;
            document.getElementById("pay").innerHTML = 9;
            push0 = true;
            push1 = true;
            push2 = true;
            startGogo = true; 
            document.getElementById("yakuCount").innerHTML = yakuCount += 1;
          }else if(carr[0].value == 3){
            //replay
            document.getElementById('koyaku_audio1').currentTime = 0; 
            document.getElementById('koyaku_audio1').play(); 
            push0 = true;
            push1 = true;
            push2 = true;
            startGogo = true; 
            document.getElementById("yakuCount").innerHTML = yakuCount += 1;
          }else if(carr[0].value == 4){
            //bell
            document.getElementById('koyaku_audio').currentTime = 0; 
            document.getElementById('koyaku_audio').play(); 
            betOk = false;
            document.getElementById("credit").innerHTML = credit += 9;
            document.getElementById("pay").innerHTML = 9;
            push0 = true;
            push1 = true;
            push2 = true;
            startGogo = true; 
            document.getElementById("yakuCount").innerHTML = yakuCount += 1;
          }else if(carr[0].value == 5){
            //replay
            document.getElementById('koyaku_audio1').currentTime = 0; 
            document.getElementById('koyaku_audio1').play(); 
            push0 = true;
            push1 = true;
            push2 = true;
            startGogo = true; 
            document.getElementById("yakuCount").innerHTML = yakuCount += 1;
          }else if(carr[0].value == 6){

              //cherryーーーーーーーーーーーーーーーーーーーーーーー
              //の処理
  
              goCount += 1;
              //チェリーをいっぱい揃えると強制天井
  
            document.getElementById('koyaku_audio2').currentTime = 0; 
            document.getElementById('koyaku_audio2').play(); 
            betOk = false;
            document.getElementById("credit").innerHTML = credit += 2;
            document.getElementById("pay").innerHTML = 2;
  
            if((peka == 1 && go777 == false) || goCount == 15){
              goCount = 0;
              document.getElementById('pekari').currentTime = 0; 
              document.getElementById('pekari').play(); 
              insertSmallImage();
              go777 = true;
            }
            push0 = true;
            push1 = true;
            push2 = true;
            startGogo = true; 
            document.getElementById("yakuCount").innerHTML = yakuCount += 1;

          }else if(carr[0].value == 8){
            //bell
            document.getElementById('koyaku_audio').currentTime = 0; 
            document.getElementById('koyaku_audio').play(); 
            betOk = false;
            document.getElementById("credit").innerHTML = credit += 9;
            document.getElementById("pay").innerHTML = 9;
            push0 = true;
            push1 = true;
            push2 = true;
            startGogo = true; 
            document.getElementById("yakuCount").innerHTML = yakuCount += 1;
          }else if(carr[0].value == 9){
            //replay
            document.getElementById('koyaku_audio1').currentTime = 0; 
            document.getElementById('koyaku_audio1').play(); 
            push0 = true;
            push1 = true;
            push2 = true;
            startGogo = true; 
            document.getElementById("yakuCount").innerHTML = yakuCount += 1;
          }else if(carr[0].value == 0){
            //bell#2
            playAudioTwice();
            betOk = false;
            document.getElementById("credit").innerHTML = credit += 14;
            document.getElementById("pay").innerHTML = 14;
            push0 = true;
            push1 = true;
            push2 = true;
            startGogo = true; 
            document.getElementById("yakuCount").innerHTML = yakuCount += 1;
          }

        /*if(koyaku == 0){
          document.getElementById('koyaku_audio').currentTime = 0; 
          document.getElementById('koyaku_audio').play(); 
          betOk = false;
          document.getElementById("credit").innerHTML = credit += 9;
          document.getElementById("pay").innerHTML = 9;
        }else if(koyaku == 1){
          document.getElementById('koyaku_audio1').currentTime = 0; 
          document.getElementById('koyaku_audio1').play(); 
        } 
        使わないけど、何か合った時用で保存*/
        }
      }else{

        if(credit <= 150){
                //ハズレの処理
        document.getElementById("credit").innerHTML = credit += 1;
        document.getElementById("pay").innerHTML = 1;
        }

        //初期化　もう一度betさせる
        betOk = false;
        //ボタン復活
        push0 = true;
        push1 = true;
        push2 = true;
        startGogo = true; 
      }
        if(peka == 0 && go777 == false){
          document.getElementById('pekari').currentTime = 0; 
          document.getElementById('pekari').play(); 
          insertSmallImage();
          //pekaさせる
          go777 = true;
        }
      }
    }
  }


//ここから交換ページ
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
/*
var rieki1 = credit * 20;
var rieki = rieki1 - tousigaku;

function moving() {
  const confirmation = window.confirm("精算しますか？");
  if (confirmation) {
    // OKを選択した場合はページを移動
    if(tousigaku == 0 && credit == 0){
    alert("あなたこの店来てなにもしてないでしょ！")
  }else if(tousigaku <= 1000 && credit == 0){
    alert("あなたはなに一つ景品をゲットできずに帰宅した...")
  }else if(tousigaku <= 1000 && credit <50){
    alert("あなたはちっちゃなお菓子を交換してもらい店を出た。いつかまた取り返す")
    document.getElementById("credit").innerHTML = credit = 0;
    document.getElementById("pay").innerHTML = 0;
    document.getElementById("tousi").innerHTML = tousigaku = 0;
  }

  if(rieki != 0){
  alert("あなたは特殊景品をもらい、換金所に向かった");
  
  }
    
  } else {
    alert("もうすこし居よう...")
    // キャンセルを選択した場合はページにとどまる
    // 何もしない
  }
}
*/

function moving() {
  // ページ移動の確認アナウンス
  var confirmation = confirm("精算しますか？(はいを押すと、手持ちのクレジットが全て消えてしまいます！)");
  if (confirmation && credit <= 50){
  alert("所持メダルが50枚以上ないと精算できません。");
  confirmation = false;
  }

  if (confirmation) {
    
    
    // はいを選択した場合、change.htmlに移動

    localStorage.setItem("credit", credit);
    localStorage.setItem("tousigaku", tousigaku);
    localStorage.setItem("rieki", (credit * 20) - tousigaku);
    
    // 新しいタブでページを開く
    var newTab = window.open("change2.html", "_blank");
    
    // 新しいタブでlocalStorageのデータを設定
    newTab.localStorage.setItem("credit", credit);
    newTab.localStorage.setItem("tousigaku", tousigaku);
    newTab.localStorage.setItem("rieki", (credit * 20) - tousigaku);
    
    credit = 0;
    document.getElementById("credit").innerHTML = credit;
    
  } else {
    // いいえを選択した場合、アラートを表示
  }
}

window.onload = function() {

  var credit = localStorage.getItem("credit");
  var tousigaku = localStorage.getItem("tousigaku"); 
  var rieki = localStorage.getItem("rieki"); 

  document.getElementById("credit55").innerText = credit;



/*
function moving() {
  // ページ移動の確認アナウンス
  var confirmation = confirm("精算しますか？");

  if (confirmation) {
    // はいを選択した場合、change.htmlに移動

    localStorage.setItem("credit", credit);
    localStorage.setItem("tousigaku", tousigaku);
    localStorage.setItem("rieki", (credit * 20) - tousigaku);
    window.location.href = "change.html";
  } else {
    // いいえを選択した場合、アラートを表示
  }
}
*/

/*
// change.htmlが読み込まれた後に実行する関数
window.onload = function() {

  var credit = localStorage.getItem("credit");
  var tousigaku = localStorage.getItem("tousigaku"); 
  var rieki = localStorage.getItem("rieki"); 

  if(credit == 0 && tousigaku == 0){

  // 3秒後に文字を表示
  setTimeout(function() {
    document.getElementById("display3").innerText = "あなたは店に入り、なにもお金を費やせず、遊戯もせずに店を出た。";
  }, 3000);
  // 5秒後に文字を表示
  setTimeout(function() {
    document.getElementById("display1").innerText = "エンディング1:";
  }, 5000);
  // 7秒後に文字を表示
  setTimeout(function() {
    document.getElementById("display2").innerText = "なにしにここへ来たの？？";
  }, 7000);

}else if (rieki <= 0){
// 3秒後に文字を表示
setTimeout(function() {
  document.getElementById("display3").innerText = "あなたはキレながら店を出た。";
}, 3000);
// 5秒後に文字を表示
setTimeout(function() {
  document.getElementById("display4").innerText = "「もう二度とこんな所、こんな遊びなんか絶対にしないからな！」";
}, 5000);
// 7秒後に文字を表示
setTimeout(function() {
  document.getElementById("display1").innerText = "エンディング:8";
}, 11000);
// 9秒後に文字を表示
setTimeout(function() {
  document.getElementById("display2").innerText = "またのご来店をお待ちしております。";
}, 13000);

setTimeout(function() {
  document.getElementById("display5").innerText = "ちなみに今回の損益は....";
}, 7000);

setTimeout(function() {
  document.getElementById("display6").innerText = rieki + "円";
}, 9000);

  }else if(rieki < 1000){

  // 3秒後に文字を表示
  setTimeout(function() {
    document.getElementById("display3").innerText = "あなたは店員さんを呼び、惨めな数しかないメダルを替えてもらった。";
  }, 3000);
  // 5秒後に文字を表示
  setTimeout(function() {
    document.getElementById("display4").innerText = "少量しかないモノで、ちっちゃなお菓子とちっちゃなジュースと交換してもらった。";
  }, 5000);
  // 7秒後に文字を表示
  setTimeout(function() {
    document.getElementById("display1").innerText = "エンディング:2";
  }, 7000);
  // 9秒後に文字を表示
  setTimeout(function() {
    document.getElementById("display2").innerText = "ボロ負け";
  }, 9000);

  }else if(rieki > 100000){

  // 3秒後に文字を表示
  setTimeout(function() {
    document.getElementById("display3").innerText = "あなたは店員さんを呼び、ありえない量のメダルを替えてもらった。";
  }, 3000);
  // 5秒後に文字を表示
  setTimeout(function() {
    document.getElementById("display4").innerText = "「正直、なんかインチキしたでしょ」ってものすごく言いたいですが、自力でできたならとてもすごいです";
  }, 5000);
  // 7秒後に文字を表示
  setTimeout(function() {
    document.getElementById("display5").innerText = "あなたはいっぱい特殊景品をもらい、うきうきで換金しにいった。今回の利益は....";
  }, 7000);
  // 9秒後に文字を表示
  setTimeout(function() {
    document.getElementById("display6").innerText = rieki + "円だった。";
  }, 9000);
    // 11秒後に文字を表示
    setTimeout(function() {
      document.getElementById("display1").innerText = "エンディング:3";
    }, 11000);
    // 13秒後に文字を表示
    setTimeout(function() {
      document.getElementById("display2").innerText = "大富豪";
    }, 13000);

  }else if(rieki > 50000){

      // 3秒後に文字を表示
  setTimeout(function() {
    document.getElementById("display3").innerText = "あなたは店員さんを呼び、たくさんの量のメダルを替えてもらった。";
  }, 3000);
  // 5秒後に文字を表示
  setTimeout(function() {
    document.getElementById("display4").innerText = "店員も大人数でドル箱を運び、清算処理をしている。内心とてもウキウキだ。";
  }, 5000);
  // 7秒後に文字を表示
  setTimeout(function() {
    document.getElementById("display5").innerText = "あなたは特殊景品をたくさんもらい、換金しにいった。今回の利益は....";
  }, 7000);
  // 9秒後に文字を表示
  setTimeout(function() {
    document.getElementById("display6").innerText = rieki + "円だった。";
  }, 9000);
    // 11秒後に文字を表示
    setTimeout(function() {
      document.getElementById("display1").innerText = "エンディング:4";
    }, 11000);
    // 13秒後に文字を表示
    setTimeout(function() {
      document.getElementById("display2").innerText = "ボロ勝ち";
    }, 13000);
    
  }else if(rieki > 30000){
        // 3秒後に文字を表示
        setTimeout(function() {
          document.getElementById("display3").innerText = "あなたは店員さんを呼び、結構な量のメダルを替えてもらった。";
        }, 3000);
        // 5秒後に文字を表示
        setTimeout(function() {
          document.getElementById("display4").innerText = "店員と一緒にドル箱を運び、清算処理に協力してあげた";
        }, 5000);
        // 7秒後に文字を表示
        setTimeout(function() {
          document.getElementById("display5").innerText = "あなたは特殊景品をそこそこもらい、換金しにいった。今回の利益は....";
        }, 7000);
        // 9秒後に文字を表示
        setTimeout(function() {
          document.getElementById("display6").innerText = rieki + "円だった。";
        }, 9000);
          // 11秒後に文字を表示
          setTimeout(function() {
            document.getElementById("display1").innerText = "エンディング:5";
          }, 11000);
          // 13秒後に文字を表示
          setTimeout(function() {
            document.getElementById("display2").innerText = "中金持ち";
          }, 13000);
  }else if(rieki > 10000){

      // 3秒後に文字を表示
      setTimeout(function() {
        document.getElementById("display3").innerText = "あなたは店員さんを呼び、メダルを替えてもらった。";
      }, 3000);
      // 5秒後に文字を表示
      setTimeout(function() {
        document.getElementById("display4").innerText = "店員はあなたのドル箱を運び、清算処理をしてもらった。";
      }, 5000);
      // 7秒後に文字を表示
      setTimeout(function() {
        document.getElementById("display5").innerText = "あなたは特殊景品をもらい、換金しにいった。今回の利益は....";
      }, 7000);
      // 9秒後に文字を表示
      setTimeout(function() {
        document.getElementById("display6").innerText = rieki + "円だった。";
      }, 9000);
        // 11秒後に文字を表示
        setTimeout(function() {
          document.getElementById("display1").innerText = "エンディング:6";
        }, 11000);
        // 13秒後に文字を表示
        setTimeout(function() {
          document.getElementById("display2").innerText = "小金持ち";
        }, 13000);
        
  }else if(rieki > 9999){
        // 3秒後に文字を表示
        setTimeout(function() {
          document.getElementById("display3").innerText = "あなたは店員さんを呼び、メダルを替えてもらった。";
        }, 3000);
        // 5秒後に文字を表示
        setTimeout(function() {
          document.getElementById("display4").innerText = "店員はあなたのドル箱を運び、清算処理をしてもらった。";
        }, 5000);
        // 7秒後に文字を表示
        setTimeout(function() {
          document.getElementById("display5").innerText = "あなたは特殊景品をもらい、換金しにいった。今回の利益は....";
        }, 7000);
        // 9秒後に文字を表示
        setTimeout(function() {
          document.getElementById("display6").innerText = rieki + "円だった。";
        }, 9000);
          // 11秒後に文字を表示
          setTimeout(function() {
            document.getElementById("display1").innerText = "エンディング:7";
          }, 11000);
          // 13秒後に文字を表示
          setTimeout(function() {
            document.getElementById("display2").innerText = "賭け事は程々に";
          }, 13000);
  }
*/
}