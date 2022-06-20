import "./index.less";

function buildTextImage() {
  $("#cnblogs_post_body img").each(function (index, el) {
    let imgDesc = $(el).attr("desc");
    if ( imgDesc ) {
      $(el).after(`<p class="text-img-desc">${ imgDesc }</p>`);
    }
  });
}

export default buildTextImage;