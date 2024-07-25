async function loadMarkdown(selector, url) {
  try {
    const response = await fetch(url);
    if (!response) {
      throw new Error("Network not responding.");
    }
    const markdownContent = await response.text();
    const htmlContent = marked(markdownContent);
    document.querySelector(selector).innerHTML = htmlContent;
  } catch (error) {
    console.log("Error loading markdown", error);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const postId = new URLSearchParams(window.location.search).get("post");
  await loadMarkdown(".main-content", `/post/${postId}`);
});
