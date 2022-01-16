# safadometer-cli

This project is inspired on @safadown_bot in Telegram.

## Using on terminal

```bash
npx safadometer-cli  
```

> Supported script argument <lang_argument>: pt en es  
> IF no argument is given, default used is 'en'.

## NPM Package:
https://www.npmjs.com/package/safadometer-cli

# Run project locally:

```bash
npm start
```

# Build project:

```bash
npm run build
```

# Test generated Build:

```bash
npm run build:start
```

# Test Build by cli command:
On terminal:
1. create a symlink with npm link
`sudo npm link`

> PS: If you run `build` command **after** running `link` command, you will need to delete the local symlink and recreate-it.

2. call the cli
`safadometer-cli`


