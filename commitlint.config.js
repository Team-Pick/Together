module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 72],
    "body-leading-blank": [2, "always"],
    "body-max-length": [2, "always", 400],
    "footer-leading-blank": [2, "always"],
    "scope-case": [2, "always", ["camel-case"]],
    "scope-empty": [2, "never"],
    "subject-empty": [2, "never"],
    "subject-case": [2, "always", ["lower-case"]],
    "type-enum": [2, "always", ["feat", "fix", "chore", "refactor", "write"]],
  },
};
