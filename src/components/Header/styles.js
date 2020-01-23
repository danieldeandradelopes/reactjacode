import styled from 'styled-components';
import { MdWifi } from 'react-icons/md';

export const Navbar = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  background: rgba(96, 42, 96, 0.9);
  overflow: hidden;

  a {
    margin: 0 10px 0 10px;
    color: #fff;
  }

  div {
    margin: 10px;
  }
`;

export const Buttons = styled.div`
  display: flex;

  button {
    height: 40px;
    width: 80px;
    margin: 5px;
    border-radius: 5px;
    border: 0;
  }
`;
