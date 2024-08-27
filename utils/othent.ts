import { Othent } from '@othent/kms';

export const othent = typeof window === "undefined" ? null : new Othent({
  appInfo: {
    name: "othent.io",
    version: "1.0.0",
    env: "",
  },
  persistLocalStorage: true,
});

if (typeof window !== "undefined") {
  othent.startTabSynching();
}
