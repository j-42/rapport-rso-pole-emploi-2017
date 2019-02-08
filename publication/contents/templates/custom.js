(function (w) {


 window.addEventListener('webpub-init', function () {

    var pageNumber = 0;
    var Id = "";

NIApi.event.onPageChange(function () {
  function pageToId(){
    pageNumber = window.location.hash.substring(6);
    Id = "page-"+pageNumber;
    $('body').attr('id',Id);
  } pageToId();
});

 NIApi.common.resolveValues("${template}accueil.svg").then(function (url) {

      // label is mandatory!!
      w.Main.menuService.add("custom_btn1", {
        "icon": {
          "url": url
        },
        "label": "Accueil",
        "onclick": function () {
            var lightboxUrl = w.Utils.resolveVariable("${template}panneau");
            var parameters = "header/none";
            NIApi.lightbox.open(lightboxUrl, parameters); 
        }
      });

    });

 NIApi.common.resolveValues("${template}zen.svg").then(function (url) {

      // label is mandatory!!
      w.Main.menuService.add("custom_btn2", {
        "icon": {
          "url": url
        },
        "label": "Lecture Zen",
        "onclick": function () {
          var lightboxUrl = w.Utils.resolveVariable("${template}lectureZen")+"/#"+Id;
            var parameters = "header/none";
            NIApi.lightbox.open(lightboxUrl, parameters); 
        }
      });

    });


  });

})(webpublicationNamespace);