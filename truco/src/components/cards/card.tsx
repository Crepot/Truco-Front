import classNames from 'classnames';

import '../../css/Tablero.css';

interface CardsProps {
    value:any;
    turn:number
    onClick: Function;
    visible:boolean
}

const Cartas = (props:CardsProps): JSX.Element => {
    // TODO: Lógica de las cartas
    const handleCklick = () => {
        (props.turn !== null && props.value === 0) && props.onClick();
    };

    let cardClass = props.visible ? classNames({
    }) : 'invisible';
    console.log('props.value => ',props.value);
    return (
        <div className={cardClass} onClick={ () => handleCklick() }>
            {/* <img src={'../../img/back.png'} alt='Carta'  /> */}
            <img src="../../img/back.png" alt='Carta'  />
        </div>
    );

}

export default Cartas;