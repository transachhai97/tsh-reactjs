import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
    decrement,
    increment,
    incrementAsync,
    incrementByAmount,
    selectCount,
} from '@/features/counter/slice/counterSlice';

import styles from '@/features/counter/css/Counter.scss';

function Counter(props) {
    const count = useSelector(selectCount);
    const [incrementAmount, setIncrementAmount] = useState('2');

    return (
        <div>
            <div className={styles.row}>
                <button
                    type="button"
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => props.increment()}
                >
                    +
                </button>
                <span className={styles.value}>{count}</span>
                <button
                    type="button"
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => props.decrement()}
                >
                    -
                </button>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button
                    type="button"
                    className={styles.button}
                    onClick={() => props.incrementByAmount(Number(incrementAmount) || 0)}
                >
                    Add Amount
                </button>
                <button
                    type="button"
                    className={styles.asyncButton}
                    onClick={() => props.incrementAsync(Number(incrementAmount) || 0)}
                >
                    Add Async
                </button>
            </div>
        </div>
    );
}

const mapDispatchToProps = {
    increment,
    decrement,
    incrementByAmount,
    incrementAsync,
};

Counter.propTypes = {
    increment: PropTypes.func,
    decrement: PropTypes.func,
    incrementByAmount: PropTypes.func,
    incrementAsync: PropTypes.func,
};

Counter.defaultProps = {
    increment: () => {},
    decrement: () => {},
    incrementByAmount: () => {},
    incrementAsync: () => {},
};

export default connect(null, mapDispatchToProps)(Counter);
