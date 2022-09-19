// 責務とは責任と義務
// 果たさなければならな務めのこと
// 長くて見通しが悪い。
// Viewを作る処理が手続的で長い。
// 命令型プログラミングとは、結果を得るためのhowを書くプログラミングスタイル。一見しただけでは何をしたいのか瞬時に理解できない。どのように結果を得ているのかをずらずら書いてる。
// 今回は使っていないが、もし関数でやる場合、関数の責務がちゃんと一つになっているかを気をつける
// ToDoのデータとUIが密結合(簡単に離せない)しているので、データに対して何か変更を加えるのが簡単にはできない。
// ToDoのデータを更新するには、UIも更新しないといけない。
document.addEventListener("DOMContentLoaded", () => {
  const registerButton = document.getElementById("register");
  registerButton.addEventListener("click", () => {
    const input = document.getElementById("input-form");
    const inputContent = document.getElementById("input-form").value;
    if (inputContent.length > 0) {
      const contentList = document.getElementById("content-list");
      const id = contentList.childElementCount;

      const div = document.createElement("div");
      div.className = "content";

      const label = document.createElement("label");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `${id}`;

      const span = document.createElement("span");
      span.className = "check-span";
      span.textContent = `${inputContent}`;

      const button = document.createElement("button");
      button.type = "button";
      button.className = "delete-button";
      button.id = `${id}`;
      button.textContent = "削除";

      label.appendChild(checkbox);
      label.appendChild(span);
      div.appendChild(label);
      div.appendChild(button);
      contentList.appendChild(div);
      input.value = "";
    } else {
      alert("テキストを1文字以上入力してください。");
    }
  });

  // 親要素に設定したハンドラで子で発生したイベントを処理することができる。
  // Event Delegationと呼ぶ。
  // 親要素が静的で動的な子要素に対してイベントを設定したい時に使える。
  const contentList = document.getElementById("content-list");
  contentList.addEventListener("click", (e) => {
    const tagName = e.target.tagName;
    switch (tagName) {
      case "BUTTON":
        contentList.removeChild(e.target.parentNode);
        break;
      case "INPUT":
        const span = e.target.nextElementSibling;
        if (e.target.checked) {
          span.style.textDecoration = "line-through";
        } else {
          span.style.textDecoration = "none";
        }
        break;
      default:
        break;
    }
  });
});
