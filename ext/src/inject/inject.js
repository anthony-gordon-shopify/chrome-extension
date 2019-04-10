$(document).ready(function() {
  var innerDiv =
    '<button id="coolButton">Tabs clicked on: <span class="number">0</span>, lines: <span class="lines">0</span></button>';
  var arrayOfClicks = [];
  $(".template-editor-tab").click(function() {
    arrayOfClicks.push("elephant");
  });
  $(".template-editor-tab").click(function() {
    $(".number")
      .empty()
      .append(arrayOfClicks.length);
  });
  $(".template-editor-tab").click(function() {
    var $containerElement = $(".CodeMirror-gutters");
    var $smallContainerElement = $(".CodeMirror-lines div");
    var $containerElementHeight = $containerElement.height();
    var $smallContainerElementHeight = $smallContainerElement.height();
    var $linesOfCode = ($containerElementHeight - 74) / 14;
    var $linesOfCodeSmall = $smallContainerElementHeight / 14;

    if ($containerElementHeight > 258) {
      $(".lines")
        .empty()
        .append($linesOfCode);
    } else {
      $(".lines")
        .empty()
        .append($linesOfCodeSmall);
    }
  });
  var $topBarBackground = $(".template-editor-titlebar");
  var $topBarActions = $(".template-editor-titlebar__actions");
  $topBarActions.append(innerDiv);
});