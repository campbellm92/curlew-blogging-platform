// async function loadMarkdown(selector, url) {
//   try {
//     const response = await fetch(url);
//     if (!response) {
//       throw new Error("Network not responding.");
//     }
//     const markdownContent = await response.text();
//     const htmlContent = marked(markdownContent);
//     document.querySelector(selector).innerHTML = htmlContent;
//   } catch (error) {
//     console.log("Error loading markdown", error);
//   }
// }

document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("file");
  if (postId) {
    const response = await fetch(`/posts/${postId}`);
    const markdownContent = await response.text();
    document.querySelector(".main-content").innerHTML = markdownContent;
  }
});
