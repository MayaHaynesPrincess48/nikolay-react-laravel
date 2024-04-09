import React from "react"

import { SectionWrapper } from "../../hoc"
import CustomerData from "./CustomerData";


const CustomerReviews = () => {
  return (
    <>
      <CustomerData />
    </>
  );
};

export default SectionWrapper(CustomerReviews, "customerReviews");
