import { useCount } from '../context/CountContext.jsx';

export default function ComA() {
    const {
        state: { count },
        dispatch,
    } = useCount();

    return (
        <div className="small-card">
            <h2>Com A</h2>
            <div className="action-group">
                <button type="button" onClick={() => dispatch({ type: 'INCREMENT', payload: 1 })}>
                    +1
                </button>
                <button type="button" onClick={() => dispatch({ type: 'DECREMENT', payload: 1 })}>
                    -1
                </button>
            </div>
        </div>
    );
}