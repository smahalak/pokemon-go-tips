import beginner from "./img/beginner.jpg";
import intermediate from "./img/intermediate.jpg";
import expert from "./img/expert.jpg";
import beginner2 from "./img/beginner2.jpg";
import intermediate2 from "./img/intermediate2.jpg";
import expert2 from "./img/expert2.jpg";

export const TipsData = () => {
  return [
    {
      title: "Beginner",
      mainImg: beginner,
      secondaryImg: beginner2,
      url: "/tips/beginner",
      tips: [
        {
          title: "Reduced Pokémon load time",
          description:
            "Go into setting and turn Niantic AR off. After click a pokemon click AR in the top right. This will now reduce load times for future pokemon.",
        },
        {
          title: "Shiny checking",
          description:
            "You can find out what pokemon you have already checked by seeing which pokemon are standing in your trainer's direction.",
        },
        {
          title: "Reduced gift load time",
          description:
            "When opening a gift from a friend after clicking open, immmediately press the X button below.",
        },
      ],
    },
    {
      title: "Intermediate",
      mainImg: intermediate,
      url: "/tips/intermediate",
      secondaryImg: intermediate2,
      tips: [
        {
          title: "Add friends",
          description:
            "If you need more friends to send gifts you can head to https://www.pokemongofriendcodes.com/ to enter your trainder ID. You can submit your ID every 24 hours.",
        },
        {
          title: "Mass transfer",
          description:
            "Select search and type age0&!3*&!4*&!shiny this will return all of the pokemon you have caught within the last 24 hours that are not 3 star, 4 star, or shiny. Long press on any pokemon and then click select all at the top right.",
        },
        {
          title: "Battling Giovanni",
          description:
            "After using a super rocket rader Giovanni will appear in the next rocket balloon so hold off on search pokestops.",
        },
      ],
    },
    {
      title: "Expert",
      mainImg: expert,
      url: "/tips/expert",
      secondaryImg: expert2,
      tips: [
        {
          title: "Quick Catch Technique",
          description:
            "Put one finger on the berry tray to enlarge the berry icon. With the other finger throw the pokeball. Once the ball hits the pokemon let go and click the run icon.",
        },
        {
          title: "Bonus Candy",
          description:
            "You will get one bonus regular candy when you have a mega pokemon evolved and catch a pokemon that shares the same type of that mega evolution.",
        },
        {
          title: "Auto Catch Pokemon",
          description:
            "You can buy an autocatching device like the go plus, pokeball plus, go-tcha, and egg catchmon. It will use the red pokeballs in your inventory to catch pokemon. ",
        },
      ],
    },
  ];
};
