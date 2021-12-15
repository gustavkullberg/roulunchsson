import { resturants } from "../assets/resturants"
import { Configuration } from "../pages"
type ResultInput = {
    config: Configuration
}
export const ResultComponent = ({ config }: ResultInput) => {
    const filteredResturants = resturants.filter(r => {
        return (r.distance < config.distance &&
            ((config.hasLuxuryPricerange && r.hasLuxuryPricerange === config.hasLuxuryPricerange) ||
                (config.hasMediumPricerange && r.hasMediumPricerange === config.hasMediumPricerange) ||
                (config.hasPoorPricerange && r.hasPoorPricerange === config.hasPoorPricerange)) &&
            ((config.hasBurger && r.hasBurger === config.hasBurger) ||
                (config.hasFish && r.hasFish === config.hasFish) ||
                (config.hasMeat && r.hasMeat === config.hasMeat) ||
                (config.hasPizza && r.hasPizza === config.hasPizza) ||
                (config.hasSushi && r.hasSushi === config.hasSushi) ||
                (config.hasVeg && r.hasVeg === config.hasVeg)))
            ? true : false
    })

    const numberOfResturants = filteredResturants.length;
    var roll = Math.floor(Math.random() * numberOfResturants);

    return <div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px" }}>
            <h2>Congratulations! </h2>
            <span >🎉🎉🎉</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h2>You have won</h2>
            <h1 style={{ color: "#f60" }}>{filteredResturants[roll].name}</h1>
        </div>
    </div>
}