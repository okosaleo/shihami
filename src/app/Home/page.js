import Wallets from "./Wallets";
import Hello from "./Hello";
import Collections from "./Collections";
import Trending from "./Trending";
import Auctions from "./Auctions"
import Joined from "./Joined";
import NFT from "./NFT";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function page() {
  return (
    <div>
    <NavBar />
    <Hello />
    <Wallets />
    <Collections />
    <Trending />
    <Auctions />
    <Joined />
    <NFT />
    <Footer />
    </div>
  )
}
