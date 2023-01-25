# CompanyDataOrganization for Dev

開発者用のドキュメントです。
環境構築の方法や各種TIPSを残していきます。

## startup

```bash
git clone https://github.com/RyoIto-jp/pywebview-flask-react-nuitka.git
cd .\pywebview-flask-react-nuitka\
code .
```

```shell
yarn install
python -m venv myvenv
myvenv/scripts/activate
pip install -r requirements.txt
```

## dev and buld

frontend dev
```bash
# start server
yarn start

# build
yarn build
```

backend dev
```bash
# start app
yarn gui

# build
yarn compile
```

## Python exe generation

```shell
yarn compile
```

> nuitka serverapp.py --standalone --onefile --follow-imports --include-data-dir=gui=gui --output-dir=dist --windows-icon-from-ico=public/favicon.ico --windows-disable-console

