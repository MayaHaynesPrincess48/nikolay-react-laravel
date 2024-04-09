import React from "react"

import { SectionWrapper } from "../../hoc"
import CustomerData from "./CustomerData";
import ReviewHistory from "./ReviewHistory";


const CustomerReviews = () => {
  return (
    <>
      <CustomerData />
      <ReviewHistory />
    </>
  );
};

export default SectionWrapper(CustomerReviews, "customerReviews");
