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