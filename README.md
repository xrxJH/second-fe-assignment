# second-fe-assignment
두번째 프론트엔드 직무 과제 [반장창고]    
실행
```
npm i
npm run server
npm start
```
## 목차
[기능구현](#기능구현)   
  - [필수요구사항](#필수요구사항)
  - [추가구현](#추가구현)
    
[트러블슈팅](#트러블슈팅)   
[폴더구조](#폴더구조)   

## 데모
![데모gif](https://github.com/xrxJH/second-fe-assignment/assets/157004345/505294f7-90f3-4e05-b0df-bd25dafbcf98)


https://github.com/xrxJH/second-fe-assignment/assets/157004345/7cfcc5c4-c8aa-4595-9ebd-fa2870e98b6e


## 기능구현
### 필수요구사항
#### 라우트
- '주문하러 가기' 버튼을 클릭하면 /order 페이지로 이동합니다.
- /order 페이지의 헤더 로고를 클릭하면 '/' 페이지로 이동합니다.

#### 데이터 페치
- 로딩상태를 표시하기 위해 1초의 지연시간을 설정했습니다.
- useRecoilValueLoadable()를 활용하여 비동기 처리상태를 제공받아 loading상태를 처리합니다.

#### 아이템 카운터
- 1~999개까지 카운트를 조작할 수 있고 범위를 벗어난 카운트로는 버튼이 disabled되어 조작할 수 없습니다.
- 카운트의 변경에 따라 총합과 총계가 변경됩니다.

#### 주문하기
- 로딩상태를 표시하기 위해 3초의 지연시간을 설정했습니다.
- 3초뒤 주문 완료 페이지(/complete, /error)로 이동합니다.

#### 주문완료
- 로딩상태를 표시하기 위해 3초의 지연시간을 설정했습니다.
- 3초뒤 /order로 이동합니다.


### 추가구현
#### [페이지 접근 제한](https://github.com/xrxJH/second-fe-assignment/blob/main/src/hooks/useCheckFrom.ts)
- 주문 완료 페이지는(/complete, /error) 특정조건하에 접근이 가능해야한다고 판단했습니다.
- 과제에서는 /order페이지를 거쳐야만 진입이 가능하도록 구현했습니다.
- useNavigate()로 페이지 이동시 상태를 전달하고 useLocation()을 통해 이전페이지의 상태를 판단하여 /order페이지를 거치지 않은 접근을 제한하고, 잘못된 접근시 '/' 홈 경로로 이동합니다.

#### [주문 처리시 페이지 이탈 방지](https://github.com/xrxJH/second-fe-assignment/blob/main/src/components/pages/order/Panel.tsx#L25)
- 실제 서비스라고 가정했을 때, 주문 처리는 민감한 로직이 trigger되는 분기라고 판단했습니다.
- 사용자에게 선택권을 제시하여 만약 실수로 인한 이탈이라면 주문을 취소되거나 페이지를 이탈하지 않고 다시 주문 프로세스를 이어나갈 수 있도록 구현했습니다.
- useBlocker() 를 통해 특정 조건에 부합하지 않을 때 모달을 띄워 사용자에게 주문 처리 프로세스의 진행을 선택할 수 있도록 했습니다.

## 트러블슈팅
#### 리코일 상태 초기화
배경: useResetRecoilState()를 통해 상태 초기화가 안되는 버그 
해결: Recoil은 Recoil Root가 mount, unmount시에 초기화 된다는 것을 알게 되었고 주어진 시간과 간단한 앱이라는 점을 고려, Context API로 App전체를 감싼 상태를 만들어 제어했습니다.
주문 처리 완료시, 혹은 사용자가 주문을 취소할 때 상태를 변경하여 atom들을 초기화합니다. 

## 기술스택
- `React`, `TypeScript`, `Styled-Components`, `Recoil`, `React Context API`

## 폴더구조
```
📦src
 ┣ 📂assets
 ┃ ┣ 📜CheckFilled.svg
 ┃ ┣ 📜logo-L.svg
 ┃ ┗ 📜logo-S.svg
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜AutoNavigate.tsx
 ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┗ 📜Modal.tsx
 ┃ ┗ 📂pages
 ┃ ┃ ┗ 📂order
 ┃ ┃ ┃ ┣ 📂product
 ┃ ┃ ┃ ┃ ┣ 📜ProductItem.tsx
 ┃ ┃ ┃ ┃ ┗ 📜ProductList.tsx
 ┃ ┃ ┃ ┣ 📜Chip.tsx
 ┃ ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┃ ┣ 📜ItemCounter.tsx
 ┃ ┃ ┃ ┣ 📜OrderLayout.tsx
 ┃ ┃ ┃ ┗ 📜Panel.tsx
 ┣ 📂constants
 ┃ ┣ 📜endpoint.ts
 ┃ ┗ 📜path.ts
 ┣ 📂context
 ┃ ┗ 📜resetRecoilContext.ts
 ┣ 📂db
 ┃ ┗ 📜db.json
 ┣ 📂hooks
 ┃ ┣ 📜useCheckFrom.ts
 ┃ ┣ 📜useModal.ts
 ┃ ┣ 📜useSetTimeout.ts
 ┃ ┗ 📜useTriggerOrder.ts
 ┣ 📂pages
 ┃ ┣ 📜Complete.tsx
 ┃ ┣ 📜Error.tsx
 ┃ ┣ 📜Home.tsx
 ┃ ┣ 📜Layout.tsx
 ┃ ┣ 📜Loading.tsx
 ┃ ┗ 📜Order.tsx
 ┣ 📂recoil
 ┃ ┣ 📂counter
 ┃ ┃ ┣ 📜atom.ts
 ┃ ┃ ┗ 📜counter.ts
 ┃ ┣ 📂item
 ┃ ┃ ┣ 📜atom.ts
 ┃ ┃ ┗ 📜useGetItems.ts
 ┃ ┗ 📂price
 ┃ ┃ ┣ 📜atom.ts
 ┃ ┃ ┗ 📜price.ts
 ┣ 📂routes
 ┃ ┗ 📜router.tsx
 ┣ 📂service
 ┃ ┣ 📂item
 ┃ ┃ ┗ 📜item.ts
 ┃ ┗ 📜fetcher.ts
 ┣ 📂styles
 ┃ ┣ 📜customStyles.ts
 ┃ ┣ 📜designSystem.ts
 ┃ ┗ 📜globalStyles.ts
 ┣ 📂types
 ┃ ┣ 📜item.d.ts
 ┃ ┗ 📜theme.d.ts
 ┣ 📂utils
 ┃ ┣ 📜formatPrice.ts
 ┃ ┗ 📜randomizeOrderResult.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```

## 회고
좋았던 점
- 사용자의 행동을 고려하여 추가 구현사항을 구현한 데에 뿌듯하다.
- 기존 프로젝트에서 사용해보지 못했던 useBlocker를 써서 페이지 이탈을 방지하는 로직 구현이 흥미로웠다.

아쉬웠던 점
- 개인적인 일정이 촉박하여 더 완성도 있는 코드로 마무리하지 못해 아쉽다.
- 일정관리를 제대로 하지 못한 채 진행한 추가 구현사항은 욕심이 될 수 있다는 것을 느꼈고 스스로의 개발 속도를 파악하여 개발일정을 관리해야겠다고 다짐했다.



