/* eslint-disable react/prop-types */
import { Star, StarBorder, StarHalf } from "@mui/icons-material";
const Ratings = ({ rating }) => {
  return (
    <div>
      {rating === 1 ? (
        <>
          <span>
            <Star />
          </span>
          <span>
            <StarBorder />
          </span>
          <span>
            <StarBorder />
          </span>
          <span>
            <StarBorder />
          </span>
          <span>
            <StarBorder />
          </span>
        </>
      ) : rating === 1.5 ? (
        <>
          <span>
            <Star />
          </span>
          <span>
            <StarHalf />
          </span>
          <span>
            <StarBorder />
          </span>
          <span>
            <StarBorder />
          </span>
          <span>
            <StarBorder />
          </span>
        </>
      ) : rating === 2 ? (
        <>
          <span>
            <Star />
          </span>
          <span>
            <Star />
          </span>
          <span>
            <StarBorder />
          </span>
          <span>
            <StarBorder />
          </span>
          <span>
            <StarBorder />
          </span>
        </>
      ) : rating === 2.5 ? (
        <>
          <span>
            <Star />
          </span>
          <span>
            <Star />
          </span>
          <span>
            <StarHalf />
          </span>
          <span>
            <StarBorder />
          </span>
          <span>
            <StarBorder />
          </span>
        </>
      ) : rating === 3 ? (
        <>
          <span>
            <Star />
          </span>
          <span>
            <Star />
          </span>
          <span>
            <Star />
          </span>
          <span>
            <StarBorder />
          </span>
          <span>
            <StarBorder />
          </span>
        </>
      ) : rating === 3.5 ? (
        <>
          <span>
            <Star />
          </span>
          <span>
            <Star />
          </span>
          <span>
            <Star />
          </span>
          <span>
            <StarHalf />
          </span>
          <span>
            <StarBorder />
          </span>
        </>
      ) : rating === 4 ? (
        <>
          <span>
            <Star />
          </span>
          <span>
            <Star />
          </span>
          <span>
            <Star />
          </span>
          <span>
            <Star />
          </span>
          <span>
            <StarBorder />
          </span>
        </>
      ) : rating === 4.5 ? (
        <>
          <span>
            <Star />
          </span>
          <span>
            <Star />
          </span>
          <span>
            <Star />
          </span>
          <span>
            <Star />
          </span>
          <span>
            <StarHalf />
          </span>
        </>
      ) : rating === 5 ? (
        <>
          <span>
            <Star />
          </span>
          <span>
            <Star />
          </span>
          <span>
            <Star />
          </span>
          <span>
            <Star />
          </span>
          <span>
            <Star />
          </span>
        </>
      ) : (
        <>
          <span>
            <StarHalf />
          </span>
          <span>
            <StarHalf />
          </span>
          <span>
            <StarHalf />
          </span>
          <span>
            <StarHalf />
          </span>
          <span>
            <StarHalf />
          </span>
        </>
      )}
    </div>
  );
};

export default Ratings;
