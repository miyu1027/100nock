70-79

# 70. Reactプロジェクトの作成

npx create-react-appコマンドを用い，新規Reactプロジェクトを作成せよ．
起動後，初期画面が表示されることを確認すること

※なんか小さい警告がでました。最近の推奨ではないらしいです。

ターミナルでの挙動

<img width="1054" height="1001" alt="image" src="https://github.com/user-attachments/assets/2a7b7a07-9906-46bf-aef0-5fc9f42daf3c" />

<img width="1053" height="613" alt="image" src="https://github.com/user-attachments/assets/51e3f63e-f35e-49b6-a6aa-cb1bb9aa7319" />

↑ここまででプロジェクト作成完了

ここから初期画面表示へ

<img width="1083" height="734" alt="image" src="https://github.com/user-attachments/assets/67740a86-fdd2-4d1a-8475-f4043f9522fd" />


初期画面

<img width="1919" height="1073" alt="image" src="https://github.com/user-attachments/assets/76460564-f49c-4e95-9468-26c8c0765372" />


# 71. 最初のコンポーネントの作成

自己紹介を表示するReact関数コンポーネント（例：<Profile />）を作成し，Appに組み込んで表示せよ．

結果スクショ

<img width="1896" height="412" alt="image" src="https://github.com/user-attachments/assets/71e6cf7c-2a16-45e0-964a-272a9c287fc9" />


```
#Profile.js

function Profile() {
    return (
        <div>
            <h2>自己紹介</h2>
            <p>名前：小池 美優</p>
            <p>学部：芸術工学部</p>
            <p>趣味：音楽鑑賞</p>
        </div>
    );
}

export default Profile;
```

```
#App.js

import Profile from "./Profile";
import './App.css';

function App() {
  return (
    <div className="App">
      <Profile />
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
```


# 72. propsを用いたデータ受け渡し
親コンポーネントから子コンポーネントへpropsでデータ（例：名前や年齢）を渡し，表示する機能を実装せよ．

```
#Profile.js
function Profile(props) {
    return (
        <div>
            <h2>自己紹介</h2>
            <p>名前：{props.name}</p>
            <p>年齢：{props.age}歳</p>
            <p>学部：{props.faculty}学部</p>

        </div>
    );
}

export default Profile;
```

```
#App.js
import Profile from "./Profile";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App</h1>

        <Profile name="小池 美優" age={22} faculty="芸術工" />
        <Profile name="佐藤 太郎" age={20} faculty="工" />

      </header>
    </div>
  );
}

export default App;
```

実行結果
<img width="1919" height="1065" alt="image" src="https://github.com/user-attachments/assets/7cd3047e-de11-4f04-a4cb-54f6e8eea36c" />


# 73. useStateによる状態管理
useStateフックを利用し，ボタン押下で値が増減するカウンターコンポーネントを作成せよ．

```
#Counter.js
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>カウンター</h2>
            <p>{count}</p>

            <button onClick={() => setCount(count + 1)}>＋</button>
            <button onClick={() => setCount(count - 1)}>−</button>
        </div>
    );
}

export default Counter;
```

```
#App.js
import Counter from "./Counter";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App</h1>

        <Counter />

      </header>
    </div>
  );
}

export default App;
```

実行結果
<img width="1919" height="1063" alt="image" src="https://github.com/user-attachments/assets/70b43e5d-c155-4458-8da9-26f649cab89b" />

# 74. リストの動的描画
配列データ（例：TODOリストや果物リスト）をmapで繰り返し描画し，リスト表示するコンポーネントを作成せよ．

ToDoList.js
```
function TodoList() {
    const todos = [
        { id: 1, text: "卒業研究の設計修正" },
        { id: 2, text: "参考論文整理" },
        { id: 3, text: "ただひたすら卒論を書く" }
    ];

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    );
}

export default TodoList;
```

App.js
```
import TodoList from "./ToDoList";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App</h1>

        <TodoList />

      </header>
    </div>
  );
}

export default App;
```

結果
<img width="1919" height="1076" alt="image" src="https://github.com/user-attachments/assets/1cc18062-68fa-4a8e-a113-177e3653aa56" />

# 75. フォーム入力とイベント処理
テキストボックスに入力した内容をuseStateで管理し，ボタン押下時にリストへ追加する機能を実装せよ．

ToDoForm.js
```
import { useState } from "react";

function ToDoForm() {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);

    const addToDo = () => {
        if (text === "") return;

        setTodos([...todos, text]);
        setText("");
    };

    return (
        <div>
            <h2>ToDoリスト</h2>

            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button onClick={addToDo}>追加</button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoForm;
```

App.js
```
import ToDoForm from "./ToDoForm";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App</h1>

        <ToDoForm />

      </header>
    </div>
  );
}

export default App;
```

結果
<img width="1919" height="1058" alt="image" src="https://github.com/user-attachments/assets/9b745dcb-500c-4dce-b4de-42bf2accc8cb" />


# 76. useEffectによる副作用処理
useEffectフックを利用し，コンポーネントのマウント時や状態変更時にコンソール出力やAPIデータ取得を行う処理を実装せよ．

Counter.js (問題73で作ったものを改造し、数値を変えた時にコンソール出力するようにした)
```
import { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("countが変わりました:", count);
    }, [count]);

    return (
        <div>
            <h2>カウンター</h2>
            <p>{count}</p>

            <button onClick={() => setCount(count + 1)}>＋</button>
            <button onClick={() => setCount(count - 1)}>−</button>
        </div>
    );
}

export default Counter;
```
App.jsも問題73と同じ

動作確認(ブラウザ実行画面を右クリック→検証→コンソールからコンソールログを確認)
<img width="1655" height="139" alt="image" src="https://github.com/user-attachments/assets/9bcd03ef-f9f4-49d1-a8b1-583dd0792b3a" />

# 77. 複数コンポーネントの分割・再利用
ヘッダー・フッター・メイン等，複数のコンポーネントを作成し，1つのページとして組み合わせて表示せよ．
