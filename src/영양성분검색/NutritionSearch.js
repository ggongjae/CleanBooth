import "./NutritionSearch.css"
import Header from "../공통/Header";
import Gnb from "../공통/Gnb";
import Footer from "../공통/Footer";
import { useState } from 'react';
import prooductImage from '../사진/product.jpg'
import heart from '../사진/heart.jpg'
import redheart from '../사진/redheart.jpg'

function NutritionSearch() {
    const data = [
        {
          category: '비건',
          items: ['식물성 단백질', '아몬드', '귀리', '코코넛', '치아씨드', '렌팅콩', '병아리콩', '퀴노아', '템페', '오트밀'],
        },
        {
          category: '다이어트',
          items: [
            '고단백/저탄수화물',
            '저칼로리',
            '저나트륨',
            '무설탕',
            '천연 감미료',
            '글루텐 프리',
            '운동보충제',
          ],
        },
      ];
// 가상의 상품 데이터 (예시)
const [products, setProducts] = useState([
    {
        id: 1,
        brand: '브랜드명',
        name: '제품명',
        price: '가격',
        rating: '★★★★☆',
        reviewCount: '리뷰 갯수',
        image: prooductImage,
    },
    {
        id: 2,
        brand: '브랜드명',
        name: '제품명',
        price: '가격',
        rating: '★★★★☆',
        reviewCount: '리뷰 갯수',
        image: prooductImage,
    },
    {
        id: 3,
        brand: '브랜드명',
        name: '제품명',
        price: '가격',
        rating: '★★★★☆',
        reviewCount: '리뷰 갯수',
        image: prooductImage,
    },
    {
        id: 4,
        brand: '브랜드명',
        name: '제품명',
        price: '가격',
        rating: '★★★★☆',
        reviewCount: '리뷰 갯수',
        image: prooductImage,
    },
    {
        id: 5,
        brand: '브랜드명',
        name: '제품명',
        price: '가격',
        rating: '★★★★☆',
        reviewCount: '리뷰 갯수',
        image: prooductImage,
    },
    {
        id: 6,
        brand: '브랜드명',
        name: '제품명',
        price: '가격',
        rating: '★★★★☆',
        reviewCount: '리뷰 갯수',
        image: prooductImage,
    },
    {
        id: 7,
        brand: '브랜드명',
        name: '제품명',
        price: '가격',
        rating: '★★★★☆',
        reviewCount: '리뷰 갯수',
        image: prooductImage,
    },
    {
        id: 8,
        brand: '브랜드명',
        name: '제품명',
        price: '가격',
        rating: '★★★★☆',
        reviewCount: '리뷰 갯수',
        image: prooductImage,
    },
    {
        id: 9,
        brand: '브랜드명',
        name: '제품명',
        price: '가격',
        rating: '★★★★☆',
        reviewCount: '리뷰 갯수',
        image: prooductImage,
    }
]);

//하트
const [heartedProducts, setHeartedProducts] = useState([]);

const handleHeartClick = (productId) => {
    setHeartedProducts((prevHeartedProducts) =>
        prevHeartedProducts.includes(productId)
            ? prevHeartedProducts.filter((id) => id !== productId)
            : [...prevHeartedProducts, productId]
    );
};
//분류
let [PDetail, PD] = useState(['비건', '식물성단백질', 'Rectangle 179', '브랜드명', '제품명']);

    return(
        <div className="background">
            <div className="background_long_round">
                <Header/>
                <div className="bigBox">
                    <Gnb/>
                    <hr className='nutrition-search-hr'/>
                    <div className="nutrition-search">

                    <div className='category'>
                        <a className='ctgr' href=''>영양성분검색</a>
                        <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
                        <a className='ctgr' href=''>{PDetail[0]}</a>
                        <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
                        <a className='ctgr' href=''>{PDetail[1]}</a>
                    </div>

                    <p className="nutrition-search-title">영양성분 카테고리</p>
                    <div className="nutrition-search-category">
                    <ul className="ul1">
                        {data.map((categoryData, index) => (
                            <li key={index}>
                            <a href="">{categoryData.category}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ㅣ</a>
                            <ul className={`ul${index + 2}`}>
                            {categoryData.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                        ))}
                    </ul>
                    </li>
                ))}
                </ul>
                    </div>
                    <div className='search-result'>
                        <p className='search-result-p'>검색 결과 총 N건</p>
                    </div>
                    <div className='pricesort'>
                        <div button className='login'> 추천순 &nbsp; </div>
                        <span className='divider'> | &nbsp; </span>
                        <div button className='sign-up'> 낮은 가격순 &nbsp; </div>
                        <span className='divider'>  | &nbsp; </span>
                        <div button className='customer_center'> 높은 가격순 </div>
                    </div>

                <div className="product-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-item">
                            <div className="product-image-container">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="product-image" />
                                <img
                                    src={heartedProducts.includes(product.id) ? redheart : heart}
                                    alt="Heart"
                                    className="heart-image"
                                    onClick={() => handleHeartClick(product.id)}
                                />
                            </div>

                        <div className="product-info">
                            <p className="brand">{product.brand}</p>
                            <p className="name">{product.name}</p>
                            <div className="rating-container">
                                <p className="rating">{product.rating}</p>
                            </div>
                            <p className='reviewCount'>{product.reviewCount}</p>
                        </div>
                    </div>
                ))}
                </div>
                </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default NutritionSearch;