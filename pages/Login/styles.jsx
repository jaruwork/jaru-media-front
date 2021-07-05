import styled from '@emotion/styled';

export const Header = styled.header`
  text-align: center;
  font-weight: 700;
  font-size: 48px;
  line-height: 46px;
  letter-spacing: -0.75px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 400px;
  max-width: 400px;
`;

export const Label = styled.label`
  margin-bottom: 16px;
  & > span {
      text-align: left;
      padding-bottom: 8px;
      cursor: pointer;
  }
`;
