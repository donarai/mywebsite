# Self Introduction Site

依存なしの静的な自己紹介サイトです。`index.html`、`style.css`、`script.js` だけで動作します。

## ローカル確認

ブラウザで `index.html` を直接開くか、簡易サーバーを使います。

```bash
python3 -m http.server 8000
```

`http://localhost:8000` を開いて確認してください。

## 編集ポイント

- 名前や肩書き: `index.html`
- 自己紹介文: `index.html`
- 色や余白、タイポグラフィ: `style.css`
- アニメーション: `script.js`

## 公開方法

### GitHub Pages

1. GitHub で新しいリポジトリを作る
2. このフォルダのファイルを push する
3. GitHub の `Settings` → `Pages` を開く
4. `Deploy from a branch` を選ぶ
5. Branch を `main`、フォルダを `/root` にして保存する
6. 数分待つと `https://<your-account>.github.io/<repo-name>/` で公開される

### Netlify

1. Netlify にログインする
2. `Add new site` → `Import an existing project` を選ぶ
3. GitHub リポジトリを接続する
4. Build command は空欄、Publish directory は `/` にする
5. Deploy を押す

## 公開前に差し替えるもの

- `Shota Sato` などの仮名
- `hello@example.com` の連絡先
- GitHub / LinkedIn のリンク先
- 実績カードの内容
