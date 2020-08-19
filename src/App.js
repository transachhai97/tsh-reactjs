import React from 'react';
import PropTypes from 'prop-types';

import images from '@/helpers/images';
import Counter from '@/features/counter/Counter';
import styles from '@/App.scss';

function App(props) {
    const { name } = props;

    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <img src={images.logo} className={styles.logo} alt="logo" />
                <Counter />
                <p>
                    Edit
                    {' '}
                    <code>src/App.js</code>
                    {' '}
                    and save to reload.
                </p>
                <span>
                    <span>Learn </span>
                    <a
                        className={styles.link}
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React
                    </a>
                    <span>, </span>
                    <a
                        className={styles.link}
                        href="https://redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Redux
                    </a>
                    <span>, </span>
                    <a
                        className={styles.link}
                        href="https://redux-toolkit.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Redux Toolkit
                    </a>
                    ,
                    <span> and </span>
                    <a
                        className={styles.link}
                        href="https://react-redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React Redux
                    </a>
                </span>
                <h1>{name}</h1>
            </header>
        </div>
    );
}

App.propTypes = {
    name: PropTypes.string,
};

App.defaultProps = {
    name: 'Hai',
};

export default App;
