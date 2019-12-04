new SimpleBar(document.getElementById("nav-home"), { autoHide: false });
new SimpleBar(document.getElementById("nav-profile"), { autoHide: false });
new SimpleBar(document.getElementById("nav-contact"), { autoHide: false });
new SimpleBar(document.getElementById("nav-contactos"), { autoHide: false });
$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});
document.getElementById("compra").addEventListener(
  "click",
  function() {
    fbq("track", "InitiateCheckout");
  },
  false
);

document.getElementById("compra2").addEventListener(
  "click",
  function() {
    fbq("track", "InitiateCheckout");
  },
  false
);
