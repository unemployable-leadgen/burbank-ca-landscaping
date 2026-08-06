// Mobile menu toggle
(function () {
  var toggle = document.getElementById('mobile-menu-toggle');
  var nav = document.getElementById('main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Quote form submission (Formspree via fetch, no redirect to their generic page)
(function () {
  var form = document.getElementById('quote-form');
  var status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.textContent = 'Sending...';
    status.style.color = '#2b2b26';

    var data = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    })
      .then(function (response) {
        if (response.ok) {
          status.textContent = "Thanks! We'll be in touch shortly.";
          status.style.color = '#2d4a34';
          form.reset();
        } else {
          status.textContent = 'Something went wrong. Please call us instead.';
          status.style.color = '#a3521f';
        }
      })
      .catch(function () {
        status.textContent = 'Something went wrong. Please call us instead.';
        status.style.color = '#a3521f';
      });
  });
})();
