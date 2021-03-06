## FrontEnd Coding Test Template

Tradir.io - ์์งํ

### ๐ฃ &nbsp; Instructions

ํ์ด๋ธ์ ๋ง๋ค ๋ ์ฌ์ฉํ  ๋งฅ์ฃผ ๋ฆฌ์คํธ๐ป API ์๋๋ค โก๏ธ &nbsp; https://api.punkapi.com/v2/beers

<br />

### ์ฌ์ฉ๋ผ์ด๋ธ๋ฌ๋ฆฌ

- react-router-dom
- axios
- styled-components, styled-reset
- material-table
- react-redux, redux-saga
- react-icons

<br />

### ํ์๊ธฐ๋ฅ

- [x] ์ ์ ๊ฐ ์ฒ์ ํ์ด์ง๋ฅผ ์ด์์ ๋ `/home`์ผ๋ก ๋์ฐฉ

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

- [x] ํํ์ด์ง์์ `/bearlist`๋ก ์ด๋
      : header์์ `/home`๊ณผ `/beerlist`๋ฅผ ์ด๋ํ  ์ ์๋๋ก ๊ตฌํ

- [x] material table library ์ฌ์ฉํ์ฌ ๋งฅ์ฃผ ๋ฆฌ์คํธ ํ์ด์ง ๋ง๋ค๊ธฐ

  - [x] ํ์ด๋ธ์ column Header๋ ๋๋๊ทธ๋ก ์์ ๋ณ๊ฒฝ
        => material-table ๊ธฐ๋ณธ ๊ธฐ๋ฅ
  - [x] ๋ฐ๋ ์์๋ redux์ ์ ์ฅ๋์ด `/home`์ `/bearlist`์์ ๋ชจ๋ ์ ์ง ๋์ด์ผ ํจ
        => `UPDATE_COLUMNS` ์ก์์ ์์ฑํ์ฌ redux์์ columns๋ฅผ ๊ด๋ฆฌํ๋๋ก ํจ

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
      title: "๋งฅ์ฃผ ๋ฆฌ์คํธ",
      columns,
      onColumnDragged: handleOrderChange,
      data: beerlist,
    };

    ```

- [x] ๋งฅ์ฃผ ์์ฝ ๋์(abv) ํํฐ ๊ธฐ๋ฅ ๋ง๋ค๊ธฐ

  - [x] ๋ค์ค ์ ํ ๊ฐ๋ฅ
  - [x] ํํฐ ๊ธฐ๋ฅ์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๊ฐ ์๋ ๊ฐ์ธ์ด ๊ตฌํ

  ```js
  // AbvFilter - filter UI ๊ตฌํ ๋ฐ ์ก์ ๋์คํจ์น
  ......
  const AbvFilter = () => {
    const dispatch = useDispatch();

    const filterStep = [
      { title: "5 ๋ฏธ๋ง", id: "abv1", range: [0, 5] },
      { title: "5 ์ด์ - 7 ๋ฏธ๋ง", id: "abv2", range: [5, 7] },
      { title: "7 ์ด์ - 9 ๋ฏธ๋ง", id: "abv3", range: [7, 9] },
      { title: "9 ์ด์ - 11 ๋ฏธ๋ง", id: "abv4", range: [9, 11] },
      { title: "11 ์ด์", id: "abv5", range: [11, Infinity] },
    ];

    const toggleFilter = (checked, range) => {
      if (checked) dispatch(plusFilter(range));
      else dispatch(minusFilter(range));
    };

    return (
      <FilterBox>
        {filterStep.map((step) => (
          <CheckContainer key={step.id}>
            <input
              type="checkbox"
              id={step.id}
              onChange={(e) => toggleFilter(e.target.checked, step.range)}
            />
            <FilterLabel htmlFor={step.id}>{step.title}</FilterLabel>
          </CheckContainer>
        ))}
      </FilterBox>
    );
  };
  ```

  ```js
  // BeerTable/index.js
  ......
  const [targetList, setTargetList] = useState(beerlist);

  // currentFilter๊ฐ ๋ณ๊ฒฝ๋  ๋๋ง๋ค ๋ ๋ํ  ๋ฆฌ์คํธ๋ฅผ ๋ณ๊ฒฝ
  useEffect(() => {
    if (currentFilter.length === 0) setTargetList(beerlist);
    else {
      const newList = beerlist.filter((beer) =>
        currentFilter.some(
          (range) => beer.abv >= range[0] && beer.abv < range[1]
        )
      );
      setTargetList(newList);
    }
  }, [currentFilter, beerlist]);
  ```

### ์ ํ๊ธฐ๋ฅ

- [x] ๋งฅ์ฃผ ์ด๋ฆ ํด๋ฆญ ์ ์์ธ ์ ๋ณด ๋ชจ๋ฌ ์ ์

  ```js
  // material-table column์ modalBtn์ ๋ฃ์ด์ค
    {
      title: "Beer",
      field: "name",
      render: (rowData) => <ModalBtn id={rowData.id}>{rowData.name}</ModalBtn>,
    },
  ```

  ```js
  // modalBtn.js
  ......
  const ModalBtn = ({ id, children }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
      dispatch(toggleModal());
      dispatch(setModalId(id));
    };

    return (
      <Btn type="button" onClick={handleClick}>
        {children}
      </Btn>
    );
  };
  ```

- [x] ์ฅ๋ฐ๊ตฌ๋ ๊ตฌํ
  - [x] ๋งฅ์ฃผ ์ฅ๋ฐ๊ตฌ๋ ์ถ๊ฐ, ์ญ์  ๊ฐ๋ฅ
  - [x] ์ฅ๋ฐ๊ตฌ๋๋ `/home`๊ณผ `/beerlist`์์ ์ ๊ทผ ๊ฐ๋ฅ
        => header์ ์ฅ๋ฐ๊ตฌ๋ ์์ด์ฝ์ ๋์ด `/home`๊ณผ `/beerlist`์์ ๋ชจ๋ ์ ๊ทผ ๊ฐ๋ฅํ๋๋ก ํจ

<br />

### TroubleShooting

- [x] material-table์ ๋ ๋ํ๋ฉด ์ฝ์์์ ์๋ฌ ๋ฐ์(Failed prop type)  
       => @material-ui/core์ @4.11.4๋ก ๋ค์ด๊ทธ๋ ์ด๋ํ์ฌ ํด๊ฒฐ

- [x] ๋ธ๋ผ์ฐ์ ๊ฐ ํ๋ฆฌ์ง๋๋ ๋ฌธ์  ๋ฐ์
      => "https://github.com/mbrn/material-table/issues/2451"์์ ์ง์์ ์ผ๋ก ๋ฐ์ํ๋ ๋ฌธ์ ์์ ์ ์ ์์๊ณ , material-table์ @1.67.0์ผ๋ก ๋ค์ด๊ทธ๋ ์ด๋ํ์ฌ ํด๊ฒฐ

### ๐ &nbsp; ํ๊ฐ ๊ธฐ์ค

- ๊ธฐ๋ฅ ์์ฑ๋(50%)
- ์ฝ๋ ๊ตฌ์ฑ(35%)
- UI ์์ฑ๋(15%)
