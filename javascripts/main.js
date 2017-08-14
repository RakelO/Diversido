var aside = document.querySelector('.aside');
var showDashboards = document.querySelector('.js-show-dashboards');

document.addEventListener('click', function(e){
  if (e.target.classList.contains('js-toggle')){
    aside.classList.toggle('expanded');
  }
});

showDashboards.addEventListener('click', function() {
  showDashboards.classList.toggle('active');
});