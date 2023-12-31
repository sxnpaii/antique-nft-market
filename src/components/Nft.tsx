// routes
import { marketplace } from "../utils/routes";
// utils
import { slug } from "../utils/utils";
// styles
import "../styles/components-style/Nft.scss";
// types
import { Nfts } from "../utils/types";


const Nft = ({ nft }: { nft: Nfts }) => {
    return (
        <div class="Nft">
            <a href={marketplace.nfts + slug(nft.name)}>
                <img
                    src={nft.img_url}
                    alt={nft.name}
                />
            </a>
            <p>{nft.name}</p>
            <b>{nft.price} Eth</b>
        </div>
    )
}

export default Nft
