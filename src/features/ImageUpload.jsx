import styled from "styled-components";
import defaultImage from "../assets/default.jpg";
import { useState } from "react";
import { useCV } from "../context/CVContext";

const StyledInput = styled.input`
  display: none;
`;

const UploadContainer = styled.div`
  width: 15rem;
  cursor: pointer;
  justify-self: center;
  /* margin-top: -2rem; */
`;

const StyledImage = styled.img`
  width: 8rem;
  cursor: pointer;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

const StyledSpan = styled.span`
  font-size: 1rem;
  border: 1px solid black;
  padding: 0.4rem 0.8rem;
  border-radius: 50px;
  cursor: pointer;
`;

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { userPhoto, dispatch } = useCV();

  return (
    <UploadContainer>
      <StyledLabel htmlFor="image">
        <img
          className="w-[120px] h-[120px]	rounded-full"
          src={(userPhoto && URL.createObjectURL(userPhoto)) || defaultImage}
        />
        <StyledSpan>Upload Photo</StyledSpan>
      </StyledLabel>
      <StyledInput
        type="file"
        id="image"
        onChange={(e) => {
          setSelectedImage(e.target.files[0]);
          dispatch({ type: "setUserPhoto", payload: e.target.files[0] });
        }}
      />
    </UploadContainer>
  );
}

export default ImageUpload;
