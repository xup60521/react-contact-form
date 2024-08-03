# **Frontend Mentor Challenge - Contact form**

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj "https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj").

## Table of contents

-   [Overview](#overview)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
        -   [react-hook-form](#react-hook-form)
        -   [sonner](#sonner)
-   [Resources](#resources)

## Overview

Users should be able to:

-   Complete the form and see a success toast message upon successful submission

-   Receive form validation messages if:

    -   A required field has been missed

    -   The email address is not formatted correctly

-   Complete the form only using their keyboard

-   Have inputs, error messages, and the success message announced on their screen reader

-   View the optimal layout for the interface depending on their device's screen size

-   See hover and focus states for all interactive elements on the page

Links:

-   GitHub Repo: <https://github.com/xup60521/react-contact-form>

-   Website: <https://xup60521.github.io/react-contact-form/>

```bash
# install dependencies
pnpm install
# start vite dev server
pnpm run dev
# build (output path /dist)
pnpm run build
```

## My process

### Built with

-   React (powered by vite)

-   TailwindCSS

-   react-hook-form + @hookform/error-message

-   sonner

### What I learned

#### react-hook-form

To this day, it’s probably the most powerful form building library among the react ecosystem. It’s extremely simple to manage states, validation patterns and errors. If I want to build a form in a react app, I cannot live without it.

Since `react-hook-form` already allows us to access to errors, it’s not necessary to use `@hookform/error-message.`

#### sonner

`sonner` is a toast notification library built for react and it is contained in the `shadcn/ui` UI component set.

You can pass react node directly when calling `toast` function. It also enables us to style our component with `classNames`.

```tsx
import { toast } from "sonner";

toast(
    <div className="flex flex-col gap-2">
        <p className="flex items-center gap-2">
            <img
                alt="form submit success"
                src={FormCompleteIcon}
                className="size-4 scale-90"
            />
            <span className="font-dm text-white font-semibold text-xs">
                Message Sent!
            </span>
        </p>
        <span className="text-c_grey500 font-dm text-xs">
            Thanks for completing the form. We'll be in touch soon!
        </span>
    </div>,
    {
        classNames: {
            toast: "bg-[#2f4143]",
        },
    }
);
```

## Resources

-   TailwindCSS Docs - <https://tailwindcss.com/docs>

-   Google font - <https://fonts.google.com>

-   react-hook-form docs - <https://react-hook-form.com/docs>

-   sonner docs - <https://sonner.emilkowal.ski/getting-started>
