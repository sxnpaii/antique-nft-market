
// routes
import { marketplace, mainRoutes } from "../utils/routes";
// styles
import "../styles/components-style/Footer.scss";


const Footer = () => {
    return (
        <footer>
            <div class="info">
                <h2>Antique NFT</h2>
                <p>
                    Euismod mi id posuere ac in in nisl sed augue. Posuere ac in in nisl
                    sed augue trices eget pretium sit.
                </p>
            </div>
            <div class="menu">
                <ul>
                    <h6>Marketplace</h6>
                    <li><a href={marketplace.nfts}>NFTs</a></li>
                    <li><a href={marketplace.collections}>Collections</a></li>
                </ul>
                <ul>
                    <h6>Resources</h6>
                    <li><a href={mainRoutes.blog}>Blog</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer

