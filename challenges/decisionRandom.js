const onDecision = () => {
    const optionsNum = app.options.length;
    const rand = Math.floor(Math.random() * optionsNum);
    const option = app.options[rand];
    alert(option);
  };