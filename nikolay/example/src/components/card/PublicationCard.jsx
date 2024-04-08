
import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { fadeIn } from "../../utils/motion";
import { StyledCardButton, StyledCardGroup, StyledWhiteAddButton } from "../button/LinkBtn";

const PublicationCard = ({ index, purpleText, text, title, content }) => {

  const [isHovered, setIsHovered] = useState(false)
  const [addHovered, setAddHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseBtnEnter = () => {
    setAddHovered(true)
  }

  const handleMouseBtnLeave = () => {
    setAddHovered(false)
  }

  const divStyle = {
    width: '100%',
    background: isHovered ? 'var(--purple)' : 'var(--dark)',
    padding: '1px',
    borderRadius: '10px',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    cursor: 'pointer'
  }

  const btnStyle = {
    transform: addHovered ? 'translate(-2px, -3px)' : 'none',
  }

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        style={divStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          options={{ max: 45, scale: 1, speed: 450, }}
          className='rounded-[10px] p-6 min-h-[280px]'
        >
          <h5 className="text-purple">{purpleText}</h5>
          <h5 className="text-primary">{text}</h5>
          {
            isHovered ? (
              <div className="flex pt-16">
                <StyledCardGroup
                  onMouseEnter={handleMouseBtnEnter}
                  onMouseLeave={handleMouseBtnLeave}
                >
                  <StyledCardButton style={btnStyle}>Lorem ipsum</StyledCardButton>
                  <StyledWhiteAddButton style={btnStyle}><div><a>+</a></div></StyledWhiteAddButton>
                </StyledCardGroup>
              </div>
            ) :
              (
                <>
                  <h3 className='text-primary font-bold pt-12 '>{title}</h3>
                  <h6 className="text-secondary">{content}</h6>
                </>
              )
          }

        </div>
      </motion.div>
    </Tilt>
  )
};

export default PublicationCard