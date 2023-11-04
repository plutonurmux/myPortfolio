import React, { useState } from "react";
import styled from "styled-components";
import { MDDown, SMDown } from "../../../styles/responsive";
const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
`;
interface LineProps {
  strokeDashArray: string;
  strokeWidth: string;
}
const Line = styled.path<LineProps>`
  display: none;
  ${SMDown({
    display: "inline-block",
  })}
  fill: none;
  stroke: ${({ theme }) => theme.palette.common.white};
  stroke-width: ${(props) => props.strokeWidth};
  stroke-dasharray: ${(props) => props.strokeDashArray};
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
`;
interface OpenedLineProps {
  strokeDashOffset: string;
}
const OpenedLine = styled(Line)<OpenedLineProps>`
  stroke-dashoffset: ${(props) => props.strokeDashOffset};
`;

type Props = {
  ariaLabel: string;
  isMenuOpen: boolean;
};

const Hamburger: React.FC<Props> = ({ ariaLabel, isMenuOpen }) => {
  const line1StrokeDashArray = isMenuOpen ? "90 207" : "60 207";
  const line1StrokeDashOffset = isMenuOpen ? "-134" : "0";
  const line2StrokeDashArray = isMenuOpen ? "1 60" : "60 60";
  const line2StrokeDashOffset = isMenuOpen ? "-30" : "0";
  const line3StrokeDashArray = isMenuOpen ? "90 207" : "60 207";
  const line3StrokeDashOffset = isMenuOpen ? "-134" : "0";
  return (
    <MenuButton className={isMenuOpen ? "opened" : ""} aria-label={ariaLabel}>
      <svg width="50" height="50" viewBox="0 0 100 100">
        <Line
          className="line line1"
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          strokeDashArray={line1StrokeDashArray}
          strokeDashoffset={line1StrokeDashOffset}
          strokeWidth="6"
        />
        <Line
          className="line line2"
          d="M 20,50 H 80"
          strokeDashArray={line2StrokeDashArray}
          strokeDashoffset={line2StrokeDashOffset}
          strokeWidth="6"
        />
        <Line
          className="line line3"
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.00.058 L 25.000021,75.000058"
          strokeDashArray={line3StrokeDashArray}
          strokeWidth="6"
          strokeDashoffset={line3StrokeDashOffset}
        />
        <OpenedLine
          className="line line1 opened-line1"
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          strokeDashArray={line1StrokeDashArray}
          strokeWidth="6"
          strokeDashOffset={line1StrokeDashOffset}
        />
        <OpenedLine
          className="line line2 opened-line2"
          d="M 20,50 H 80"
          strokeDashArray={line2StrokeDashArray}
          strokeWidth="6"
          strokeDashOffset={line2StrokeDashOffset}
        />
        <OpenedLine
          className="line line3 opened-line3"
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,75.000058"
          strokeDashArray={line3StrokeDashArray}
          strokeWidth="6"
          strokeDashOffset={line3StrokeDashOffset}
        />
      </svg>
    </MenuButton>
  );
};

export default Hamburger;
