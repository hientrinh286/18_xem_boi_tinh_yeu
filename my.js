function confirm(){
    let boy_name = document.getElementById('boy-name').value;
    let girl_name = document.getElementById('girl-name').value;
    let boy_year = +document.getElementById('boy-year').value;
    let girl_year = +document.getElementById('girl-year').value;
    let can_nam = boy_year %10;
    let chi_nam = boy_year %12;
    let can_nu = girl_year%10;
    let chi_nu = girl_year%12;
    switch (can_nam){
        case 0 :
            boy_leap_year = 'Canh';
            break;
        case 1 :
            boy_leap_year = 'Tân';
            break;
        case 2 :
            boy_leap_year = 'Nhâm';
            break;
        case 3 :
            boy_leap_year = 'Quý';
            break;
        case 4 :
            boy_leap_year = 'Giáp';
            break;
        case 5 :
            boy_leap_year = 'Ất';
            break;
        case 6 :
            boy_leap_year = 'Bính';
            break;
        case 7 :
            boy_leap_year = 'Đinh';
            break;
        case 8 :
            boy_leap_year = 'Mậu';
            break;
        case 9 :
            boy_leap_year = 'Kỷ';
            break;
    }
    switch (chi_nam){
        case 0 :
            boy_leap_year += ' Thân';
            break;
        case 1 :
            boy_leap_year += ' Dậu';
            break;
        case 2 :
            boy_leap_year += ' Tuất';
            break;
        case 3 :
            boy_leap_year += ' Hợi';
            break;
        case 4 :
            boy_leap_year += ' Tý';
            break;
        case 5 :
            boy_leap_year += ' Sửu';
            break;
        case 6 :
            boy_leap_year += ' Dần';
            break;
        case 7 :
            boy_leap_year += ' Mão';
            break;
        case 8 :
            boy_leap_year += ' Thìn';
            break;
        case 9 :
            boy_leap_year += ' Tỵ';
            break;
        case 10 :
            boy_leap_year += ' Ngọ';
            break;
        case 11 :
            boy_leap_year += ' Mùi';
            break;
    }
    switch (can_nu){
        case 0 :
            girl_leap_year = 'Canh';
            break;
        case 1 :
            girl_leap_year = 'Tân';
            break;
        case 2 :
            girl_leap_year = 'Nhâm';
            break;
        case 3 :
            girl_leap_year = 'Quý';
            break;
        case 4 :
            girl_leap_year = 'Giáp';
            break;
        case 5 :
            girl_leap_year = 'Ất';
            break;
        case 6 :
            girl_leap_year = 'Bính';
            break;
        case 7 :
            girl_leap_year = 'Đinh';
            break;
        case 8 :
            girl_leap_year = 'Mậu';
            break;
        case 9 :
            girl_leap_year = 'Kỷ';
            break;
    }
    switch (chi_nu){
        case 0 :
            girl_leap_year += ' Thân';
            break;
        case 1 :
            girl_leap_year += ' Dậu';
            break;
        case 2 :
            girl_leap_year += ' Tuất';
            break;
        case 3 :
            girl_leap_year += ' Hợi';
            break;
        case 4 :
            girl_leap_year += ' Tý';
            break;
        case 5 :
            girl_leap_year += ' Sửu';
            break;
        case 6 :
            girl_leap_year += ' Dần';
            break;
        case 7 :
            girl_leap_year += ' Mão';
            break;
        case 8 :
            girl_leap_year += ' Thìn';
            break;
        case 9 :
            girl_leap_year += ' Tỵ';
            break;
        case 10 :
            girl_leap_year += ' Ngọ';
            break;
        case 11 :
            girl_leap_year += ' Mùi';
            break;
    }
    /*document.getElementById('boy-name-input').innerHTML = boy_name;
    document.getElementById('girl-name-input').innerHTML = girl_name;
    document.getElementById('boy-year-input').innerHTML = boy_year;
    document.getElementById('girl-year-input').innerHTML = girl_year;*/
    document.getElementById('boy-leap-year').innerHTML = 'Năm sinh âm lịch của bạn nam là: <br>'+boy_leap_year;
    document.getElementById('girl-leap-year').innerHTML = 'Năm sinh âm lịch của bạn nữ là: <br>'+girl_leap_year;
    if (chi_nam==0 || chi_nam==3 || chi_nam==6 || chi_nam==9){
        nam_age = 'xung1';
    }
    else if (chi_nam==1 || chi_nam==4 || chi_nam==7 || chi_nam==10){
        nam_age = 'xung2';
    }
    else {
        nam_age = 'xung3';
    }
    if (chi_nu==0 || chi_nu==3 || chi_nu==6 || chi_nu==9){
        nu_age = 'xung1';
    }
    else if (chi_nu==1 || chi_nu==4 || chi_nu==7 || chi_nu==10){
        nu_age = 'xung2';
    }
    else {
        nu_age = 'xung3';
    }
    if (nam_age==nu_age){
        document.getElementById('result').innerHTML = 'Hai tuổi '+ boy_leap_year + ' và '+girl_leap_year+' không hợp nhau. Vote '+boy_name+' và '+girl_name+' chia tay!' 
    }
    else {
        document.getElementById('result').innerHTML = 'Hai tuổi '+ boy_leap_year + ' và '+girl_leap_year+' không thuộc tuổi xung nhau. Cưới tốt.'
    }
}