const Footer = (state, actions) => {
  // Function to load a random mushroom blurb, joke, or fact
  const loadRandomMushroomInfo = () => {
    const mushroomInfo = [
      "Did you know? Mushrooms are more closely related to animals than plants!",
      "Why did the mushroom get invited to the party? Because he's a fungi!",
      "Fact: The largest living organism on Earth is a mushroom mycelium in Oregon.",
      "Did you know? Mushrooms are more closely related to animals than plants!",
      "Why did the mushroom get invited to the party? Because he's a fungi!",
      "Fact: The largest living organism on Earth is a mushroom mycelium in Oregon.",
      "Mushrooms can be found in nearly every habitat on Earth, even in extreme conditions!",
      "Some mushrooms are bioluminescent and can glow in the dark.",
      "The spores of a mushroom are so tiny that they can be carried by the wind across continents.",
      "A single mushroom can release as many as 16 billion spores.",
      "The ancient Egyptians believed that mushrooms were the plant of immortality.",
      "Mushrooms have their own immune system.",
      "Truffles, one of the most expensive mushrooms, are actually a type of fungus that grows underground.",
      "In many cultures, mushrooms are considered a symbol of luck and prosperity.",
      "The Fly Agaric mushroom is commonly associated with fairy tales and is known for its iconic red and white spotted cap.",
      "There are over 10,000 known types of mushrooms, and scientists believe there are many more undiscovered.",
      "The world's most poisonous mushroom, the 'Death Cap,' can be lethal if ingested.",
      "Mushrooms are rich in antioxidants and can boost your immune system.",
      "Some mushrooms have been used for centuries in traditional medicine for their healing properties.",
      "Did you hear about the mushroom who won the talent show? He was a real fun-guy!",
      "The study of mushrooms is called mycology, and mycologists are scientists who specialize in it.",
      "More than 90% of a mushroom is made up of water.",
      "The famous 'Magic Mushroom,' also known as Psilocybe cubensis, contains psychedelic compounds.",
      "Mushrooms can grow incredibly fast, with some species doubling in size every day.",
      "The Portobello mushroom is a popular choice for vegetarian burger patties due to its meaty texture and flavor.",
      "Fungi play a crucial role in breaking down organic matter and recycling nutrients in ecosystems.",
      "The world's oldest mushroom, preserved in amber, is believed to be over 100 million years old.",
      "Mushrooms can be used to create natural dyes for fabrics and art.",
      "In Japan, matsutake mushrooms are highly prized and can sell for hundreds of dollars per kilogram.",
      "Some mushrooms are known for their unique shapes, such as the 'Lion's Mane' mushroom with its shaggy appearance.",
      "There is a variety of mushrooms called 'chanterelles' known for their fruity aroma.",
      "Mushrooms can be used to create natural dyes for fabrics and art.",
      "In Japan, matsutake mushrooms are highly prized and can sell for hundreds of dollars per kilogram.",
      "Some mushrooms are known for their unique shapes, such as the 'Lion's Mane' mushroom with its shaggy appearance.",
      "There is a variety of mushrooms called 'chanterelles' known for their fruity aroma.",
      "Mushrooms can be used to create natural dyes for fabrics and art.",
      // Add more blurbs, jokes, or facts here
    ];
    // Randomly select one piece of information
    return mushroomInfo[Math.floor(Math.random() * mushroomInfo.length)];
  };

  // Get a random mushroom info for the current render
  const randomMushroomInfo = loadRandomMushroomInfo();

  return hyperapp.h("footer", { class: "footer mt-auto py-3 bg-light" }, [
    hyperapp.h("div", { class: "container" }, [
      hyperapp.h("div", { class: "d-flex justify-content-between" }, [
        // Left side: copyright, project name, and social links inline
        hyperapp.h("div", { class: "d-flex align-items-center" }, [
          hyperapp.h(
            "span",
            { class: "text-muted" },
            "© 2024 ShroomDex Project "
          ),
          hyperapp.h(
            "a",
            {
              href: "https://github.com/shroomdex",
              class: "text-muted me-2 ms-2",
            },
            "GitHub"
          ),
          hyperapp.h(
            "a",
            { href: "https://instagram.com/shroomdex", class: "text-muted" },
            "Instagram"
          ),
        ]),
        // Right side: random mushroom blurb, joke, or fact
        hyperapp.h("div", {}, [
          hyperapp.h("span", { class: "text-muted" }, randomMushroomInfo),
        ]),
      ]),
    ]),
  ]);
};

export default Footer;
