import React from 'react';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import './ToDoList.css';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentItem: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({ currentItem: event.target.value });
    };

    addItem = () => {
        const { items, currentItem } = this.state;
        if (currentItem.trim()) {
            this.setState({
                items: [...items, { text: currentItem.trim(), completed: false }],
                currentItem: ''
            });
        }
    };

    removeItem = (index) => {
        const { items } = this.state;
        this.setState({
            items: items.filter((item, i) => i !== index)
        });
    };

    toggleItemCompletion = (index) => {
        const { items } = this.state;
        const newItems = items.map((item, i) => {
            if (i === index) {
                return { ...item, completed: !item.completed };
            }
            return item;
        });
        this.setState({ items: newItems });
    };

    render() {
        const { items, currentItem } = this.state;
        return (
            <div className="todo-list-background">
                <div className="todo-list-container">
                    <Link to="/" className="home-link">Home</Link>
                    <div className="todo-list">
                        <div className="todo-list-input">
                            <input
                                type="text"
                                value={currentItem}
                                onChange={this.handleInputChange}
                                placeholder="Enter new item"
                            />
                            <button onClick={this.addItem}>Add</button>
                        </div>
                        <ul className="todo-list-items">
                            {items.map((item, index) => (
                                <li key={index} className={item.completed ? 'completed' : ''}>
                                    <input
                                        type="checkbox"
                                        checked={item.completed}
                                        onChange={() => this.toggleItemCompletion(index)}
                                    />
                                    {item.text}
                                    <button onClick={() => this.removeItem(index)}>
                                        <DeleteIcon style={{ color: 'white' }} />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoList;
