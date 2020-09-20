import styled, { css } from 'styled-components'

export const Spinner = styled.div<{ color: string; top: string; left: string }>`
  width: 20px;
  height: 20px;
  position: absolute;
  display: inline-block;
  ${({ top, left }) => css`
    top: ${top};
    left: ${left};
  `}

  &:after {
    content: ' ';
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 3px solid;
    animation: ring 1.2s linear infinite;
    ${({ color }) =>
      css`
        border-color: ${color} transparent ${color} transparent;
      `}
  }
  @keyframes ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
