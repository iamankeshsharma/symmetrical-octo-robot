# [Ankesh's Writting](https://ankeshwritting.vercel.app/)

A website developed while learning tech concepts and used stack. Intended to share my notes, learnings, articles, papers, readings, etc. So, that i can access it quickly from anywhere.

## Features

- Home page listing all the category of content.
- Each category page lists all the topics published under that.
- Each topic page renders content.

## TechStack

![typescript, nextjs, tailwind](https://skillicons.dev/icons?i=typescript,nextjs,tailwind)

- **Framework:** Next.js 16
- **Frontend:** React 19
- **UI:** Tailwind CSS + shadcn/ui
- **Validation:** Zod
- **Testing:** Vitest + Playwright
- **Tooling:** ESLint, Prettier, Husky
- **Deployment:** Frontend(Vercel), CMS(Render)
- **API:** REST

> ESLint and prettier setup from [@iamankeshsharma/eslint-config](https://www.npmjs.com/package/@iamankeshsharma/eslint-config).

## Installation

1. Clone the repo:

    ```sh
    git clone https://github.com/iamankeshsharma/symmetrical-octo-robot.git
    ```

2. Start CMS

    ```sh
    cd symmetrical-octo-robot/cms
    ```

    ***Provide credentials in `.env` as specified in `.env.example`***

    ```sh
    pnpm install
    pnpm dev
    ```

3. Start frontend:

    ```sh
    cd ../blog
    ```

    ***Provide credentials in `.env` as specified in `.env.example`***

    ```sh
    pnpm install
    pnpm dev
    ```

## Folder structure

```text
\ (Root)
.\github (contains github related configuration like: templates, ci, etc)
.\blog (frontend in app router structure)
.\cms (most of the things managed by dashboard)
.\docs (containing all the documentation)
.\README.md (containing all the introductory information.)
```

## Useful links

1. Current Development requirement: [Current_Improvement_requirement](./docs/Current_Improvement_requirement.md)
2. Deployment Link: [ankeshwritting.vercel.app](https://ankeshwritting.vercel.app/)
3. Repo: [iamankeshsharma/symmetrical-octo-robot](https://github.com/iamankeshsharma/symmetrical-octo-robot)
4. Task List: [Project 19](https://github.com/users/iamankeshsharma/projects/19)

## ***Not accepting any kind of opensource contribution for now. Thanks for visiting***
