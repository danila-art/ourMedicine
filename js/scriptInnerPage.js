function onLoadInnerPage() {
    let completeArray = [];
    let errorArray = [];
    if (document.getElementById('searchBlockBox') != null) {
        let searchBlockBox = document.getElementById('searchBlockBox');
        completeArray.push('Объект searchBlockBox определен');
    } else {
        errorArray.push('Объект searchBlockBox не определен!')
    }
    if (document.getElementById('searchDoctorRow') != null) {
        let searchDoctorRow = document.getElementById('searchDoctorRow');
        completeArray.push('Объект searchDoctorRow определен');
    } else {
        errorArray.push('Объект searchDoctorRow не определен!')
    }
    if (document.getElementById('selectViewBox') != null) {
        completeArray.push('Объект selectViewBox определен')
        let selectViewBox = document.getElementById('selectViewBox');
        selectViewBox.addEventListener('click', () => {
            if (selectViewBox.dataset.number == '0') {
                selectViewBox.dataset.number = '1';
                selectViewRow.dataset.number = '0';
                selectViewBox.src = '../img/icons/selectView/selectViewBox-Active.png';
                selectViewRow.src = '../img/icons/selectView/selectViewRow.png';
                searchBlockBox.style.display = 'block';
                searchDoctorRow.style.display = 'none';
            }
        })
    } else {
        errorArray.push('Объект selectViewBox не определен');
    }
    if (document.getElementById('selectViewRow') != null) {
        completeArray.push('Объект selectViewRow определен')
        let selectViewRow = document.getElementById('selectViewRow');
        selectViewRow.addEventListener('click', () => {
            if (selectViewRow.dataset.number == '0') {
                selectViewBox.dataset.number = '0';
                selectViewRow.dataset.number = '1';
                selectViewBox.src = '../img/icons/selectView/selectViewBox.png';
                selectViewRow.src = '../img/icons/selectView/selectViewRow-Active.png';
                searchBlockBox.style.display = 'none';
                searchDoctorRow.style.display = 'block';
            }
        })
    } else {
        errorArray.push('Объект selectViewRow не определен');
    }
    // - - - - - - - - - - - - - - - - 
    // Нахождение блоков doctor start
    if (document.getElementById('bodyOpacity') != null) {
        let bodyOpacity = document.getElementById('bodyOpacity');
        completeArray.push('Блок bodyOpacity определён');
    } else {
        errorArray.push('Блок bodyOpacity не определён!');
    }
    if (document.getElementById('doctorBox1') != null && document.getElementById('doctorRow1') != null) {
        let doctorBox1 = document.getElementById('doctorBox1');
        let doctorRow1 = document.getElementById('doctorRow1');
        completeArray.push('Объект doctorBox1 && doctorRow1 определен');
        if (document.getElementById('blockAbs1') != null) {
            let blockAbs1 = document.getElementById('blockAbs1');
            completeArray.push('Модульный блок blockAbs1 определен');
        } else {
            errorArray.push('Модульный блок blockAbs1 не определён!');
        }
        doctorBox1.addEventListener('click', () => {
            console.log('doctorBox1 активирован');
            // !Активация модульного блока для boxContent
            bodyOpacity.style.display = 'block';
            blockAbs1.style.display = 'block';
        })
        doctorRow1.addEventListener('click', () => {
            console.log('doctorRow1 активирован');
            // !Активация модульного блока для boxContent
            bodyOpacity.style.display = 'block';
            blockAbs1.style.display = 'block';
        })
    } else {
        errorArray.push('Объект doctorBox1 && doctorRow1 не определен!');
    }
    if (document.getElementById('doctorBox2') != null && document.getElementById('doctorRow2') != null) {
        let doctorBox2 = document.getElementById('doctorBox2');
        let doctorRow2 = document.getElementById('doctorRow2');
        completeArray.push('Объект doctorBox2 && doctorRow2 определен');
        if (document.getElementById('blockAbs2') != null) {
            let blockAbs2 = document.getElementById('blockAbs2');
            completeArray.push('Модульный блок blockAbs2 определен');
        } else {
            errorArray.push('Модульный блок blockAbs2 не определён!');
        }
        doctorBox2.addEventListener('click', () => {
            console.log('doctorBox2 активирован');
            // !Активация модульного блока для boxContent
            bodyOpacity.style.display = 'block';
            blockAbs2.style.display = 'block';
        })
        doctorRow2.addEventListener('click', () => {
            console.log('doctorRow2 активирован');
            // !Активация модульного блока для boxContent
            bodyOpacity.style.display = 'block';
            blockAbs2.style.display = 'block';
        })
    } else {
        errorArray.push('Объект doctorBox2 && doctorRow2 не определен!');
    }
    if (document.getElementById('doctorBox3') != null && document.getElementById('doctorRow3') != null) {
        let doctorBox3 = document.getElementById('doctorBox3');
        let doctorRow3 = document.getElementById('doctorRow3');
        completeArray.push('Объект doctorBox3 && doctorRow3 определен');
        if (document.getElementById('blockAbs3') != null) {
            let blockAbs3 = document.getElementById('blockAbs3');
            completeArray.push('Модульный блок blockAbs3 определен');
        } else {
            errorArray.push('Модульный блок blockAbs3 не определён!');
        }
        doctorBox3.addEventListener('click', () => {
            console.log('doctorBox3 активирован');
            // !Активация модульного блока для boxContent
            bodyOpacity.style.display = 'block';
            blockAbs3.style.display = 'block';
        })
        doctorRow3.addEventListener('click', () => {
            console.log('doctorRow3 активирован');
            // !Активация модульного блока для boxContent
            bodyOpacity.style.display = 'block';
            blockAbs3.style.display = 'block';
        })
    } else {
        errorArray.push('Объект doctorBox3 && doctorRow3 не определен!');
    }
    if (document.getElementById('doctorBox4') != null && document.getElementById('doctorRow4') != null) {
        let doctorBox4 = document.getElementById('doctorBox4');
        let doctorRow4 = document.getElementById('doctorRow4');
        completeArray.push('Объект doctorBox4 && doctorRow4 определен');
        if (document.getElementById('blockAbs4') != null) {
            let blockAbs4 = document.getElementById('blockAbs4');
            completeArray.push('Модульный блок blockAbs4 определен');
        } else {
            errorArray.push('Модульный блок blockAbs4 не определён!');
        }
        doctorBox4.addEventListener('click', () => {
            console.log('doctorBox4 активирован');
            // !Активация модульного блока для boxContent
            bodyOpacity.style.display = 'block';
            blockAbs4.style.display = 'block';
        })
        doctorRow4.addEventListener('click', () => {
            console.log('doctorRow4 активирован');
            // !Активация модульного блока для boxContent
            bodyOpacity.style.display = 'block';
            blockAbs4.style.display = 'block';
        })
    } else {
        errorArray.push('Объект doctorBox4 && doctorRow4 не определен!');
    }
    if (document.getElementById('doctorBox5') != null && document.getElementById('doctorRow5') != null) {
        let doctorBox5 = document.getElementById('doctorBox5');
        let doctorRow5 = document.getElementById('doctorRow5');
        completeArray.push('Объект doctorBox5 && doctorRow5 определен');
        if (document.getElementById('blockAbs5') != null) {
            let blockAbs5 = document.getElementById('blockAbs5');
            completeArray.push('Модульный блок blockAbs5 определен');
        } else {
            errorArray.push('Модульный блок blockAbs5 не определён!');
        }
        doctorBox5.addEventListener('click', () => {
            console.log('doctorBox5 активирован');
            // !Активация модульного блока для boxContent
            bodyOpacity.style.display = 'block';
            blockAbs5.style.display = 'block';
        })
        doctorRow5.addEventListener('click', () => {
            console.log('doctorRow5 активирован');
            // !Активация модульного блока для boxContent
            bodyOpacity.style.display = 'block';
            blockAbs5.style.display = 'block';
        })
    } else {
        errorArray.push('Объект doctorBox5 && doctorRow5 не определен!');
    }
    if (document.getElementById('doctorBox6') != null && document.getElementById('doctorRow6') != null) {
        let doctorBox6 = document.getElementById('doctorBox6');
        let doctorRow6 = document.getElementById('doctorRow6');
        completeArray.push('Объект doctorBox6 && doctorRow6 определен');
        if (document.getElementById('blockAbs6') != null) {
            let blockAbs6 = document.getElementById('blockAbs6');
            completeArray.push('Модульный блок blockAbs6 определен');
        } else {
            errorArray.push('Модульный блок blockAbs6 не определён!');
        }
        doctorBox6.addEventListener('click', () => {
            console.log('doctorBox6 активирован');
            // !Активация модульного блока для boxContent
            bodyOpacity.style.display = 'block';
            blockAbs6.style.display = 'block';
        })
        doctorRow6.addEventListener('click', () => {
            console.log('doctorRow6 активирован');
            // !Активация модульного блока для boxContent
            bodyOpacity.style.display = 'block';
            blockAbs6.style.display = 'block';
        })
    } else {
        errorArray.push('Объект doctorBox6 && doctorRow6 не определен!');
    }
    if (document.getElementById('doctorBox7') != null && document.getElementById('doctorRow7') != null) {
        let doctorBox7 = document.getElementById('doctorBox7');
        let doctorRow7 = document.getElementById('doctorRow7');
        completeArray.push('Объект doctorBox7 && doctorRow7 определен');
        if (document.getElementById('blockAbs7') != null) {
            let blockAbs7 = document.getElementById('blockAbs7');
            completeArray.push('Модульный блок blockAbs7 определен');
        } else {
            errorArray.push('Модульный блок blockAbs7 не определён!');
        }
        doctorBox7.addEventListener('click', () => {
            console.log('doctorBox7 активирован');
            // !Активация модульного блока для boxContent
            bodyOpacity.style.display = 'block';
            blockAbs7.style.display = 'block';
        })
        doctorRow7.addEventListener('click', () => {
            console.log('doctorRow7 активирован');
            // !Активация модульного блока для boxContent
            bodyOpacity.style.display = 'block';
            blockAbs7.style.display = 'block';
        })
    } else {
        errorArray.push('Объект doctorBox7 && doctorRow7 не определен!');
    }
    if (document.getElementById('doctorBox8') != null && document.getElementById('doctorRow8') != null) {
        let doctorBox8 = document.getElementById('doctorBox8');
        let doctorRow8 = document.getElementById('doctorRow8');
        completeArray.push('Объект doctorBox8 && doctorRow8 определен');
        if (document.getElementById('blockAbs8') != null) {
            let blockAbs8 = document.getElementById('blockAbs8');
            completeArray.push('Модульный блок blockAbs8 определен');
        } else {
            errorArray.push('Модульный блок blockAbs8 не определён!');
        }
        doctorBox8.addEventListener('click', () => {
            console.log('doctorBox8 активирован');
            // !Активация модульного блока для boxContent
            bodyOpacity.style.display = 'block';
            blockAbs8.style.display = 'block';
        })
        doctorRow8.addEventListener('click', () => {
            console.log('doctorRow8 активирован');
            // !Активация модульного блока для boxContent
            bodyOpacity.style.display = 'block';
            blockAbs8.style.display = 'block';
        })
    } else {
        errorArray.push('Объект doctorBox8 && doctorRow8 не определен!');
    }
    if (document.getElementById('doctorBox9') != null && document.getElementById('doctorRow9') != null) {
        let doctorBox9 = document.getElementById('doctorBox9');
        let doctorRow9 = document.getElementById('doctorRow9');
        completeArray.push('Объект doctorBox9 && doctorRow9 определен');
        if (document.getElementById('blockAbs9') != null) {
            let blockAbs9 = document.getElementById('blockAbs9');
            completeArray.push('Модульный блок blockAbs9 определен');
        } else {
            errorArray.push('Модульный блок blockAbs9 не определён!');
        }
        doctorBox9.addEventListener('click', () => {
            console.log('doctorBox9 активирован');
            // !Активация модульного блока для boxContent
            bodyOpacity.style.display = 'block';
            blockAbs9.style.display = 'block';
        })
        doctorRow9.addEventListener('click', () => {
            console.log('doctorRow9 активирован');
            // !Активация модульного блока для boxContent
            bodyOpacity.style.display = 'block';
            blockAbs9.style.display = 'block';
        })
    } else {
        errorArray.push('Объект doctorBox9 && doctorRow9 не определен!');
    }
    if (document.getElementById('doctorBox10') != null && document.getElementById('doctorRow10') != null) {
        let doctorBox10 = document.getElementById('doctorBox10');
        let doctorRow10 = document.getElementById('doctorRow10');
        completeArray.push('Объект doctorBox10 && doctorRow10 определен');
        if (document.getElementById('blockAbs10') != null) {
            let blockAbs10 = document.getElementById('blockAbs10');
            completeArray.push('Модульный блок blockAbs10 определен');
        } else {
            errorArray.push('Модульный блок blockAbs10 не определён!');
        }
        doctorBox10.addEventListener('click', () => {
            console.log('doctorBox10 активирован');
            // !Активация модульного блока для boxContent
            bodyOpacity.style.display = 'block';
            blockAbs10.style.display = 'block';
        })
        doctorRow10.addEventListener('click', () => {
            console.log('doctorRow10 активирован');
            // !Активация модульного блока для boxContent
            bodyOpacity.style.display = 'block';
            blockAbs10.style.display = 'block';
        })
    } else {
        errorArray.push('Объект doctorBox10 && doctorRow10 не определен!');
    }
    if (document.getElementById('doctorBox11') != null && document.getElementById('doctorRow11') != null) {
        let doctorBox11 = document.getElementById('doctorBox11');
        let doctorRow11 = document.getElementById('doctorRow11');
        completeArray.push('Объект doctorBox11 && doctorRow11 определен');
        if (document.getElementById('blockAbs11') != null) {
            let blockAbs11 = document.getElementById('blockAbs11');
            completeArray.push('Модульный блок blockAbs11 определен');
        } else {
            errorArray.push('Модульный блок blockAbs11 не определён!');
        }
        doctorBox11.addEventListener('click', () => {
            console.log('doctorBox11 активирован');
            // !Активация модульного блока для boxContent
            bodyOpacity.style.display = 'block';
            blockAbs11.style.display = 'block';
        })
        doctorRow11.addEventListener('click', () => {
            console.log('doctorRow11 активирован');
            // !Активация модульного блока для boxContent
            bodyOpacity.style.display = 'block';
            blockAbs11.style.display = 'block';
        })
    } else {
        errorArray.push('Объект doctorBox11 && doctorRow11 не определен!');
    }
    if (document.getElementById('doctorBox12') != null && document.getElementById('doctorRow12') != null) {
        let doctorBox12 = document.getElementById('doctorBox12');
        let doctorRow12 = document.getElementById('doctorRow12');
        completeArray.push('Объект doctorBox12 && doctorRow12 определен');
        if (document.getElementById('blockAbs12') != null) {
            let blockAbs12 = document.getElementById('blockAbs12');
            completeArray.push('Модульный блок blockAbs12 определен');
        } else {
            errorArray.push('Модульный блок blockAbs12 не определён!');
        }
        doctorBox12.addEventListener('click', () => {
            console.log('doctorBox12 активирован');
            // !Активация модульного блока для boxContent
            bodyOpacity.style.display = 'block';
            blockAbs12.style.display = 'block';
        })
        doctorRow12.addEventListener('click', () => {
            console.log('doctorRow12 активирован');
            // !Активация модульного блока для boxContent
            bodyOpacity.style.display = 'block';
            blockAbs12.style.display = 'block';
        })
    } else {
        errorArray.push('Объект doctorBox12 && doctorRow12 не определен!');
    }
    // Нахождение блоков doctor end
    // - - - - - - - - - - - - - - - -

    // - - - - - - - - - - - - - - - - 
    // Вывод completeErrorArrays
    completeArray.forEach(elementCompleteArray => {
        console.log(elementCompleteArray);
    });
    errorArray.forEach(elementErrorArray => {
        console.error(elementErrorArray);
    });
} 

// Функция закрытия модульного окна
function closeIcon(closeIcon) {
    console.log('CloseIcon нажата');
    closeIcon.parentNode.parentNode.style.display = 'none';
    bodyOpacity.style.display = 'none';
}