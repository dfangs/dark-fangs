# Dark Fangs Theme

## Overview
Based on the [Github Theme](https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme) (dark) for most of the color palette, with small adjustments to the search/selection highlight, etc.

Syntax highlighting is heavily self-customized, with reference to the Github themes, [One Dark Pro Monokai Darker](https://marketplace.visualstudio.com/items?itemName=eserozvataf.one-dark-pro-monokai-darker), and the default VS Code [Dark+](https://github.com/microsoft/vscode/blob/main/extensions/theme-defaults/themes/dark_plus.json) theme.

## Usage
Enable semantic highlighting for the best experience.
- Python: Install [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) extension.
- Go: Install [Go](https://marketplace.visualstudio.com/items?itemName=golang.Go) extension, then set the following in `settings.json`:
  ```
  "gopls": {
      "ui.semanticTokens": true
  },
  ```

Mostly tested in Python, Markdown, JSON, etc.
