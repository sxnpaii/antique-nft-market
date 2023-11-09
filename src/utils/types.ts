export interface LayoutProps {
    title: string;
    description: string;
}

export interface Nfts  {
    attributes: string | null
    created_at: string | null
    description: string | null
    id: string
    img_url: string | null
    name: string | null
    path: string | null
    price: number | null
}
export interface Collections {
    artist: string | null
    collection_description: string | null
    collection_name: string | null
    created_at: string | null
    id: string
    images: string[] | null
    path: string | null
    price: number | null
}

export interface Posts {
    author_artist: string | null
    content: string | null
    created_at: string | null
    description: string | null
    id: string
    img_url: string | null
    path: string | null
    tags: string[] | null
    title: string | null
}

export interface Artists {
    avatar: string | null
    collections: string[] | null
    created_at: string
    email: string | null
    full_name: string | null
    id: string
    nfts: string[] | null
    password: string | null
    phone_num: string | null
    posts: string[] | null
    username: string | null
}