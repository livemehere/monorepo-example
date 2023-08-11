interface Props {
    text: string;
    onClick: () => void;
}
export default function Button({text, onClick}: Props){
    return (
        <button onClick={onClick} style={{
            backgroundColor: '#2b2b2b',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        }}>{text}</button>
    )
}
