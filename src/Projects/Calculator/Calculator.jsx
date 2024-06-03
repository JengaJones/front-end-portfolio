import React from 'react';
import { Link } from 'react-router-dom';
import './Calculator.css';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: '0'
        };
    }

    handleButtonClick = (action) => {
        const { display } = this.state;
        if (action === 'clear') {
            this.setState({ display: '0' });
        } else if (action === 'backspace') {
            this.setState({ display: display.slice(0, -1) || '0' });
        } else if (action === 'calculate') {
            try {
                this.setState({ display: eval(display).toString() });
            } catch (error) {
                this.setState({ display: 'ERROR' });
            }
        } else if (action === 'parenthesis') {
            this.setState({ display: display === '0' || display === 'ERROR' ? '(' : display + '(' });
        } else if (action === 'percentage') {
            this.setState({ display: (eval(display) / 100).toString() });
        } else {
            this.setState({ display: display === '0' || display === 'ERROR' ? action : display + action });
        }
    };

    render() {
        const { display } = this.state;
        return (
            <div className="calculator-background">
                <div className="calculator-container">
                    <Link to="/" className="home-link">Home</Link>
                    <div className="calculator">
                        <div id="calculator-display" className="calculator-display">{display}</div>
                        <div className="calculator-keys">
                            {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '(', 'percentage', '+', 'clear', 'backspace', 'calculate'].map((key) => (
                                <button
                                    key={key}
                                    onClick={() => this.handleButtonClick(key)}
                                    data-number={key.match(/[0-9.]/) ? key : undefined}
                                    data-operator={!key.match(/[0-9.]/) ? key : undefined}
                                    className={key.match(/clear|backspace|calculate|percentage|\/|\*|\-|\+/) ? 'operator' : ''}
                                >
                                    {key === 'clear' ? 'C' : key === 'backspace' ? '⌫' : key === 'calculate' ? '=' : key === 'percentage' ? '%' : key}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;
