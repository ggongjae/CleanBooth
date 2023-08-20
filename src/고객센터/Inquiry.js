import "./Inquiry.css"
import image1 from "../사진/Frame 11 (1).png"
import image2 from "../사진/Frame 339.png"
import image3 from "../사진/Frame 340.png"

function Inquiry (){
  return(
    <div className="inquiry_text0">
      <p className="inquiry_text1">cs 운영시간</p>
      <p className="inquiry_text2">평일 오전 9시 ~ 오후 6시</p>
      <p className="inquiry_text3">점심시간 | 오후 12 - 1 시</p>
      <div className="inquiry_image">
        <img className='img1' src ={image1}></img>
        <img className='img2' src ={image2}></img>
        <img className='img3' src ={image3}></img>
      </div>
    </div>
  )
}

export default Inquiry;