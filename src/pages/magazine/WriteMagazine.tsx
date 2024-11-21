import styled from "styled-components";
import { BorderHeader } from "../../components/common/BorderHeader";
import ArrowLeft from "../../assets/arrow-left.png";
import { IconButton } from "../../components/common/IconButton";
import InputLabel from "../../components/common/InputLabel";
import { InsertImage } from "../../components/common/InsertImage";
import { Input } from "../../components/common/Input";
import InputBox from "../../components/common/InputBox";
import { Write } from "../../components/common/Write";

export const WriteMagazine = () => {
  return (
    <WriteMagazineContainer>
      <BorderHeader title="글쓰기" left={<IconButton icon={ArrowLeft} />} />
      <InputLabel labelName="대표사진" required />
      <ImageSection>
        <InsertImage type="rectangle" />
        <div className="label-explain">
          390x460
          <br />
          해당 이미지는 게시글 대표로 노출됩니다.
        </div>
      </ImageSection>
      <InputLabel labelName="제목" required />
      <InputBox>
        <Input
          type="text"
          name="title"
          id="title"
          placeholder="매거진 제목을 입력해주세요"
        />
      </InputBox>
      <InputLabel labelName="소제목" required />
      <InputBox>
        <Input
          type="text"
          name="title"
          id="title"
          placeholder="매거진 제목을 입력해주세요"
        />
      </InputBox>
      <InputLabel labelName="본문" required />
      <Write />
    </WriteMagazineContainer>
  );
};

const WriteMagazineContainer = styled.div`
  .title {
    font-size: 16px;
  }
`;

const ImageSection = styled.div`
  display: flex;
  margin-bottom: 16px;

  .label-explain {
    align-self: flex-end;
    color: #767676;
    font-size: 12px;
    line-height: 18px;
    margin-left: 8px;
    white-space: nowrap;
    font-family: "Pretendard-Regular";
  }
`;
