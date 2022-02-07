
// 쿠키가져오기 : documane.cookie가져와서 parsing해야한다
const getCookie = (name) => {

  let value = "; "+document.cookie;
  let parts = value.split(`; ${name}=`) 
  if ( parts.length === 2){
    return parts.pop().split(';').shift();
  }  
}

// 쿠키 생성 : 이름, 값,  만료일=5(기본값지정가능)
const setCookie = (name, value, exp = 5 )=>{

  let date = new Date();
  date.setTime(date.getTime() + exp *24*60*60*1000)
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  // 쿠키저장하는 함수 : document.cookie = key=value
  // 만료일만큼의 날짜생성됨 => 저장 : espire에 날짜넘겨줌
}


// 쿠키 삭제
const deleteCookie = (name) => {
  let date = new Date('2020-01-01').toUTCString();
  console.log(date)

  document.cookie = name+"=; expires="+date;
}




export { getCookie, setCookie, deleteCookie };

