import React from "react"

import { SectionWrapper } from "../../hoc"
import CreatePublication from "./CreatePublication"
import ViewPublication from "./ViewPublication"
import Category from "../category/Category";

const MyPublications = () => {
  return (
    <>
      <CreatePublication />
      <ViewPublication />
      <Category />
    </>
  );
};

export default SectionWrapper(MyPublications, "myPublications");
