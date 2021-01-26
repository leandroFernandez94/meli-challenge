import { useRef, ReactElement, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const HEADER_HEIGHT = "34px";

const StyledHeader = styled.header`
  display: flex;
  height: ${HEADER_HEIGHT};
  background-color: #ffe600;
  padding: 15px 10%;

  & > a {
    margin-right: 20px;
    height: ${HEADER_HEIGHT};
  }
`;

const NavLogo = styled.a`
  background-image: url("/Logo_ML@2x.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 50px;
`;

const StyledForm = styled.form`
  flex-grow: 1;
  display: flex;
  background-color: white;
  border-radius: 5px;
  & > input {
    flex-grow: 2;
    border-radius: 5px;
  }
`;

const StyledInput = styled.input`
  border-radius: 5px;
  padding-left: 15px;
  padding-top: 9px;
  padding-bottom: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  font-family: proxima-nova, sans-serif;
  font-style: normal;
  font-weight: 400;
  color: #333;
`;

const SearchButton = styled.button`
  width: ${HEADER_HEIGHT};
  height: ${HEADER_HEIGHT};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  outline: none;
  border: none;
  position: relative;
  background-color: #eeeeee;
  background-image: url("/ic_Search.png");
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

function SearchBar(): ReactElement {
  const inputElement = useRef<HTMLInputElement>(null);
  const history = useHistory();

  async function submitSearch(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const searchText = inputElement.current?.value;
    if (!searchText) return;
    const encodedQuery = encodeURIComponent(searchText);
    history.push(`/items?search=${encodedQuery}`);
  }

  return (
    <StyledHeader>
      <NavLogo href="/" />
      <StyledForm onSubmit={submitSearch} role="search">
        <StyledInput
          ref={inputElement}
          type="text"
          placeholder="Nunca dejes de buscar"
          autoFocus
        />
        <SearchButton type="submit" />
      </StyledForm>
    </StyledHeader>
  );
}

export default SearchBar;
