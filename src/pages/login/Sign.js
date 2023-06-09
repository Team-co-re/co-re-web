import React,{useState} from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import {
  setUsername,
  setPassword,
  setConfirmPassword,
  setSkillLevel,
  setJobRole,
  setNickname,
  validateForm,
  signup,
} from "../../redux/slices/signSlice";
import LoginContainer from "./loginPage";

const FormContainer = styled.div`
  height: 300px;
  margin-left: 17px ;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const ScrollableContent = styled.div`
  padding: 10px;
  `;

const LoginButtonChat = styled.div`
  background-color: #f3e77f;
  position: relative;
  top: -10px;
  left: -6px;
  width: 260px;
  justify-content: left;
  margin-bottom: 4px;
  padding: 8px;
  border-radius: 20px;
  text-align: center;
`;  

const LoginButton = styled.div`
  button {
    margin-top: 3px;
    margin-bottom: 3px;
    cursor: pointer;
  }
`;

const FormId = styled.div`
  Label{
    position: relative;
    top: 12px;
    left: -6px;
    border-radius: 15px;
    border: none;
    padding: 8px;
    background-color: #fff065;
    color: #000000;
  }
  input{
    background-color: rgba(255, 242, 172, 0.7);
    width: 260px;
    height: 20px;
    position: relative;
    top: 28px;
    right: -70px;
    margin-bottom: 8px;
    margin-left: 200px;
    padding: 8px;
    border-radius: 20px;
    text-align: center;
    border: none;
    outline: none;
  }
`;

const FormPwd = styled.div`
  Label{
    position: relative;
    top: 40px;
    left: -6px;
    border-radius: 15px;
    border: none;
    padding: 8px;
    background-color: #fff065;
    color: #000000;
  }
  input{
    background-color: rgba(255, 242, 172, 0.7);
    width: 260px;
    position: relative;
    top: 75px;
    right: -70px;
    margin-bottom: 8px;
    margin-left: 200px;
    padding: 8px;
    border-radius: 20px;
    text-align: center;
    border: none;
    outline: none;
  }
`;

const FormPwd2 = styled.div`
  Label{
    position: relative;
    top: 80px;
    left: -6px;
    border-radius: 15px;
    border: none;
    padding: 8px;
    background-color: #fff065;
    color: #000000;
  }
  input{
    background-color: rgba(255, 242, 172, 0.7);
    width: 260px;
    position: relative;
    top: 115px;
    right: -70px;
    margin-bottom: 8px;
    margin-left: 200px;
    padding: 8px;
    border-radius: 20px;
    text-align: center;
    border: none;
    outline: none;
  }
`;

const FormSkill = styled.div`
  Label{
    position: relative;
    top: 130px;
    left: -6px;
    border-radius: 15px;
    border: none;
    padding: 8px;
    background-color: #fff065;
    color: #000000;
  }
  Select{
    background-color: rgba(255, 242, 172, 0.7);
    width: 260px;
    position: relative;
    top: 150px;
    right: -70px;
    margin-bottom: 8px;
    margin-left: 200px;
    padding: 8px;
    border-radius: 20px;
    text-align: center;
    border: none;
    outline: none;
  }
`;

const FormJob = styled.div`
  Label{
    position: relative;
    top: 180px;
    left: -6px;
    border-radius: 15px;
    border: none;
    padding: 8px;
    background-color: #fff065;
    color: #000000;
  }
  Select{
    background-color: rgba(255, 242, 172, 0.7);
    width: 260px;
    position: relative;
    top: 200px;
    right: -70px;
    margin-bottom: 8px;
    margin-left: 200px;
    padding: 8px;
    border-radius: 20px;
    text-align: center;
    border: none;
    outline: none;
  }
`;

const FormNickname = styled.div`
  Label{
    position: relative;
    top: 230px;
    left: -6px;
    border-radius: 15px;
    border: none;
    padding: 8px;
    background-color: #fff065;
    color: #000000;
  }
  input{
    background-color: rgba(255, 242, 172, 0.7);
    width: 260px;
    position: relative;
    top: 260px;
    right: -70px;
    margin-bottom: 8px;
    margin-left: 200px;
    padding: 8px;
    border-radius: 20px;
    text-align: center;
    border: none;
    outline: none;
  }
`;
const InputContainer = styled.div`
  background-color: white;
  display: flex;
  width: 600px;
  position: relative;
  top: 19px;
`;

const Input = styled.input`
  flex: 1;
  border-radius: 4px;
  border: none;
  padding: 8px;
  outline: none;
`;

const Button = styled.button`
  border-radius: 1px;
  border: none;
  padding: 8px;
  background-color: #fff065;
  color: #000000;
  cursor: pointer;
`;

const Label = styled.label`
`;

const Select = styled.select`
`;
const Option = styled.option`
`;
const IdErrorMessage = styled.div`
  color: red;
  font-size: 5px;
  width: 210px;
  position: relative;
  align-items: center;
  left: 300px;
  top: 25px;
`;


const Sign = () => {
  const dispatch = useDispatch();
  const {
    sign: {
      username,
      password,
      confirmPassword,
      skillLevel,
      jobRole,
      nickname,
      errorMessages,
    },
  } = useSelector((state) => state);

  // 각 폼에 대한 에러 메시지를 개별적으로 추출

  const [isSignupFormVisible] = useState(false);
  const [isSignupComplete, setIsSignupComplete] = useState(false);

  const handleUsernameChange = (e) => {
    dispatch(setUsername(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const handleConfirmPasswordChange = (e) => {
    dispatch(setConfirmPassword(e.target.value));
  };

  const handleSkillLevelChange = (e) => {
    dispatch(setSkillLevel(e.target.value));
  };

  const handleJobRoleChange = (e) => {
    dispatch(setJobRole(e.target.value));
  };

  const handleNicknameChange = (e) => {
    dispatch(setNickname(e.target.value));
  };

  const handleLoginClick = () => {};

  const handleSignupClick = () => {};

const handleButtonClick = async () => {
  await dispatch(validateForm());

  const errorFields = Object.keys(errorMessages);
  if (errorFields.length > 0) {
    const errorMessage = errorFields
      .map((field) => errorMessages[field])
      .join("\n");
    alert(errorMessage);
  } else {
    setIsSignupComplete(true);
  }
};

  return (
    <>
      <FormContainer>
        <ScrollableContent>
          {!isSignupFormVisible && (
            <LoginButtonChat>
              <LoginButton>
                <button onClick={handleLoginClick}>로그인</button> <br />
                <button>소셜 로그인</button> <br />
                <button onClick={handleSignupClick}>회원가입</button>
              </LoginButton>
            </LoginButtonChat>
          )}
          <FormId>
            <Label>사용할 아이디를 입력하세요.</Label>
            <Input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="아이디를 입력하세요"
            />
          </FormId>
          <FormPwd>
            <Label>사용할 비밀번호를 입력하세요. </Label>
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="비밀번호를 입력하세요"
            />
          </FormPwd>
          <FormPwd2>
            <Label>비밀번호를 확인하세요.</Label>
            <Input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="비밀번호를 확인하세요"
            />
          </FormPwd2>
          <FormSkill>
            <Label>개발수준을 선택하세요. </Label>
            <Select
              value={skillLevel}
              onChange={handleSkillLevelChange}
              placeholder="개발수준을 선택하세요"
            >
              <Option>개발수준 선택</Option>
              <Option value="beginner">Beginner</Option>
              <Option value="intermediate">Intermediate</Option>
              <Option value="advanced">Advanced</Option>
            </Select>
          </FormSkill>
          <FormJob>
            <Label>개발직군을 선택하세요</Label>
            <Select
              defaultValue="frontend"
              value={jobRole}
              onChange={handleJobRoleChange}
              placeholder="개발직군을 선택하세요"
            >
              <Option>개발직군 선택</Option>
              <Option value="frontend">Frontend</Option>
              <Option value="backend">Backend</Option>
              <Option value="android">Android</Option>
              <Option value="ios">iOS</Option>
              <Option value="cloud">Cloud</Option>
              <Option value="iot">IoT</Option>
              <Option value="ai">Artificial Intelligence</Option>
              <Option value="other">Other</Option>
            </Select>
          </FormJob>
          <FormNickname>
            <Label>사용할 닉네임을 작성해주세요.</Label>
            <Input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              placeholder="닉네임을 입력하세요"
            />
          </FormNickname>
        </ScrollableContent>
      </FormContainer>
      <InputContainer>
        <Input placeholder="위 내용을 전부 작성 후 전송을 눌러주세요." />
        <Button onClick={handleButtonClick}> 전송 </Button>
        {!isSignupFormVisible && isSignupComplete && <LoginContainer />}
      </InputContainer>
    </>
  );
};


export default Sign;