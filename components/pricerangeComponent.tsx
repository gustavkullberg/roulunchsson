import React from "react"
import { CheckBox } from "./checkbox"
import { TitleComponent } from "./title"
export const PricerangeComponent = ({ config, setConfig }: any) => {
    return <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <TitleComponent content="Pricerange" emoji='&#128184;' />
        <div style={{ display: "flex", flexDirection: "column" }}>
            <CheckBox name="hasLuxuryPricerange" content="Today it`s a party &#129395; (150+)" config={config} setConfig={setConfig} />
            <CheckBox name="hasMediumPricerange" content="Just another day &#128526; (100-150)" config={config} setConfig={setConfig} />
            <CheckBox name="hasPoorPricerange" content="Just give me something &#128021; (100-)" config={config} setConfig={setConfig} />
        </div>
    </div>
}