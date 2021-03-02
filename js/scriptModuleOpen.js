function onLoadBody() {
    let bodyOpacity = document.getElementById('bodyOpacity');
    let moduleBlock1 = document.getElementById('section5__moduleBlock-1');
    let moduleBlock2 = document.getElementById('section5__moduleBlock-2');
    let moduleBlock3 = document.getElementById('section5__moduleBlock-3');
    let moduleBlock4 = document.getElementById('section5__moduleBlock-4');
    let closeButtonBlock1 = document.getElementById('closeButtonBlock1');
    let closeButtonBlock2 = document.getElementById('closeButtonBlock2');
    let closeButtonBlock3 = document.getElementById('closeButtonBlock3');
    let closeButtonBlock4 = document.getElementById('closeButtonBlock4');
    if (bodyOpacity != null || bodyOpacity != undefinded) {
        console.log('Блок определен -> bodyOpacity');
    } else {
        console.log('Блок bodyOpacity не определен;');
    }
    if (moduleBlock1 != null || moduleBlock1 != undefinded) {
        console.log('Блок определен -> moduleBlock1');
    } else {
        console.log('Блок moduleBlock1 не определен;');
    }
    if (moduleBlock2 != null || moduleBlock2 != undefinded) {
        console.log('Блок определен -> moduleBlock2');
    } else {
        console.log('Блок moduleBlock2 не определен;');
    }
    if (moduleBlock3 != null || moduleBlock3 != undefinded) {
        console.log('Блок определен -> moduleBlock3');
    } else {
        console.log('Блок moduleBlock3 не определен;');
    }
    if (moduleBlock4 != null || moduleBlock4 != undefinded) {
        console.log('Блок определен -> moduleBlock4');
    } else {
        console.log('Блок moduleBlock4 не определен;');
    }
    if (closeButtonBlock1 != null || closeButtonBlock1 != undefinded) {
        console.log('Блок определен -> closeButtonBlock1');
    } else {
        console.log('Блок closeButtonBlock1 не определен;');
    }
    if (closeButtonBlock2 != null || closeButtonBlock2 != undefinded) {
        console.log('Блок определен -> closeButtonBlock2');
    } else {
        console.log('Блок closeButtonBlock2 не определен;');
    }
    if (closeButtonBlock3 != null || closeButtonBlock3 != undefinded) {
        console.log('Блок определен -> closeButtonBlock3');
    } else {
        console.log('Блок closeButtonBlock3 не определен;');
    }
    if (closeButtonBlock4 != null || closeButtonBlock4 != undefinded) {
        console.log('Блок определен -> closeButtonBlock4');
    } else {
        console.log('Блок closeButtonBlock4 не определен;');
    }
    let buttunUserImg1 = document.getElementById('buttunUserImg1');
    if (buttunUserImg1 != null || buttunUserImg1 != undefinded) {
        console.log('Блок определен - > buttunUserImg1');
    }else{
        console.log('Блок buttunUserImg1 не определен');
    }
    let buttunUserImg2 = document.getElementById('buttunUserImg2');
    if (buttunUserImg2 != null || buttunUserImg2 != undefinded) {
        console.log('Блок определен - > buttunUserImg2');
    }else{
        console.log('Блок buttunUserImg2 не определен');
    }
    let buttunUserImg3 = document.getElementById('buttunUserImg3');
    if (buttunUserImg3 != null || buttunUserImg3 != undefinded) {
        console.log('Блок определен - > buttunUserImg3');
    }else{
        console.log('Блок buttunUserImg3 не определен');
    }
    let buttunUserImg4 = document.getElementById('buttunUserImg4');
    if (buttunUserImg4 != null || buttunUserImg4 != undefinded) {
        console.log('Блок определен - > buttunUserImg4');
    }else{
        console.log('Блок buttunUserImg4 не определен');
    }
buttunUserImg1.addEventListener('click', ()=>{
    if (getComputedStyle(moduleBlock1).display == 'none') {
        bodyOpacity.style.display = 'block';
        moduleBlock1.style.display = 'block';
        console.log('Блок moduleBlock1 активирован');
    }else{
        console.log('Ошибка -> moduleBlock1');
    }
}); 
buttunUserImg2.addEventListener('click', ()=>{
    if (getComputedStyle(moduleBlock2).display == 'none') {
        bodyOpacity.style.display = 'block';
        moduleBlock2.style.display = 'block';
        console.log('Блок moduleBlock2 активирован');
    }else{
        console.log('Ошибка -> moduleBlock2');
    }
});
buttunUserImg3.addEventListener('click', ()=>{
    if (getComputedStyle(moduleBlock3).display == 'none') {
        bodyOpacity.style.display = 'block';
        moduleBlock3.style.display = 'block';
        console.log('Блок moduleBlock3 активирован');
    }else{
        console.log('Ошибка -> moduleBlock3');
    }
});
buttunUserImg4.addEventListener('click', ()=>{
    if (getComputedStyle(moduleBlock4).display == 'none') {
        bodyOpacity.style.display = 'block';
        moduleBlock4.style.display = 'block';
        console.log('Блок moduleBlock4 активирован');
    }else{
        console.log('Ошибка -> moduleBlock4');
    }
});
    closeButtonBlock1.addEventListener('click', ()=>{
        if (getComputedStyle(moduleBlock1).display == 'block') {
            bodyOpacity.style.display = 'none';
            moduleBlock1.style.display = 'none';
        }
    });
    closeButtonBlock2.addEventListener('click', ()=>{
        if (getComputedStyle(moduleBlock2).display == 'block') {
            bodyOpacity.style.display = 'none';
            moduleBlock2.style.display = 'none';
        }
    });
    closeButtonBlock3.addEventListener('click', ()=>{
        if (getComputedStyle(moduleBlock3).display == 'block') {
            bodyOpacity.style.display = 'none';
            moduleBlock3.style.display = 'none';
        }
    });
    closeButtonBlock4.addEventListener('click', ()=>{
        if (getComputedStyle(moduleBlock4).display == 'block') {
            bodyOpacity.style.display = 'none';
            moduleBlock4.style.display = 'none';
        }
    });
    console.log('Скрипт выполнился после полной загрузки структуры страницы');
}