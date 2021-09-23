import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Intro>Tradir 프론트엔드 과제 제출_안지현</Intro>
      <GithubLink
        href="https://github.com/jihyunan-dev/FE_TEST-tradir.io"
        target="_blank"
      >
        Github Link 바로가기
      </GithubLink>
    </Container>
  );
};

const Container = styled.div`
  padding: 30px;
`;

const Intro = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const GithubLink = styled.a`
  text-decoration: underline;
`;

export default Home;
