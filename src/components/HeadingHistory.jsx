import { useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import styled from "styled-components";
import { useCV } from "../context/CVContext";

const StyledContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;

  padding: 1rem;

  &:hover {
    color: #4d4dff;
  }
`;

const DeleteIconContainer = styled.div`
  position: absolute;
  right: -30px;
  transition: all 0.3s;
  opacity: ${(props) => (props.$isHovered ? 1 : 0)};
  size: 2rem;

  &:hover {
    color: #4d4dff;
  }

  & > div:hover {
    opacity: 1;
  }
`;

const StyledOuterContainer = styled.div`
  position: relative;
`;

const DeleteText = styled.div`
  z-index: 10;
  background-color: rgb(30, 37, 50);
  color: white;
  font-size: 0.8rem;
  border-radius: 3px;
  padding: 0.4rem 0.4rem;
  position: absolute;
  top: -32px;
  left: -13px;
  opacity: ${(props) => (props.$isIconHovered ? 1 : 0)};
  transition: all 0.5s ease-out;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    display: block;
    background-color: rgb(30, 37, 50);
    position: absolute;
    border-radius: 0px 0px 2px;
    transform: translate(-50%, -50%) rotateZ(45deg);
    left: 50%;
    bottom: -30%;
  }
`;

function HeadingHistory({ handleOpen, item, isOpen, title, history, kind }) {
  const type = {
    education: "setEducation",
    workHistory: "setWorkHistory",
    language: "setLanguages",
    references: "setReferences",
  };
  const [isHover, setIsHover] = useState(false);
  const [iconIsHover, setIconIsHover] = useState(false);
  const { dispatch } = useCV();

  function handleDelete() {
    let newHistory = history.filter((val) => val.id !== item.id);

    dispatch({ type: type[kind], payload: newHistory });
  }
  return (
    <StyledOuterContainer
      onClick={() => handleOpen((s) => !s)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <StyledContainer>
        {title || <p>Not Specified</p>}
        {isOpen ? <IoChevronDownOutline /> : <IoChevronUpOutline />}
        <DeleteIconContainer
          $isHovered={isHover}
          onMouseEnter={() => {
            setIsHover(true);
            setIconIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
            setIconIsHover(false);
          }}
          onClick={handleDelete}
        >
          <DeleteText $isIconHovered={iconIsHover}>Delete</DeleteText>
          <MdOutlineDelete size={"20px"} />
        </DeleteIconContainer>
      </StyledContainer>
    </StyledOuterContainer>
  );
}

export default HeadingHistory;
