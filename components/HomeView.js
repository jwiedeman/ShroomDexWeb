const HomeView = (state, actions) => {
  const heroImageUrl =
    "https://images.pexels.com/photos/1643402/pexels-photo-1643402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"; // Replace with your image URL

  return hyperapp.h("div", { class: "container home-view" }, [
    // Hero section with image as background and introductory text
    hyperapp.h(
      "section",
      {
        class: "row hero py-5",
        style: {
          backgroundImage: `url(${heroImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          position: "relative",
          height: "30vh",
        },
      },
      [
        hyperapp.h("div", {
          class: "col-md-12 hero-haze",
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          },
        }),
        hyperapp.h(
          "div",
          {
            class: "col-md-12 hero-text-container text-center",
            style: { position: "relative", zIndex: 2 },
          },
          [
            hyperapp.h(
              "h1",
              { class: "hero-title" },
              "Discover the Natural World with ShroomDex"
            ),
            hyperapp.h(
              "p",
              { class: "hero-description" },
              "Explore a vast database of fungi species, contribute to citizen science, and climb the ranks on our Leaderboard."
            ),
            hyperapp.h("div", { class: "hero-buttons mt-4" }, [
              state.auth.authed
                ? hyperapp.h(
                    "button",
                    {
                      class: "btn btn-primary",
                      onclick: () => actions.navigate("leaderboard"),
                    },
                    "Leaderboard"
                  )
                : hyperapp.h(
                    "button",
                    {
                      class: "btn btn-primary",
                      onclick: () => actions.navigate("login"),
                    },
                    "Sign Up Now"
                  ),
              hyperapp.h(
                "button",
                {
                  class: "btn btn-secondary ms-2",
                  onclick: () => actions.navigate("detect"),
                },
                "Start Detecting"
              ),
            ]),
          ]
        ),
      ]
    ),
    // Additional content sections
    hyperapp.h("section", { class: "features py-5" }, [
      hyperapp.h("h2", {}, "Be a Part of Our Growing Community"),
      hyperapp.h(
        "p",
        {},
        "Join enthusiasts and experts alike in documenting and identifying species. Every discovery enriches our collective understanding and helps you rise through the ranks."
      ),
      // Features or community highlights could go here
    ]),
    hyperapp.h("section", { class: "updates py-5" }, [
      hyperapp.h("h2", {}, "Stay Informed with Our Latest Updates"),
      hyperapp.h(
        "p",
        {},
        "Check out our Changelog for the latest features and enhancements. Our Blog is also a great resource for news, tutorials, and insights from the world of mycology."
      ),
      // Links to the Changelog and Blog sections
      hyperapp.h("div", { class: "update-links mt-4" }, [
        hyperapp.h(
          "button",
          {
            class: "btn btn-primary",
            onclick: () => actions.navigate("changelog"),
          },
          "View Changelog"
        ),
        hyperapp.h(
          "button",
          {
            class: "btn btn-secondary ms-2",
            onclick: () => actions.navigate("blog"),
          },
          "Read Our Blog"
        ),
      ]),
    ]),
    // ... more sections as needed ...
  ]);
};

export default HomeView;
