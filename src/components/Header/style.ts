import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  padding: 10px 0;
  border: 2px solid var(--main-color);
  align-items: center;
  justify-content: center;
  gap: 50px;
  background: #f2f2f2;
`

export const Search = styled.div`
  display: flex;
  align-items: center;

  input[type=text]{
    height: 40px;
    border-radius: 6px;
    border: 2px solid var(--dark);
    min-width: 400px;
    box-sizing: border-box;
    padding-left: 20px;
  }
`;
