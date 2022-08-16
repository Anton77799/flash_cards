const btn = document.querySelector('.qestCont');

function alert(text) {
  const div = document.createElement('div');
  div.innerHTML += `<div>${text}</div>`;
  div.style.height = '50px';
  div.style.fontSize = '30px';
  div.style.color = 'white';

  if (text === 'Молодчага!') {
    div.style.backgroundColor = 'green';
  } else {
    div.style.backgroundColor = 'red';
  }
  btn.prepend(div);

  setTimeout(() => {
    div.remove(div);
  }, 3000);
}

btn.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.tagName === 'BUTTON') {
    console.log('КНОПКА=>', e.target.tagName);
    const { id } = e.target;
    const inp = document.getElementById(`${id}`);
    console.log(id);
    console.log(inp);
    const word = inp.value;
    console.log(word);
    const responce = await fetch('/question/:id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        answer: word,
      }),
    });
    const { answer } = await responce.json();
    if (answer === 'true') {
      alert('Молодчага!');
    } else {
      alert('Не унывай, попробуй ещё раз!');
    }
  }
});
