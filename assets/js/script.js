function showPage(pageId) {
  var pages = document.getElementsByClassName("page");
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }
  var pageElement = document.getElementById(pageId);
  if (pageElement) {
    pageElement.style.display = "block";
  }
}

// Exibir a primeira página por padrão
showPage('page1');