import styled from 'styled-components'

export const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap;
  margin: 0 auto;
`

export const Pagination = styled.div`
  position: relative;
  margin-top: 20px
`
export const Button = styled.button.attrs((props: {right: string, left: string}) =>({
    right: props.right || "initial",
    left: props.left || "initial",
  }))`
    background: #5DB9FF;
    color: #fff;
    padding: 8px 15px;
    font-weight: 600;
    border: none;
    border-radius: 15px;
    position: absolute;
    right: ${props => props.right};
    left: ${props => props.left};
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &:hover{
      background: #363B81;
    }
`

export const TypeBadge = styled.div`
  height: 30px;
  width: 30px;
  background: #000;
`