import styled from "styled-components";
import React, { useEffect } from "react";
import axios from "axios";
import kakaotalkLogo from '../../assets/imgs/KakaoTalklogo.png';
import GithubLogo from "../../assets/imgs/githublogo.png"
import GoogleLogo from "../../assets/imgs/googlelogo.png"


    const SocialForm = styled.div`
      width: 260px;
      height: 50px;
      position: absolute;
      top: 130px;
      left: 1px;
      border-radius: 15px;
      border: none;
      padding: 8px;
      background-color: #fff065;
      color: #000000;
    `;
    const SocialButton = styled.button`
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: none;
      background-color: transparent;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      margin-right: 10px;
    `;





const SocialLogin = () => {

    const KakaoRestApi = '0cd9825c6e8b81e3336994d067f932e1';
    const KakaoRedirectUri = 'http://localhost:3000/auth'
    const KakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KakaoRestApi}&redirect_uri=${KakaoRedirectUri}&response_type=code`;

    const handleKakaoLoginClick = () => {
          window.location.href = KakaoUrl;
    };
    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const authorizationCode = urlParams.get("code");
      if (authorizationCode) {
        // 서버로 인증 코드 전송
        axios.post("/api/kakaologin", { code: authorizationCode })
          .then((response) => {
            // 서버에서 처리한 로그인 데이터에 대한 응답을 받고 원하는 로직을 수행한다.
            // 메인 페이지로 리디렉션 (근데 왜 안되는거징)
            window.location.href = "http://localhost:3000";
          })
          .catch((error) => {
            // 로그인 처리 중에 에러가 발생한 경우 처리할 로직을 추가!
          });
      }
    }, []);

    const handleGighubLoginClick = () => {
         const githubUri = `https://github.com/login/oauth/authorize?client_id=9983a0557e40f71ba784&scope=repo:status read:repo_hook user:email&redirect_uri=http://localhost:3000/callback`;
    window.location.href = githubUri;
    }


    return (
      <SocialForm>
        <SocialButton
          style={{ backgroundImage: `url(${kakaotalkLogo})` }}
          onClick={handleKakaoLoginClick}
        ></SocialButton>
        <SocialButton
          style={{ backgroundImage: `url(${GithubLogo})` }}
          onClick={handleGighubLoginClick}
        ></SocialButton>
        <SocialButton
          style={{ backgroundImage: `url(${GoogleLogo})` }}
          onClick={() => {}}
        ></SocialButton>
      </SocialForm>
    );
}

export default SocialLogin;