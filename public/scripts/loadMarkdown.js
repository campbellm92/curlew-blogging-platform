document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("file");
  if (postId) {
    try {
      const response = await fetch(`/posts/${postId}`);
      if (!response) {
        throw new Error("Failed to fetch post content");
      }
      const markdownContent = await response.text();
      document.querySelector(".main-content").innerHTML = markdownContent;
      document.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightBlock(block);
      });
    } catch (error) {
      console.log("Error loading post", error);
    }
  }
});
