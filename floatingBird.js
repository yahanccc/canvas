function doFirst() {
    let canvas = document.querySelector('#canvas')
    let context = canvas.getContext('2d')

    // 格線
    // context.beginPath();

    // let gap = 50
    // if (canvas.width > canvas.height) {
    //     range = canvas.width / gap
    // } else {
    //     range = canvas.height / gap
    // }

    // for (let i = 0; i <= range; i++) {
    //     let interval = i * gap

    //     // 水平線
    //     context.moveTo(0, interval);
    //     context.lineTo(canvas.width, interval);
    //     context.fillText(interval, 0, interval);

    //     // 垂直線
    //     context.moveTo(interval, 0);
    //     context.lineTo(interval, canvas.height);
    //     context.fillText(interval, interval, 10);
    // }
    // context.strokeStyle = 'rgba(0,0,0,0.3)';
    // context.stroke();

    // 橘色     
    // context.fillStyle = '#DA5B27'; 
    // 藍色     
    // context.fillStyle = '#153D52';
    // 黃色   
    // context.fillStyle = '#EAA525';
    // 湖水綠  
    // context.fillStyle = '#2A7769';
    // 森林綠
    // context.fillStyle = '#166065';


    context.strokeStyle = 'transparent';


    let pic = new Image()
    pic.src = './Logo.png'
    // pic.addEventListener('load', function () {
    //     context.drawImage(pic, 620, 50, 200, 199)
    // })


    let time = 0;
    let float = 15;
    let baseY = 50;

    function animate() {
        context.clearRect(625, 35, 200, 199 + float * 2);
        time += 0.03;
        let y = baseY + Math.sin(time) * float;


        context.drawImage(pic, 625, y, 200, 199);
        requestAnimationFrame(animate);
    }


    pic.onload = function () {
        requestAnimationFrame(animate);
    };




    // 山
    context.beginPath();
    context.moveTo(480, 700);
    context.lineTo(700, 200);
    context.lineTo(715, 340);
    context.lineTo(725, 260);
    context.lineTo(740, 320);
    context.lineTo(755, 210);
    context.lineTo(960, 700);
    context.fillStyle = '#153D52';
    context.fill();
    context.stroke();

    // 黃三角左上
    context.beginPath();
    context.moveTo(275, 300);
    context.lineTo(400, 365);
    context.lineTo(250, 350);
    context.lineTo(275, 300);
    context.fillStyle = '#EAA525';
    context.fill();
    context.stroke();

    // 黃三角左下
    context.beginPath();
    context.moveTo(275, 480);
    context.lineTo(400, 415);
    context.lineTo(250, 430);
    context.lineTo(275, 480);
    context.fillStyle = '#EAA525';
    context.fill();
    context.stroke();

    // 黃三角右上
    context.beginPath();
    context.moveTo(1165, 300);
    context.lineTo(1040, 365);
    context.lineTo(1190, 350);
    context.lineTo(1165, 300);
    context.fillStyle = '#EAA525';
    context.fill();
    context.stroke();

    // 黃三角右下
    context.beginPath();
    context.moveTo(1165, 480);
    context.lineTo(1040, 415);
    context.lineTo(1190, 430);
    context.lineTo(1165, 480);
    context.fillStyle = '#EAA525';
    context.fill();
    context.stroke();



}
window.addEventListener('load', doFirst)

