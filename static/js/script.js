
///////time
 function printTime()  {
    let d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    if(sec<10){
        sec= '0'+sec;
    }
    if(min<10){
        min= '0'+min;
    }
    if(hour<10){
        hour= '0'+hour;
    }
    time.innerHTML =  hour + ":" + min + ":" + sec; 
}
setInterval(printTime, 1000);


//////zagruzka
plus.addEventListener('click', () => {
if( zagruzka.score < 10){
      zagruzka.score++;
      download.innerHTML = zagruzka.score * 10 + '%';
      loading.style.width = loading.offsetWidth + 50 +'px';
      loading.style.backgroundColor = 'rgb(62, 133, 226)';
          if(zagruzka.score == 10){
          console.log('zagruzeno');
              ready.innerHTML = 'загружено';
              ready.style.display = 'block';
          }
}
});

minus.addEventListener('click', () => {
    if(zagruzka.score <= 10 &&  zagruzka.score >0){
      if(loading.style.width == 10||20||30||40||50||60||70||80||90||100){
        zagruzka.score--;
    download.innerHTML = zagruzka.score * 10 + '%';
    loading.style.width = loading.offsetWidth - 50 + 'px';
    loading.style.backgroundColor = 'rgb(223, 50, 50)';  
      }
    }
});





//Предвижной блок

delta_x = 0;
delta_y = 0;

block.onmousedown = saveXY;
  block.addEventListener("onmousedown", saveXY, false, ()=>{      
    x = pageX;
    y = pageY;         
  });
     
document.onmouseup = clearXY;
      /* При нажатии кнопки мыши попадаем в эту функцию */
      function saveXY(obj_event) {
          x = obj_event.pageX;
          y = obj_event.pageY;

          //moveWindow - функции движения
          document.onmousemove = moveBlock;
          document.addEventListener("onmousemove", moveBlock, false);
      }
function clearXY() {
      document.onmousemove = null; //откл обработку события движения 
}
    function moveBlock(obj_event) {
      // новые координаты
      if (obj_event) {
        x = obj_event.pageX;
        y = obj_event.pageY;
      }
      else {
        x = window.event.clientX;
        y = window.event.clientY;
        if (ie) {
          y -= 2;
          x -= 2;
        }
      }
      //новые координаты блока
      new_x = delta_x + x;
      new_y = delta_y + y;
      block.style.top = new_y + "px";
      block.style.left = new_x + "px";
    }


const fild  = document.getElementsByClassName('field');
// show.prototype = block;
newBlock.addEventListener('click', () =>{

  function createDiv(className){
    let div = document.createElement('div');
    div.className = className;

    return div;
    }
      for(let i = 0; i<1; i++){
        document.body.appendChild(createDiv('block'+i));
      }
});

