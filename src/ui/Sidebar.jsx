import styled from "styled-components";

const StyledSidebar = styled.div`
  grid-row: 1 / -1;
  background-color: blue;
`;

function Sidebar() {
  return <StyledSidebar></StyledSidebar>;
}

export default Sidebar;
