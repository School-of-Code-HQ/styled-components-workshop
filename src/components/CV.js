import styled from "styled-components";

export const CV = ({ children }) => {
  return (
    <StyledCV>
      <aside>Happy</aside>
      <section>coding</section>
    </StyledCV>
  );
};

//good resource for shadows: https://getcssscan.com/css-box-shadow-examples

const StyledCV = styled.div`
  background-color: white;
  width: 100vw;
  max-width: 900px;
  min-height: 90vh;
  margin: 100px auto;
  border-radius: 5px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  display: flex;

  aside {
    background-color: #333;
    color: white;
    width: 25%;
    text-align: right;
    border-radius: 5px 0 0 5px;
  }

  section {
    flex-grow: 1;
    background-color: #f5f5f5;
    color: #333;
    border-radius: 0 5px 5px 0;
  }

  aside,
  section {
    padding: 30px;
  }
`;
