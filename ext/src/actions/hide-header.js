var $titleBar = $(".template-editor-titlebar");

$titleBar.animate(
  { height: "toggle" },
  {
    duration: 350,
    complete() {
      window.dispatchEvent(new Event("resize"));
    }
  }
);
