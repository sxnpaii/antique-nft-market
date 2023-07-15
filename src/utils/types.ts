export interface LayoutProps {
    title: string;
    description: string;
}

export interface NftComponentProps {
    nft: {
        alt: string,
        path: string,
        width: number,
        height: number
    }
}

export interface CollectionsComponentProps{
    collections: {
        title: string,
        imgs: string[],
        dimension: number
    }
}