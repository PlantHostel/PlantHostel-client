import { useMemo } from "react";
import ReactQuill from "react-quill";
import styled from "styled-components";
import { CommonButton } from "./CommonButton";

export const Write = () => {
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }, { align: [] }],
          ["link", "image"],
        ],
        // handlers: { image: imageHandler },
      },
      clipboard: {
        matchVisual: false,
      },
    }),
    []
  );

  return (
    <WriteContainer>
      <ReactQuill modules={modules} placeholder="내용을 입력하세요" />
      <ButtonSection>
        <CommonButton text="미리보기" bgColor="white" txtColor="#073a29" />
        <CommonButton text="완료" />
      </ButtonSection>
    </WriteContainer>
  );
};

const WriteContainer = styled.div`
  .ql-toolbar {
    padding: 12px;
    margin-bottom: 8px;
  }

  .ql-toolbar .ql-formats {
    margin-right: 0;
  }

  .ql-container {
    border-top: 1px solid #ccc !important;
    height: 350px;
  }

  .ql-editor::before {
    font-style: normal;
    font-family: "Pretendard-Regular";
    font-size: 15px;
    line-height: 22px;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 12px;

  button {
    flex: 1;
  }
`;
