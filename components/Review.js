import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Review = () => {
  return (
    <div className="reviews">
      <h2>Customer Reviews</h2>
      <div className="star__container">
        <div className="section__rating-1">
          <div className="five__star">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <p>Based on 2 reviews</p>
        </div>
        <div className="section__rating-2">
          <div className="five__stars">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="rating__bar">
              <div className="bar__5"></div>
            </div>
            <div className="bar__percentage">50%</div>
            <div className="bar__frequency">(8)</div>
          </div>
          <div className="five__stars">
            <div className="stars">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <div className="rating__bar">
              <div className="bar__4"></div>
            </div>
            <div className="bar__percentage">0%</div>
            <div className="bar__frequency">(1)</div>
          </div>
          <div className="five__stars">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
            <div className="rating__bar">
              <div className="bar__3"></div>
            </div>
            <div className="bar__percentage">50%</div>
            <div className="bar__frequency">(1)</div>
          </div>
          <div className="five__stars">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
            <div className="rating__bar">
              <div className="bar__2"></div>
            </div>
            <div className="bar__percentage">0%</div>
            <div className="bar__frequency">(0)</div>
          </div>
          <div className="five__stars">
            <div>
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
            <div className="rating__bar">
              <div className="bar__1"></div>
            </div>
            <div className="bar__percentage">0%</div>
            <div className="bar__frequency">(0)</div>
          </div>
        </div>
        <div className="write__review">
          <a href="#">Write a review</a>
        </div>
      </div>
      <div className="more__recent">more recent button</div>
    </div>
  );
};

export default Review;
