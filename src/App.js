import './App.css';
import PropTypes from "prop-types";

// 하위 컴포넌트 - 하나의 컴포넌트는 하나의 파일에 작성하는 것을 권장함. 
// props : 상위컴포넌트에서 하위컴포넌트로 값을 전달
function Food({name, picture, rating}){ // 사용하는 인자값을 매개변수로 사용
  //console.log(props)
  return  (
  <div>
    <h1>I like {name} </h1>
    <h4>{rating}/5.0</h4>
    <img src={picture} width="200px" />
  </div>
)
}

function App() { // 상위 컴포넌트
  // map과 foreach의 차이, map은 결과가 또다른 배열임. 
  return (
    <div>
      <h1>app</h1>  
      {foodILike.map((dish, index) => 
        <Food name={dish.name} key={index} picture={dish.image} rating={dish.rating} />)}
    </div>
  );
}

const foodILike = [
  {name : "김치",
   rating: 2,  
  image : 'https://img-cf.kurly.com/shop/data/goodsview/20201214/gv40000142772_1.jpg' }, 
  {name : "불고기",
  rating: 3,  
  image : 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202108/03/15215bfa-fd0e-475a-95dc-41b3b2be8636.jpg'}, 
  {name : "국밥",
  rating: 4,  
  image : '' }, 
  {name : "삼겹살",
  rating: 5,  
  image : '' }, 
  {name : "케이크",
  image : '' }
];

Food.propTypes = {
  name:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired,
}

export default App;
