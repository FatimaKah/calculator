const renderKeys = () => {
  const arr = [
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    ',',
    '=',
  ];
  const keysContainer = document.getElementsByClassName('keys-container')[0];
  arr.forEach(val => {
    const div = document.createElement('div');
    div.innerText = val;
    if (
      val === '÷' ||
      val === 'x' ||
      val === '-' ||
      val === '+' ||
      val === '='
    ) {
      div.className = 'key operator';
    } else if (val === '0') {
      div.className = 'key zero';
    } else {
      div.className = 'key';
    }

    keysContainer.append(div);
  });
};

renderKeys();
