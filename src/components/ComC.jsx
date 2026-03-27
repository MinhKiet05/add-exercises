import { useCount } from '../context/CountContext.jsx';

export default function ComC() {
    const { dispatch } = useCount();

    return (
        <div className="bottom-actions">
            <button
                type="button"
                className="change-button"
                onClick={() => dispatch({ type: 'INCREMENT', payload: 100 })}
            >
                +100
            </button>
            <button
                type="button"
                className="change-button secondary"
                onClick={() => dispatch({ type: 'DECREMENT', payload: 100 })}
            >
                -100
            </button>
        </div>
    );
}