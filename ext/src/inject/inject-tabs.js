$(document).ready(function() {
  console.log("working on load");
  $(document).click(function() {
    var $tabs = $(".template-editor-tab-filename");
    var $yas = "<span class='yas-container'></span>";
    var $yasContainer = $(".yas-container");
    $yasContainer.remove();
    $tabs.append($yas);
  });
  $(document).click(function() {
    var $tabsInnnerContainer = $(".yas-container");
    var yasInner = "YAS";
    $tabsInnnerContainer.empty().append(yasInner);
    console.log("working on click");
  });
});
