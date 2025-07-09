# Contribution Guidelines

Welcome to the **vitexperiments** repository! We're excited to have you contribute to creating an organized (general) React app template reference guide using Vite.

To ensure a smooth contribution process for everyone, please follow these guidelines.

## Getting Started

1. **Fork the Repository:** Start by forking the repository's `"dev"` branch to your GitHub account. This creates your own copy of the project where you can make changes.

2. **Clone Your Fork:** Clone your forked repository to your local machine using Git. This allows you to work on the files locally.
   ```
   git clone https://github.com/yourusername/vitexperiments.git
   ```

3. **Set Upstream Remote:** Add the original repository as an upstream remote to your local clone. This helps you to keep your fork up to date.
   ```
   git remote add upstream https://github.com/weaponsforge/vitexperiments.git
   ```

## Making Changes

1. **Create a New Branch:** Always work on a new branch for your changes. This keeps your contributions organized and separate from the main branch.
   ```
   git checkout -b feat/your-new-feature-name
   ```

2. **Add Your Content:** Make your changes or additions to the project. If you're adding new content, ensure it's placed in the correct directory and follows intuitive naming conventions and React coding best practices and patterns described in the [CODING STYLE](/docs/CODING_STYLE.md).
   - > **INFO:** New coding styles and patterns are also welcome. Feel free to introduce or use new patterns as well, and describe how they will improve the overall DX.

3. **Commit Your Changes:** After making your changes, commit them to your branch. Use clear and concise commit messages to describe your updates.
   ```
   git add .
   git commit -m "Add a brief description of your changes"
   ```

4. **Keep Your Fork Updated:** Regularly sync your fork's `"dev"` branch with the upstream repository to keep it up to date. This reduces potential merge conflicts.
   ```
   git fetch upstream
   git checkout dev
   git merge upstream/dev
   git push origin dev
   ```

## Submitting Contributions

1. **Push Your Changes:** Push your changes to your fork on GitHub.
   ```
   git push origin feat/your-new-feature-name
   ```

2. **Create a Pull Request (PR):** Go to the original **vitexperiments** repository on GitHub and create a new pull request. Base your PR on your feature branch and target the `"dev"` branch of the upstream repository.

3. **Describe Your Contribution:** Provide a clear and detailed description of your pull request. Include the purpose of your changes and any other relevant information.

4. **Review and Collaboration:** Once your PR is submitted, the project maintainers will review your contributions. Be open to feedback and ready to make additional changes if requested.

## Guidelines

1. **Quality:** Ensure your contributions are high quality, with no spelling or grammatical errors.

2. **Relevance:** Content should be relevant to mostly frontend React and TypeScript - coding structure, patterns, naming conventions, optimizations, directory/folder colocation structures and conventions, and/or usage of notable Node libraries for React frontend development closely following and improving this repository's [CODING STYLE](/docs/CODING_STYLE.md).

3. **Working functionality:** For pull requests involving new features or major updates, ensure the changes are fully functional and optimized. Aim to keep PRs within **`~700` lines of code changes**, breaking them into smaller, self-contained parts when possible. PRs exceeding **`~1000+` lines** may be accepted when justified (e.g., major refactors or foundational features).

4. **Respect:** Respect the structure and formatting of the existing project. Follow the standard ESLint rules defined in its `app/eslint.config.js` file.

Thank you for contributing to the **vitexperiments** repository. Your efforts help make the React development community a more organized and structured space for creating React frontend apps.
