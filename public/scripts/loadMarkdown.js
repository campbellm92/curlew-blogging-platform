document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("file");
  if (postId) {
    const response = await fetch(`/posts/${postId}`);
    const markdownContent = await response.text();
    document.querySelector(".main-content").innerHTML = markdownContent;
  }
});
