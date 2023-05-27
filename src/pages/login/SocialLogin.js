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
      const clientId = '9983a0557e40f71ba784';
      const redirectUri = 'http://localhost:3000/callback';
      const scope = 'repo:status read:repo_hook user:email';
      const githubUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}`;
      window.location.href = githubUrl;
    };
    const fetchUserData = async (accessToken) => {
      try {
        const response = await axios.get('https://api.github.com/user', {
          headers: {
            Authorization: `Bearer ${accessToken}`, // 액세스 토큰을 Authorization 헤더에 포함시킴
          },
        });
        console.log('Response Data:', response.data);
    
        // 응답으로부터 사용자 정보를 추출하여 반환
        const { id, login, email, avatar_url } = response.data;
        return { id, login, email, avatarUrl: avatar_url };
      } catch (error) {
        // 에러 처리 로직 추가
        console.error('Failed to fetch user data:', error);
        throw error;
      }
    };
    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const authorizationCode = urlParams.get('code');
      if (authorizationCode) {
        console.log('Authorization Code:', authorizationCode);
        axios.post('/api/githublogin', { code: authorizationCode })
          .then((response) => {
            // 서버에서 처리한 로그인 데이터에 대한 응답을 받고 원하는 로직을 수행
    
            // 액세스 토큰을 응답 데이터에서 추출
            const accessToken = response.data.access_token;
            console.log('Access Token:', accessToken);
    
            // 액세스 토큰을 이용하여 깃허브 API에 사용자 정보 요청
            fetchUserData(accessToken)
              .then((userData) => {
                // 사용자 정보를 활용하여 로그인한 사용자를 식별하고 필요한 작업 수행
                const { id, login, email, avatarUrl } = userData;
                console.log('User ID:', id);
                // 사용자 정보를 상태로 저장하거나 특정 동작을 수행할 수 있음
              })
              .catch((error) => {
                // 사용자 정보 가져오기 실패 시 에러 처리 로직 추가
                console.error('Failed to fetch user data:', error);
              });
    
            // 메인 페이지로 리다이렉션
            window.location.href = 'http://localhost:3000';
          })
          .catch((error) => {
            // 로그인 처리 중에 에러가 발생한 경우 처리할 로직을 추가
            console.error('Login failed:', error);
          });
      }
    }, []);

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