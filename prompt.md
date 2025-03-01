# 概要
React製のシングルページアプリケーションの環境構築を行ってください。

以下の条件を満たしてください。

- コンポーネントのファイル名は、index.tsxとする
- 同じ階層に、index.stories.tsxという名前でそのコンポーネントのStorybookを作成する
- msw-storybook-addonを使って、storyファイル内でAPI通信をモックする
- 同じ階層に、テストのファイルを作成する
- composeStories を使って、Storybookをテストに流用する
- Storybook側で設定したモックをテスト環境でも有効にする設定を全体の設定のところに書く

# 前提
- TypeScript
- React 最新バージョン
- vite
- vitest
- storybook
- msw
- msw-storybook-addon
- css-modules
