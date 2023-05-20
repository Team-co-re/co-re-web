import React,{useState,useEffect, useRef} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { setUsername, setPassword, setConfirmPassword, setSkillLevel, setJobRole, setNickname} from '../../redux/slices/signSlice';

const FormContainer = styled.div`
  height: 300px;
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

const FormId = styled.div`
  Label{
    position: relative;
    top: 160px;
    left: 20px;
    border-radius: 10px;
    border: none;
    padding: 8px;
    background-color: #fff065;
    color: #000000;
  }
  input{
    background-color: rgba(255, 242, 172, 0.7);
    width: 260px;
    position: relative;
    top: 200px;
    right: 20px;
    margin-bottom: 8px;
    margin-left: 200px;
    padding: 8px;
    border-radius: 10px;
    text-align: center;
    border: none;
    outline: none;
  }
`;

const FormPwd = styled.div`
  Label{
    position: relative;
    top: 260px;
    left: 20px;
    border-radius: 10px;
    border: none;
    padding: 8px;
    background-color: #fff065;
    color: #000000;
  }
  input{
    background-color: rgba(255, 242, 172, 0.7);
    width: 260px;
    position: relative;
    top: 300px;
    right: 20px;
    margin-bottom: 8px;
    margin-left: 200px;
    padding: 8px;
    border-radius: 10px;
    text-align: center;
    border: none;
    outline: none;
  }
`;

const FormPwd2 = styled.div`
  Label{
    position: relative;
    top: 360px;
    left: 20px;
    border-radius: 10px;
    border: none;
    padding: 8px;
    background-color: #fff065;
    color: #000000;
  }
  input{
    background-color: rgba(255, 242, 172, 0.7);
    width: 260px;
    position: relative;
    top: 400px;
    right: 20px;
    margin-bottom: 8px;
    margin-left: 200px;
    padding: 8px;
    border-radius: 10px;
    text-align: center;
    border: none;
    outline: none;
  }
`;

const FormSkill = styled.div`
  Label{
    position: relative;
    top: 460px;
    left: 20px;
    border-radius: 10px;
    border: none;
    padding: 8px;
    background-color: #fff065;
    color: #000000;
  }
  Select{
    background-color: rgba(255, 242, 172, 0.7);
    width: 260px;
    position: relative;
    top: 500px;
    right: 20px;
    margin-bottom: 8px;
    margin-left: 200px;
    padding: 8px;
    border-radius: 10px;
    text-align: center;
    border: none;
    outline: none;
  }
`;

const FormJob = styled.div`
  Label{
    position: relative;
    top: 560px;
    left: 20px;
    border-radius: 10px;
    border: none;
    padding: 8px;
    background-color: #fff065;
    color: #000000;
  }
  Select{
    background-color: rgba(255, 242, 172, 0.7);
    width: 260px;
    position: relative;
    top: 600px;
    right: 20px;
    margin-bottom: 8px;
    margin-left: 200px;
    padding: 8px;
    border-radius: 10px;
    text-align: center;
    border: none;
    outline: none;
  }
`;

const FormNickname = styled.div`
  Label{
    position: relative;
    top: 660px;
    left: 20px;
    border-radius: 10px;
    border: none;
    padding: 8px;
    background-color: #fff065;
    color: #000000;
  }
  input{
    background-color: rgba(255, 242, 172, 0.7);
    width: 260px;
    position: relative;
    top: 700px;
    right: 20px;
    margin-bottom: 8px;
    margin-left: 200px;
    padding: 8px;
    border-radius: 10px;
    text-align: center;
    border: none;
    outline: none;
  }
`;

const Label = styled.label`
`;
const Input = styled.input`
`;
const Select = styled.select`
`;
const Option = styled.option`
`;

const Sign = () => {
  const dispatch = useDispatch();
  const {
    messages,
    username,
    password,
    confirmPassword,
    isPasswordVisible,
    skillLevel,
    jobRole,
    nickname,
  } = useSelector((state) => state.login);

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

  return (
    <FormContainer>
      <ScrollableContent>
      <FormId>
        <Label>사용할 아이디를 입력하세요.</Label>
        <Input type="text" value={username} onChange={handleUsernameChange} placeholder='아이디를 입력하세요' />
      </FormId>
      <FormPwd>
        <Label>사용할 비밀번호를 입력하세요. </Label>
        <Input type="password" value={password} onChange={handlePasswordChange} placeholder='비밀번호를 입력하세요'/>
      </FormPwd>
      <FormPwd2>
        <Label>비밀번호를 확인하세요.</Label>
        <Input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder='비밀번호를 확인하세요'/>
      </FormPwd2>
      <FormSkill>
        <Label>개발수준을 선택하세요. </Label>
        <Select value={skillLevel} onChange={handleSkillLevelChange} placeholder='개발수준을 선택하세요'>
          <Option value="beginner">Beginner</Option>
          <Option value="intermediate">Intermediate</Option>
          <Option value="advanced">Advanced</Option>
        </Select>
      </FormSkill>
      <FormJob>
        <Label>개발직군을 선택하세요</Label>
        <Select value={jobRole} onChange={handleJobRoleChange} placeholder='개발직군을 선택하세요'>
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
        <Input type="text" value={nickname} onChange={handleNicknameChange} placeholder='닉네임을 입력하세요'/>
      </FormNickname>
      </ScrollableContent>
    </FormContainer>
  );
};

export default Sign;