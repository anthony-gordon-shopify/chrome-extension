$(document).ready(function() {
  var $tabs = $(".template-editor-tab-filename");
  var yas = "<span class='yas-container'></span>";
  $tabs.append(yas);
  $(document).click(function() {
    var $tabsInnnerContainer = $(".yas-container");
    var yasInner = "YAS";
    $tabsInnnerContainer.empty().append(yasInner);
  });
});
