<p align="center">
  <h3 align="center">📌✨solved.ac-box</h3>
  <p align="center">
    <img width="462" height="183" alt="Image" src="https://github.com/user-attachments/assets/efe2bd1e-d0c4-43be-901a-1b7583f42b7b" />
  </p>
  <p align="center">브론즈부터 마스터까지 👑, 당신의 solved.ac 티어를 한눈에</p>
</p>

<p align="center">
   <img src="https://img.shields.io/badge/language-typescript-blue?style"/>
   <img src="https://img.shields.io/github/license/mingyeongho/solved.ac-box"/>
   <img src="https://img.shields.io/badge/node-%3E%3D20-brightgreen"/>
</p>

---

## Overview

이 프로젝트는 solved.ac api를 사용하여 유저 정보를 가져오고, rest.js를 통해 GitHub Gist에 다음 정보를 업데이트합니다:

- 🏷️ 자기소개 (Bio)
- 📈 현재 티어 및 레이팅
- ✅ 해결한 문제 수 및 순위

매일 자정 데이터를 업데이트하며, 수동 업데이트를 할 수 있습니다.

## Setup

### Prep work

1. Github Public Gist를 만들어주세요. (https://gist.github.com/)

   > Gist description은 비워주세요!
   > 
   > Contents에는 아무 내용이나 적어주세요! (.만 찍어도 가능)

2. `gist` 스코프만을 가지는 토큰을 만들고 복사해주세요. (https://github.com/settings/tokens/new)

   > 유효 기간은 `No expiration`을 체크해주세요.

### Project setup

1. 이 저장소를 Fork 해주세요.

2. **Setting > Secrets and variables > Actions**에서 Secrets을 만들어주세요.
   | Type | Name | Description |
   |------|------|-------------|
   | Repository Secrets | **GH_TOKEN** | Prep work, 2단계에서 생성한 토큰 |
   | Repository Secrets | **GIST_ID** | Prep work, 1단계에서 생성한 Gist의 ID (Gist URL의 영숫자 부분) |
   | Repository Secrets | **USERNAME** | solved.ac의 유저 ID |

다음과 같이 작성해주세요.

<img width="819" height="290" alt="Image" src="https://github.com/user-attachments/assets/2f903c37-3975-4e13-aed7-095c51a93e21" />

3. Fork된 저장소의 **Actions** 탭으로 가서 `I understand my workflows, go ahead and enable them`버튼을 눌러주세요.

4. 최초 한 번 `Update Gist`를 실행시켜 주세요.

  > 1. <img width="336" height="348" alt="Image" src="https://github.com/user-attachments/assets/6fd13406-8ec6-4f99-9917-a2b53088a187" />
  >
  > 2. <img width="1356" height="151" alt="Image" src="https://github.com/user-attachments/assets/d54ce740-a9e0-4030-901d-94f3507c179c" />
  >
  > 3. <img width="388" height="243" alt="Image" src="https://github.com/user-attachments/assets/419e98f3-dc6b-4c48-ae00-763319715ae3" />

5. **Github Profile**에서 `Customize your pins`를 눌러 생성된 Gist를 고정해주세요.

## How to run the workflow manually

1. Fork된 저장소의 **Actions** 탭으로 가세요.
2. **Update Gist** workflow를 선택해주세요.
3. **Run workflow**를 눌러 실행시켜주세요.

## License

MIT
