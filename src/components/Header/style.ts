import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  padding: 0;
  margin: 0;
`

export const Top = styled.div`
  width: 100%;
  border-bottom: 5px solid #000;

  img{
    object-fit: contain;
    height: 100%;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  max-width: 60em;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
`

export const Bottom = styled.div`
  width: 100%;
  height: 80px;
  background: #E71A23;
  position: relative;
  padding: 0;

  &::before{
    content: '';
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 5px solid #000;
    background: #fff;
    position: absolute;
    top: -20px;
    right: calc(50% - 15px);
  }
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
`

export const Minicart = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`