const display_c = () => {
  const refresh = 1000; // refresh
  mytime = setTimeout('display_ct()', refresh)
}

const display_ct = () => {
  const x = new Date()
  let y = x.toString().split(' ');
  let weekday = y[0];
  let month = y[1];
  let monthday = y[2];
  let year = y[3];
  let time = y[4];
  //convert time to 12h if necessary
  time = time.split(':');
  if (Number(time[0]) > 12) {
    time[0] = "0" + (Number(time[0]) - 12).toString();
  }
  time = time.join(':')


  document.getElementById('ct').innerHTML = `${weekday}, ${month}  ${monthday}, ${year} ${time}`;
  display_c();
}

