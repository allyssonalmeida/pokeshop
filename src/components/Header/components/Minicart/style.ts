import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  width: 300px;
  position: fixed;
  top: 0;
  right: 0;
  background: #fff;
  z-index: 999;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transform: translateX(300px);
  transition: transform .3s linear;

  &.active{
    transform: translateX(0);
  }
`

export const Header = styled.div`
  background: var(--main-color);
  height: 50px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 10px;
  color: var(--light);

  button{
    border: none;
    background: var(--light);
    border-radius: 50%;
    border: 2px solid var(--dark);
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
  }
`

export const MinicartList = styled.ul` 
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  background: #fff;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  position: relative;

  div{
    display: flex;
    flex-direction: column;
  }
`

export const Remove = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  svg{
    height: 20px;
    fill: var(--secondary-color);
  }

  &:hover{
    svg{
      color: var(--dark);
      fill: var(--dark);
    }
  }
`

export const Totalizers = styled.div`
  width: 300px;
  height: 100px;
  background: pink;
  position: absolute;
  bottom: 0;
  right: 0;
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 20px;
  box-sizing: border-box;
`
export const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  strong{
    display: block;
  }
`

export const PlaceOrder = styled.div`
  width: 100%;
  button{
    width: 100%;
    height: 40px;
    background: var(--main-color);
    color: var(--light);
    font-weight: 600;
    border: none;
    cursor: pointer;

    &:hover{
      background: var(--main-color--dark);
    }
  }
`