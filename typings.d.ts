declare module '@sanity/block-content-to-react';
type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
};

interface Post extends Base {
    author: Author;
    body: Block[];
    categories: Category[];
    mainImage: Image;
    slug: Slug;
    title: string;
    description: string;
    videoLink: string;
};


interface Author extends Base {
    bio: Block[];
    image: Image;
    name: string;
    slug: Slug;
};

interface Image {
    _type: "image";
    asset: Reference;
};

interface Reference {
    _ref: string;
    _type: "reference";
};

interface Slug {
    _type: "slug";
    current: string;
};

interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
};

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
};

interface Category extends Base {
    description: string;
    title: string;
};

interface MainImage {
    _type: "image";
    asset: Reference;
};

interface Title {
    _type: "string";
    current: string;
};

type Base2 = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
};

interface Post2 extends Base2 {
    author: Author;
    body: Block[];
    categories: Category[];
    mainImage: Image;
    slug: Slug;
    title: string;
    description: string;
    videoLink: string;
};
interface Author extends Base2 {
    bio: Block[];
    image: Image;
    name: string;
    slug: Slug;
};

interface Image {
    _type: "image";
    asset: Reference;
};

interface Reference {
    _ref: string;
    _type: "reference";
};

interface Slug {
    _type: "slug";
    current: string;
};

interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
};

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
};

interface Category extends Base2 {
    description: string;
    title: string;
};

interface MainImage {
    _type: "image";
    asset: Reference;
};

interface Title {
    _type: "string";
    current: string;
};


