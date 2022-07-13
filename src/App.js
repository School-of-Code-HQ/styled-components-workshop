import styled from "styled-components";
import { CV } from "./components/CV";

//HTML semantics: https://learn-the-web.algonquindesign.ca/topics/html-semantics-cheat-sheet/

const App = () => {
  let bgURL =
    "https://img.freepik.com/free-vector/hand-drawn-minimal-background_23-2148999829.jpg?w=2000";

  return (
    <StyledApp bgURL={bgURL}>
      <CV />
    </StyledApp>
  );
};

export default App;

const StyledApp = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-self: center;

  background-color: red;
  background: black url(${({ bgURL }) => bgURL}) no-repeat fixed center;
`;
