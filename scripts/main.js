// Ensure jQuery is available and the document is ready before running handlers
function isMobile() {
    return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
}
(function ensurejQueryAndReady(run) {
       function runWithjQuery() {
              if (typeof jQuery !== 'undefined') {
                     jQuery(function($) {
                            try { run($); } catch (e) { console.error(e); }
                     });
                     return;
              }

              var s = document.createElement('script');
              s.src = 'https://code.jquery.com/jquery-3.7.1.min.js';
              s.crossOrigin = 'anonymous';
              s.onload = function() {
                     jQuery(function($) {
                            try { run($); } catch (e) { console.error(e); }
                     });
              };
              s.onerror = function() { console.error('Failed to load jQuery from CDN'); };
              document.head.appendChild(s);
       }

       if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', runWithjQuery);
       } else {
              runWithjQuery();
       }
})(function($) {
    $('select, input, textarea').attr('autocomplete', 'off');
    $('input[type="search"]').attr('autocomplete', 'on');
    $('input[type="search"]').attr('autocorrect', 'off');
    $('input[type="search"]').attr('autocapitalize', 'off');
    $('select.jqui-selection').selectmenu({});
    // small helpers
    $('#year-full').text(new Date().getFullYear());
    // optional: example jQuery hook
    $('#dummyAction').on('click', function(){ alert('Action clicked'); });
});