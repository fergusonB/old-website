<script>
  //weather

  onMount(() => {
    !(function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = "https://weatherwidget.io/js/widget.min.js";
        fjs.parentNode.insertBefore(js, fjs);
      }
    })(document, "script", "weatherwidget-io-js");
  });

  //time
  import { onMount } from "svelte";
  let time = new Date();
  let dayconvert = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
  };
  let day = dayconvert[time.getDay()];
  $: formattedTime = `${day}, ${time.getMonth() + 1}/${time.getDate()}, ${
    time.getHours() > 12 ? time.getHours() - 12 : time.getHours()
  }:${time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}`;

  onMount(() => {
    const interval = setInterval(() => {
      time = new Date();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  });
  //endtime
</script>

<style>
  .parent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .div1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .div2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .div3 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .div4 {
    grid-area: 2 / 2 / 3 / 3;
  }

  span {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 10000;
    background: black;
  }
  .text {
    color: white;
  }
</style>

<span>

  <div class="text">
    <div class="parent">
      <div class="div1">
        <h1
          style=" display: flex; justify-content: center; align-items: center;
          padding-top:100px; font-size:2em;">
          {formattedTime}
        </h1>
      </div>
      <div class="div2">
        <a
          class="weatherwidget-io"
          href="https://forecast7.com/en/33d84n117d61/92882/?unit=us"
          data-label_1="CORONA"
          data-theme="dark">
          CORONA
        </a>
      </div>
      <div class="div3" />
      <div class="div4" />
    </div>
  </div>

</span>
