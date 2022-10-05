<body>
  <script>
    for (var i = 0; i < 10; i++) {
      let button = document.createElement("button");
      button.textContent = "button" + i;
      button.onclick = function () {
        console.log("clicked button" + i);
      };
      document.body.append(button);
    }
  </script>
</body>