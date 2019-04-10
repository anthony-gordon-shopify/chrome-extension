var $sideBar = $("#AppFrameNav");
var $mainFrame = $("#AppFrameMain");
var $topBar = $(".ui-empty-state");

$topBar.toggleClass("pink-background-color");

$sideBar.animate(
  { width: "toggle" },
  {
    duration: 350,
    complete() {
      window.dispatchEvent(new Event("resize"));
    }
  }
);

$mainFrame.toggleClass("shopify-tools-full-width");
