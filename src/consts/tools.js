/**
 * 当前页面是否为博文内容页。
 */
export function isPostPage() {
  return $("#topics").length > 0;
}

/**
 * 显示左侧边栏。
 */
export function showSidebar() {
  $(".forFlow").css({ marginLeft: "260px" });
  $("#sideBar").show();
}

/**
 * 删除原生元素
 */
export function clearElement() {
  $(".post .postTitle .cnblogs-toc-button").remove();
}
