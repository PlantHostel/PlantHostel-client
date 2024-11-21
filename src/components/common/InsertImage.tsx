import React, { useState } from "react";
import styled from "styled-components";
import ImagePlus from "../../assets/image-plus.svg?react";
import { Input } from "./Input";

interface InsertImageProps {
  type: string;
}

export const InsertImage = ({ type }: InsertImageProps) => {
  const [image, setImage] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent) => {
    const { files } = e.target as HTMLInputElement;

    console.log(files);

    if (files && files.length > 0) {
      setImage(files[0]);
    }
  };

  return (
    <InsertImageContainer className="insert-image" type={type}>
      <Input
        type="file"
        id="file-input"
        name="file-input"
        onChange={handleFileChange}
      />
      <div className="image-section">
        <label className="image" htmlFor="file-input">
          {image && (
            <img
              src={image && URL.createObjectURL(image)}
              className="bg-image"
            />
          )}
          <ImagePlus
            className="insert-icon"
            stroke={image ? "white" : "#505050"}
          />
        </label>
      </div>
    </InsertImageContainer>
  );
};

const InsertImageContainer = styled.div<{ type: string }>`
  input[type="file"] {
    display: none;
  }

  .image {
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
    backdrop-filter: blur(8px);
    border-radius: ${(props) => (props.type === "circle" ? "100%" : "")};
  }

  .image .bg-image {
    width: 120px;
    height: 120px;
  }

  .image .insert-icon {
    position: absolute;
  }
`;
