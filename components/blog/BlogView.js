// BlogView.js
const BlogView = (state, actions) => {
  const loadBlogData = async () => {
    try {
      const response = await fetch("/data/blog.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      actions.setBlogData(data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  if (state.common.blogData.length === 0) {
    loadBlogData();
  }

  // Render the latest blog view
  return hyperapp.h("div", { class: "container blog-view my-4" }, [
    hyperapp.h("h1", { class: "text-center mb-4" }, "Latest Blog Posts"),
    hyperapp.h(
      "div",
      { class: "row" },
      state.common.blogData
        .slice(0, 8)
        .map((post, index) =>
          hyperapp.h("div", { class: "col-md-3 mb-4", key: index }, [
            hyperapp.h("div", { class: "card" }, [
              hyperapp.h("div", { class: "card-body" }, [
                hyperapp.h("h2", { class: "card-title" }, post.title),
                hyperapp.h("p", { class: "card-text" }, post.date),
                hyperapp.h("p", { class: "card-text" }, post.content),
              ]),
            ]),
          ])
        )
    ),
  ]);
};

export default BlogView;
