export const TitleComponent = ({ content, emoji }: any) => {
    return <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "40px" }}>
        <span style={{ fontSize: "80px" }}>{emoji}</span>
        <h3 style={{ fontSize: "2em" }}>{content}</h3>
    </div>
}