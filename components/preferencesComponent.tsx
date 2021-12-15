import React from "react"
import { CheckBox } from "./checkbox"
import { TitleComponent } from "./title"

export const PreferencesComponent = ({ config, setConfig }: any) => {
    return <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <TitleComponent content="Preferences" emoji='🍽️' />
        <div style={{ display: "flex", flexDirection: "column" }}>
            <CheckBox name="hasBurger" content="Burgers &#127828; " config={config} setConfig={setConfig} />
            <CheckBox name="hasSushi" content="Sushi &#127843;" config={config} setConfig={setConfig} />
            <CheckBox name="hasMeat" content="Meat &#127830;" config={config} setConfig={setConfig} />
            <CheckBox name="hasFish" content="Fish &#128031;" config={config} setConfig={setConfig} />
            <CheckBox name="hasPizza" content="Pizza &#127829;" config={config} setConfig={setConfig} />
            <CheckBox name="hasVeg" content="Veg &#127797;" config={config} setConfig={setConfig} />
        </div>
    </div>
}