import React from "react";
import TextField from '@mui/material/TextField';

import SocialCardStyles from "./socialCardStyle";
import SocialMap from "./socialMap";
import { styles } from "../../styles";
import { StyledDarkButton } from "../../components/button/LinkBtn";


const SendCard = () => {
  return (
    <div className="bg-lightGray p-10 " >
      <div>
        <h1 className={`${styles.Title6}`}>The More Important</h1>
        <h4>Physiological respiration involves</h4>
      </div>
      <div className="flex flex-wrap justify-between pt-20">
        <div className="flex justify-center lg:w-[50%] sm:w-[100%] gap-3 py-5">
          <TextField id="outlined-basic" label="Bаш Email" variant="outlined" />
          <StyledDarkButton >подписаться</StyledDarkButton>
        </div>
        <div className="flex justify-center lg:w-[50%] sm:w-[100%] gap-3 py-5">
          {
            SocialMap.map((item, index) => {
              return (
                <div key={index} style={SocialCardStyles.SocialObject}>{item.icons}</div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default SendCard;