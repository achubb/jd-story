import { Story } from "@storybook/react";
import { Link } from "./Link";
import React from "react";

export default {
    title: 'Atoms/Link',
    component: Link
};

export const Test = () => <Link as="a" href="https://jdsports.co.uk">Linky</Link>