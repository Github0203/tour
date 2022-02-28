import Icon from "awesome-react-icons";

export const datamenu = [
    {
        title: "Home",
        itemId: "/home",
        // Optional
        elemBefore: () => <Icon name="coffee" />
      },
      {
        title: "About",
        itemId: "/about",
        elemBefore: () => <Icon name="user" />,
        subNav: [
          {
            title: "Projects",
            itemId: "/about/projects",
            // Optional
            elemBefore: () => <Icon name="cloud-snow" />
          },
          {
            title: "Members",
            itemId: "/about/members",
            elemBefore: () => <Icon name="coffee" />
          }
        ]
      },
      {
        title: "Another Tab",
        itemId: "/another",
        subNav: [
          {
            title: "Teams",
            itemId: "/another/teams"
            // Optional
            // elemBefore: () => <Icon name="calendar" />
          }
        ]
      }
]