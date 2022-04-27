import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';

const List = ({onClick}) => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setIsLoading(true);
                const result = await fetch(
                    'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'
                );
                const data = await result.json();
                setUsers(data);
            } finally {
                setIsLoading(false);
            }
        };
        fetchUsers().then(r => {
        });

    }, []);

    const handleClick = (event, info) => {
        event.preventDefault();
        setSelectedId(info.id);
        onClick(info);
    };

    return isLoading ? (<div><Spinner animation="border" role="status"/></div>) : (
        <div className="list-group">
            {users.map((o) => (
                <a key={o.id} href="#/" className={`list-group-item ${o.id === selectedId ? 'active' : ''}`}
                   onClick={(event) => handleClick(event, o)}>{o.name}</a>
            ))}
        </div>
    );
};

List.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default List;
