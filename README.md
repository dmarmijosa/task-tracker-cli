<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->



## 📋 Task Tracker CLI
This is a CLI project developed in NestJS to manage tasks from the command line.

## 📌 Features
✔ Add tasks

✔ Update tasks

✔ Delete tasks

✔ Mark tasks as:
- 🟡 Pending (`todo`)
- 🔵 In progress (`in-progress`)
- ✅ Completed (`done`)

✔ Save tasks to a JSON file

## 🛠️ Installation and Use

1. Clona el repositorio:

   ```bash
   git clone https://github.com/dmarmijosa/task-tracker-cli.git
   cd task-tracker-cli
   ````
2. Install the dependencies:
    ```
    npm install
    ``` 
3. Compile the project:

    ```
    npm run build
    ``` 
4. Run the available commands:
    
    # add task
    ```
    node dist/main add "new task"
    ```
    # update task
    ```
    node dist/main update 1 "New description"
    ```
    # Delete task
    ```
    node dist/main delete 1
    ```

    # Mark task as in progress
    ```
    node dist/main mark-in-progress 1
    ```

    # Mark task as in done
    ```
    node dist/main mark-done 1
    ```

    # List all tasks
    ```
    node dist/main list
    ```

    # List task by states
    ```
    node dist/main list done
    node dist/main list todo
    node dist/main list in-progress
    ```


## 🌐 Project URL
https://roadmap.sh/projects/task-tracker