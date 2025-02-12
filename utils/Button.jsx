export default function Button({ title, onConvert }) {
    return <button onClick={onConvert}>{title}</button>;
}
