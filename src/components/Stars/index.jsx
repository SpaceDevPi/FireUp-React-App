import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const Stars = (props) => {
  const [rating, setRating] = useState(5) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    console.log(rate/20)
    setRating(rate/20)
    props.setrating(rate/20);
    // other logic
  }

  return (
    <Rating
      // fillColor="#BADA55"
      // allowHalfIcon
      // tooltipArray={['nul', 'bof', 'moyen', 'top', 'génial']}
      transition
      showTooltip
      onClick={handleRating}
      ratingValue={rating} /* Available Props */
    />
  )


}
export default Stars;
