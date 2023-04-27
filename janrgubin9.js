import inquirer from "inquirer";
// console.log(inquirer)
// 비즈니스 로직
//  % 나머지 값을 내는 연산자 "%"
// 7%2 = 1
// 숫자 7을 2로 나눈 값은 1이다
// 8%2 = 0
// 숫자 8을 2로 나눈 값은 0이다

// 홀수 odd number, 짝수 even number를 구분하는 근거로
// 2로 나눈 값의 '몫'을 제외한 나머지가 0이면 짝수, 아니면 홀수라는 결론이 나옴
// 오라클 빌딩에는 두개의 엘레베이터가 있다.
// inquirer.prompt(["하이"])
// !질문을 객체 배열 형태로 받아서, 사용자에게 질문을 하고 그에 대한 답변을 Promise로 반환

function oddElevator(floorNumber) {
  // 홀수층이지만 이 둘은 가능함
  // const canUse = "";
  const test = inquirer.prompt([{
    type : "list",
    name : "selectFloor",
    message : "층을 고르세요",
    choices : ['지하1층','1층','2층','3층','4층','5층','6층','7층','8층','9층','10층']
  }]);
  test.then((answer)=> {
    console.log(answer);
    const selectFloor = answer.selectFloor
    // 입력받은 층 확인
    console.log(selectFloor)
    // const parse = JSON.parse(answer);
    // console.log(parse)
    if(selectFloor === "f1" || selectFloor === 10 || selectFloor % 2 !== 0) {
      console.log("이용 가능")
    } else {
      console.log("이용 불가")
    }
    // return selectFloor
  });

 
 
  
}
// inquirer.prompt(
//   [{  type : "input",
//       name : '선택한 층은',
//       message : "층을 입력하세요"
//   }]).then((answer) => {
//       console.log('안내 : ', answer)
// })

function evenElevator(floorNumber) {
  if(floorNumber % 2 !== 0 ) {
    console.log("여긴 짝수층만 운행함니다 내리세연")
  } else if(floorNumber % 2 === 0 ) {
    console.log("짝수네? 올라 타세욘")
  }
}
oddElevator();
// evenElevator(1);

// 홀수 전용 짝수 전용 엘리베이터 두개가 마련 되어있지만, 예외가 발생함

// 짝수 엘리베이터는 1층도 가능하게 설계가 되어있다.
// 홀수 엘레베이터는 10층도 가능하게 설계가 되어있다.
// 짝수 홀수 엘리베이터 둘다 지하일층 까지 가능하게 설계 되어있다.

// ESM 모듈 방식으로 사용 가능한
// npm install inquirer 모듈을 설치하여
// 지하 1층부터 10층까지의 숫자를 입력할 수 있는 인터페이스를 제작한다.
// "문을 열겠습니다"라는 문구가 나온다. 
// 1초뒤에 "n층에 도착하였습니다" 라는 문구가 나오게 한다
// "문을 닫습니다" 라는 문구가 나오게 한다

// 위의 설명을 종합하여 orderlist(순서가 있는 목록)으로
// 예상되는 절차를 술어로 작성하시오

// 함수에서도 몇층으로 갈지 입력하는 것이 이해가 안됨
// ! 지하 1층부터 10층까지의 숫자를 입력할 수 있는 인터페이스를 제작한다. 라고 했는데 함수에 층 입력하는게 이해안됨
//? -> .then()메소드 내에서 모든 데이터 처리하면 될 것으로 판단 됨