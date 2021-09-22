## FrontEnd Coding Test Template

Tradir.io - 안지현

### 📣 &nbsp; Instructions

테이블을 만들 때 사용할 맥주 리스트🍻 API 입니다 ➡️ &nbsp; https://api.punkapi.com/v2/beers

<br />

### 사용기술

- styled-components

<br />

### 필수기능

- [x] 유저가 처음 페이지를 열었을 때 `/home`으로 도착

```js
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
};
```

- [x] 홈페이지에서 `/bearlist`로 이동
      : header에서 `/home`과 `/beerlist`를 이동할 수 있도록 구현

- [x] material table library 사용하여 맥주 리스트 페이지 만들기

  - [x] 테이블의 column Header는 드래그로 순서 변경
        => material-table 기본 기능
  - [x] 바뀐 순서는 redux에 저장되어 `/home`와 `/bearlist`에서 모두 유지 되어야 함
        => `UPDATE_COLUMNS` 액션을 생성하여 redux에서 columns를 관리하도록 함

    ```js
    // BeearTable/index.js
    ......
    const handleOrderChange = (srcIdx, destIdx) => {
      const newColumns = columns.slice();
      const targetColumn = newColumns.splice(srcIdx, 1)[0];
      newColumns.splice(destIdx, 0, targetColumn);
      dispatch(updateColumns(newColumns));
    };

    const option = {
      icons: tableIcons,
      title: "맥주 리스트",
      columns,
      onColumnDragged: handleOrderChange,
      data: beerlist,
    };

    ```

- [ ] 맥주 알콜 도수(abv) 필터 기능 만들기
  - [ ] 다중 선택 가능
  - [ ] 필터 기능은 라이브러리가 아닌 개인이 구현

### 선택기능

- [ ] 맥주 이름 클릭 시 상세 정보 모달 제작
- [ ] 장바구니 구현
  - [ ] 맥주 장바구니 추가, 삭제 가능
  - [ ] 장바구니는 `/home`과 `/bearlist`에서 접근 가능

<br />

### TroubleShooting

- [x] material-table을 렌더하면 콘솔에서 에러 발생(Failed prop type)  
       => @material-ui/core을 @4.11.4로 다운그레이드하여 해결

- [x] 브라우저가 프리징되는 문제 발생
      => "https://github.com/mbrn/material-table/issues/2451"에서 지속적으로 발생하는 문제임을 알 수 있었고, material-table을 @1.67.0으로 다운그레이드하여 해결

### 📝 &nbsp; 평가 기준

- 기능 완성도(50%)
- 코드 구성(35%)
- UI 완성도(15%)
