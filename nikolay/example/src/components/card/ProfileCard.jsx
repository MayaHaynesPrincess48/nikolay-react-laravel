import React from "react";

import { styles } from "../../styles";
import ProfileModal from "../modal/ProfileModal";
// import { StyledPurpleButton } from "../button/LinkBtn";

const ProfileCard = () => {


  return (
    <>
      <h1 className={styles.sectionHeadText} style={{ color: 'var(--purple)' }}>Lorem Ipsum Dolo</h1>
      <h1 className={styles.sectionHeadText} style={{ color: 'var(--dark)' }} >res amen lorem</h1>
      <p className={styles.sectionSubText} style={{ color: 'var(--dark-gray)' }}>Alchol based exposures through inadvertenty consuming hand sanitizer, have been observed to produc</p>
      {/* <StyledPurpleButton >Lorem ipsum</StyledPurpleButton> */}
      <div className="pt-10">
        <ProfileModal />
      </div>

    </>
  )
}

export default ProfileCard