import styled from 'styled-components';
import { lightTheme } from 'components/baseStyles/Variables.styled';

const BackDrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Modal = styled.div`
  position: relative;
  display: block;

  max-width: calc(100vw - 40px);
  padding: 10px;

  background-color: ${props => props.theme.white};
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.11) 7px 4px 14px;

  @media screen and (min-width: 768px) {
    max-width: 600px;
    padding: 20px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 40px;
  }
`;

const CloseIconBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  border-radius: 50%;
  border-color: transparent;
  background-color: ${props => props.theme.mainBg};
  backdrop-filter: blur(2px);
  z-index: 50;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 20px;
    right: 20px;
    width: 34px;
    height: 34px;
  }
`;

export { BackDrop, Modal, CloseIconBtn };
