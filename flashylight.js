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


    // 閃耀光束，logo置中

    context.strokeStyle = 'transparent';

    // 左上
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(720, 350);
    context.lineTo(480, 0);
    context.fillStyle = '#DA5B27';
    context.fill();
    context.stroke();

    // 上中
    context.beginPath();
    context.moveTo(480, 0);
    context.lineTo(720, 350);
    context.lineTo(960, 0);
    context.fillStyle = '#153D52';
    context.fill();
    context.stroke();

    // 上右
    context.beginPath();
    context.moveTo(960, 0);
    context.lineTo(720, 350);
    context.lineTo(1440, 0);
    context.fillStyle = '#EAA525';
    context.fill();
    context.stroke();

    // 右中
    context.beginPath();
    context.moveTo(1440, 0);
    context.lineTo(720, 350);
    context.lineTo(1440, 700);
    context.fillStyle = '#2A7769';
    context.fill();
    context.stroke();

    // 右下
    context.beginPath();
    context.moveTo(1440, 700);
    context.lineTo(720, 350);
    context.lineTo(960, 700);
    context.fillStyle = '#DA5B27';
    context.fill();
    context.stroke();

    // 中下
    context.beginPath();
    context.moveTo(960, 700);
    context.lineTo(720, 350);
    context.lineTo(480, 700);
    context.fillStyle = '#153D52';
    context.fill();
    context.stroke();

    // 左下
    context.beginPath();
    context.moveTo(480, 700);
    context.lineTo(720, 350);
    context.lineTo(0, 700);
    context.fillStyle = '#EAA525';
    context.fill();
    context.stroke();

    // 左中
    context.beginPath();
    context.moveTo(0, 700);
    context.lineTo(720, 350);
    context.lineTo(0, 0);
    context.fillStyle = '#166065';
    context.fill();
    context.stroke();

    let pic = new Image()
    pic.src = './Logo.png'
    const logoX = 558, logoY = 189, logoWidth = 200, logoHeight = 199; // Logo 位置與尺寸
    pic.addEventListener('load', function () {
        context.drawImage(pic, 558, 189)

    })

    canvas.addEventListener('click', function (event) {
        const rect = canvas.getBoundingClientRect(); // 獲取 Canvas 在螢幕上的位置
        const mouseX = event.clientX - rect.left; // 計算滑鼠在 Canvas 內的 X 座標
        const mouseY = event.clientY - rect.top;  // 計算滑鼠在 Canvas 內的 Y 座標

        // **檢查滑鼠是否在 Logo 內**
        if (mouseX >= logoX && mouseX <= logoX + logoWidth &&
            mouseY >= logoY && mouseY <= logoY + logoHeight) {
            window.location.href = 'floatingBird.html'; // 替換為你的超連結
        }
    });


    canvas.addEventListener('mousemove', function (event) {
        const rect = canvas.getBoundingClientRect(); // 獲取 Canvas 在螢幕上的位置
        const mouseX = event.clientX - rect.left; // 計算滑鼠在 Canvas 內的 X 座標
        const mouseY = event.clientY - rect.top;  // 計算滑鼠在 Canvas 內的 Y 座標

        // **檢查滑鼠是否在 Logo 內**
        if (mouseX >= logoX && mouseX <= logoX + logoWidth &&
            mouseY >= logoY && mouseY <= logoY + logoHeight) {
            canvas.style.cursor = 'pointer';
        } else {
            canvas.style.cursor = 'default';
        }
    });

    const colors = ['#DA5B27', '#153D52', '#EAA525', '#2A7769', '#DA5B27', '#153D52', '#EAA525', '#166065'];
    const highlightColor = 'white'; // 讓區塊閃動時變亮
    let currentIndex = 0;

    function drawBlocks() {
        const positions = [
            [[0, 0], [720, 350], [480, 0]],   // 左上
            [[480, 0], [720, 350], [960, 0]], // 上中
            [[960, 0], [720, 350], [1440, 0]], // 上右
            [[1440, 0], [720, 350], [1440, 700]], // 右中
            [[1440, 700], [720, 350], [960, 700]], // 右下
            [[960, 700], [720, 350], [480, 700]], // 中下
            [[480, 700], [720, 350], [0, 700]], // 左下
            [[0, 700], [720, 350], [0, 0]] // 左中
        ];

        context.clearRect(0, 0, canvas.width, canvas.height); // 清除畫布

        for (let i = 0; i < positions.length; i++) {
            context.beginPath();
            positions[i].forEach(([x, y]) => context.lineTo(x, y));
            context.fillStyle = (i === currentIndex) ? highlightColor : colors[i]; // 當前區塊變白
            context.fill();
            context.stroke();
        }
        context.drawImage(pic, 558, 189)
        currentIndex = (currentIndex + 1) % positions.length; // 移動到下一個區塊
    }

    setInterval(drawBlocks, 100); // 每 500 毫秒更新一次


}
window.addEventListener('load', doFirst)

