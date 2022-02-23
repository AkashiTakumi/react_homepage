# react_homepage
昔vueで作ったページをreact+dockerで再開発するプロジェクト

# Dockerでreactプロジェクトを作成する方法
## dockerコンテナの作成
### Dockerfileとdocker-compose.ymlの記述
- Dockerfileの作成
    - DockerfileとはDockerで作成するコンテナイメージを管理するためのファイル
        - コンテナの仕様をファイル形式で残すことが可能 -> gitで管理をすることが可能ということ
        - コンテナのデフォルトの起動コマンドとかを記述したりすることが可能らしい
    - 書き方の例

    ```
    FROM node:14.13.1
    WORKDIR /usr/src/app/
    ```
    - FROMはもとになるコンテナを指定する
        - httpとかnodeとか
        - これでnodeのイメージをdockerHubから取得してきている
        - pullしてくるイメージの探し方は「 https://hub.docker.com/ 」にアクセスして，検索をする
        - イメージ名：タグ名
    - WOEKDIRは作業するディレクトリの宣言を行う
        - コンテナ内ののどこで作業をするねんってこと
    - RUNはコンテナをビルドするときにコンテナ内でコマンドを実行してくれるようになる
        - 例えば「RUN yum -y install httpsd」ってすると，apacheがインストールされたコンテナが出来上がるよってこと
    - COPYはローカルにあるファイルを，イメージ上にコピーすること
        - 「COPY [ファイル名] [コピー先ディレクトリ]」
- docker-compose.ymlの作成
    - 同じ階層に作る
    - ymlファイルをとは設定ファイルのこと
    - version: はファイルフォーマットのバージョン．とりあえず3で間違いなさそう．
    - build: はDockerfileの相対的な場所を書く
        - 基本的に同じ階層に作って， . にすればいい
    - services: より下にネストさせてコンテナの設定を一つ以上記述する
        - node: やhttpsd: などは各サービスの名前を定義する
- 最後に以下のコマンドを実行することで，コンテナが作成される
```
docker-compose build
```

### コンテナの起動
- docker-compose run コマンドで起動，実行する
    - docker-compose run --rm node sh -c "npm install -g create-react-app && create-react-app reactapp"
- 二回目以降は「docker-compose up」で起動する