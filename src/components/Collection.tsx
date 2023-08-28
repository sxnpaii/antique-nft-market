
// utils
import { slug } from "../utils/utils";
// routes
import { marketplace } from "../utils/routes";
// styles
import "../styles/components-style/Collection.scss";
// types
import { Collections } from "../utils/types";

const Collection = ({ collections }: { collections: Collections }) => {
  return (
    <div class="Collection">
      <img src={collections.images[0]} alt={collections.collection_name} />
      <h6>{collections.collection_name}</h6>
      <a href={marketplace.collections + slug(collections.collection_name)}>
        View Collection
      </a>
    </div>
  )
}

export default Collection



