[🏕️ 개인 프로젝트를 하면서 느낀점 - Velog](https://velog.io/@harry21/%EA%B0%9C%EC%9D%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A5%BC-%ED%95%98%EB%A9%B4%EC%84%9C-%EB%8A%90%EB%82%80%EC%A0%90)

## 컴포넌트

### Button.jsx

재사용될 여지가 있는 `button` 태그를 컴포넌트화 하였습니다.
`props` 로는 `value, onClick, disabled, color` 를 받습니다.
- `value` : 버튼 내 표시될 문자열입니다.
- `onClick` : 버튼을 클릭 시 실행될 함수입니다.
- `disabled` : 버튼의 비활성화 여부에 대한 `boolean` 값입니다.
- `color` : 버튼의 색에 대한 문자열입니다.

---

### Input.jsx

재사용될 여지가 있는 `input` 태그를 컴포넌트화 하였습니다.
`props` 로는 `value, placeholder, onChange, width` 를 받습니다.
- `value` : 인풋 내 표시될 문자열입니다.
- `placeholder` : 인풋 내 표시될 `placeholder` 의 문자열입니다.
- `onChange` : 인풋 내 `onChange` 이벤트가 발생될 시 실행될 함수입니다.
- `width` : 인풋의 `width`를 정해주는 숫자입니다. 기본값은 160 입니다.

---

### Header.jsx

여러 페이지에서 재사용될 여지가 있는 `header` 를 컴포넌트화 하였습니다.
`props` 로는 아무것도 받지 않습니다.

---

### TodoForm.jsx

todo를 입력하고 저장해놓은 뒤, list 내에 추가해주는 컴포넌트입니다.
`props` 로는 `setList` 를 받습니다.
- `setList` : `list` 를 `set` 해주는 함수입니다.

또한, 컴포넌트 내에는 `handleChangeTitle, handleChangeDetail, handleAddTodo` 함수가 존재합니다.
- `handleChangeTitle` : `todo` 내 `title` 을 변경해주는 함수입니다. 인자로는 변경할 문자열을 받습니다.
- `handleChangeDetail` : `todo` 내 `detail` 을 변경해주는 함수입니다. 인자로는 변경할 문자열을 받습니다.
- `handleAddTodo` : `props` 로 받아온 `setList` 를 활용해 `list` 에 새로운 `todo` 를 추가해주는 함수입니다. 인자로는 아무것도 받지 않습니다.

---

### ListSection.jsx

`ListBox` 를 보여주는 섹션의 컴포넌트입니다.
`props` 로는 `list, setList, workingList, doneList` 를 받습니다.
- `list` : `todo` 들이 담긴 배열입니다.
- `setList` : `list` 를 `set` 해주는 함수입니다.
- `workingList` : 진행중인 `todo` 를 보여주는 섹션인지에 대한 `boolean` 입니다.
- `doneList` : 완료된 `todo` 를 보여주는 섹션인지에 대한 `boolean` 입니다.

---

### ListBox.jsx

`list` 배열 내 요소들을 받아 UI로 보여주는 컴포넌트입니다.
`props` 로는 `todo, list, setList` 를 받습니다.
- `todo` : `todo` 객체입니다.
- `list` : `todo` 들이 담긴 배열입니다.
- `setList` : `list` 를 `set` 해주는 함수입니다.

또한, 컴포넌트 내에는 `handleDeleteTodo, handleChangeTodoStatus` 함수가 존재합니다.
- `handleDeleteTodo` : `list` 내 특정 `todo` 를 삭제하는 함수입니다. 인자로는 `todo` 의 `id` 를 받습니다.
- `handleChangeTodoStatus` : `list` 내 특정 `todo` 의 `isDone` 상태를 바꾸어주는 함수입니다. 인자로는 `todo` 의 `id` 를 받습니다.

