import { TitleComponent } from "./title"
export const DistanceComponent = ({ config, setConfig }: any) => {
    const emoji = "&#127939"
    return <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <TitleComponent content="Distance from Office" emoji='&#127939;' />
        <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
            <input min="1" max="10" type="range" onChange={e => setConfig({ ...config, distance: e.target.value })}></input>
            <p style={{ fontSize: "20px" }}>{config.distance} (km)</p>
        </div>
    </div>
}