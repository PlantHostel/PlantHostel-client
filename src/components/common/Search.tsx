import styled from "styled-components";
import SearchImage from "../../assets/search.png";

interface SearchProps {
  placeholder: string;
}

export const Search = ({ placeholder }: SearchProps) => {
  return (
    <SearchBox>
      <SearchInput
        className="search-input"
        type="text"
        placeholder={placeholder}
      ></SearchInput>
      <SearchIcon src={SearchImage}></SearchIcon>
    </SearchBox>
  );
};

const SearchBox = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 52px;
  margin: 30px 0px;
  border: none;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid #dee3e1;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  padding: 12px 20px;
  flex: 1;
  position: relative;
`;

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 16px;
  right: 20px;
`;
