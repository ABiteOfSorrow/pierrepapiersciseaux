1. 리액트 컴포넌트

 1) 컴포넌트의 형태
    function Hello() {
        return <h1>안녕 리액트</h1>
    }
    - 이름 첫글자는 반드시 대문자로
    - JSX 문법으로 작성된 개체를 반환해야함
    - 꼭 함숙 ㅏ아니여도 됨

 2) 사용 
    const element = (
        <>
            <Hello />
        </>
    )

    ReactDom.render(element, document.getElementById('root'));

 3) 이미지 파일은 변수에 할당해서 주소를 가져와야 작동한다.

    ex) import diceBlue01 from './assets/dice-blue-1.svg';

        function Dice() {
            return <img src={diceBlue01} alt="dé-blue-1" />
        }

export default Dice;

 4) 컴포넌트에 지정해준 속성을 props라고 부른다. (각각의 속성은 prop(erty))
    ex) <Dice color="blue">


2. 값이 변하는 요소를 처리할때는 onChange를 사용 (자바스크립트의 onInput과 같음)

<input type="number" value={bet} min={1} max={9} onChange={handleBetChange}></input>

  const handleBetChange = (e) => {
    const num = Number(e.target.value);
    setBet(num);
  };
    - 이때 가져오는 값은 문자열이 되므로 다른 타입을 원하면 변경해줘야함

e.target.value 의 값을 관찰해보면 아시겠지만, input 태그에 min, max, step 이 지정되었더라도 
항상 정수만 입력 값으로 들어오는 게 아닌데요. 입력값은 크게 세 가지 경우로 나눌 수 있습니다.

    정수 문자열
    소수점 숫자 문자열
    "", 빈 문자열 (숫자가 아닌 값을 입력한 경우) - 숫자가 아닌 잘못된 문자열의 경우
