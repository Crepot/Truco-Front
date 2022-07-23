
import Cartas  from '../cards/card';

// import '../../css/Board.css'

interface BoardProps {
    value:any;
    key:any;
    onClick: Function;
    turn:any;
    visible:boolean;
    src:string;
}

const Board = (props:BoardProps) => {

    const createCards  = (values: any[]) => (
        values.map(v => (
            <Cartas
                value={''} //TODO: EL VALUE ESTÁ ROMPIENDO ALGO
                key={`carta-${v}`} 
                onClick={() => props.onClick(v)} 
                turn={1} 
                visible={true}
                />
        ))
    );
    
    return ( 

        <div>
            <div className="Cartas-plyer">{createCards([0,1,2])}</div>
            <div className="Cartas-plyer2">{createCards([0,1,2])}</div>
            <div className="Mazo-mano">{createCards([0])}</div>
            <div className="Mazo">{createCards([])}</div>
            <div className="Cartas-jugadas">{createCards([])}</div>
            <div className="Cartas-jugadas2">{createCards([])}</div>
        </div>
    );
}


export default Board;