export const CheckBox = ({ name, content, config, setConfig }: any) => {

    return <label>
        <input checked={config[name]} onChange={e => setConfig({ ...config, [name]: e.target.checked })} type="checkbox">
        </input><span style={{ fontSize: "20px" }}>{content}</span>
    </label>
}