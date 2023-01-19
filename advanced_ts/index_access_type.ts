interface ColorVariant {
  primary: "green";
  secondary: "blue";
  accent: "red";
}

type PrimaryColor = ColorVariant["primary"]; // "green"

type NonPrimaryColor = ColorVariant["secondary" | "accent"];

type EveryColor = ColorVariant[keyof ColorVariant]; // "green" | "blue" | "red"

export type Letters = ["a" | "b" | "c"];

type Letter = Letters[number];

interface UserConfig {
  users: ["view", "create", "update"];
  admin: ["view", "create", "update", "delete"];
}

type Role = UserConfig[keyof UserConfig][number];
