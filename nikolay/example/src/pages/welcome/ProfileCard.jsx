import React from "react";

import { styles } from "../../styles";
import ProfileModal from "./ProfileModal";

const ProfileCard = () => {


  return (
    <div className="sm:text-center">
      <h1 className={`${styles.Title3} text-purple`} >Lorem Ipsum Dolo</h1>
      <h1 className={`${styles.Title3}`} >res amen lorem</h1>
      <p className={styles.sectionSubText} style={{ color: 'var(--dark-gray)' }}>Alchol based exposures through inadvertenty consuming hand sanitizer, have been observed to produc</p>
      <ProfileModal />

    </div>
  )
}

export default ProfileCard