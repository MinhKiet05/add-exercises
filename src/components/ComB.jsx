import { useCount } from '../context/CountContext.jsx';

export default function ComB() {
    const {
        state: { count },
        dispatch,
    } = useCount();

    return (
        <div className="small-card">
            <h2>Com B</h2>
            <div className="action-group">
                <button type="button" onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}>
                    +5
                </button>
                <button type="button" onClick={() => dispatch({ type: 'DECREMENT', payload: 5 })}>
                    -5
                </button>
            </div>
        </div>
    );
}