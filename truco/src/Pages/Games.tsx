import { Component } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Cookies from 'universal-cookie';
import {connect} from 'react-redux';
import { showGames } from '../actions';
import Cookies from 'universal-cookie'
import { Table,Button  } from 'react-bootstrap';
import moment from 'moment'
import NavBar from '../components/NavBar/NavBar';
import {newGame} from '../api/games/newGame';
import {joinGame} from '../api/games/joinGame';
// const newGame = require('../api/games/newGame');
// const joinGame = require('../api/games/joinGame');
const cookie = new Cookies();
const token = cookie.get('authToken')


class Games extends Component<{ games: any,showGames: any }>{

    componentDidMount(){
        // TODO: Descomentar setInterval
        setInterval(() => this.props.showGames(token), 1000); // Con esto estoy haciendo las peticiones a la api cada X ms
    }

    renderGamesList(){
        console.log('this.props.games => ',this.props)
        return this.props.games.map((game:any) => {
            return (     
                <tr key={game.id} className='tablero'>
                    <td>
                        {`${game.id} createtd: ${moment(game.created_at).format('Do MMMM YYYY, h:mm')}`}
                    </td>
                    <td>
                    <Button variant='primary' key={game.id} onClick={() => 
                    {
                        joinGame(token,game.id).then((res:any) =>{
                            console.log('esta es la res => ',res)
                            window.location.href=`/App/${res.game.id}`
                        }).catch((err:any) => {
                            console.log('error => ',err);
                        })
                    }
                }>Join</Button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return(
            <div>
            <div className='navbar'> 
            <NavBar></NavBar>
            </div>
            <div className="App">
            <div className='tableContainer'>
                <h1>Game List</h1>
                <Table responsive className='Tablero'>
                    <thead className='Tablero'>
                        <tr>
                            <th >ID</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className='Tablero'>
                        {this.renderGamesList()}
                    </tbody>
                </Table>
                </div>
                <Button variant='success' onClick={() => 
                {
                    newGame(token).then((res:any) => {
                        // console.log('ESTA ES LA RES => ',res);
                        window.location.href=`/App/${res.game.id}`;
                    });
                }
                }>New Game</Button>
            </div>
            </div>

        )
    }
}

function mapStateToProps(state:any){
    console.log('mapStateToProps => ',state)
    return{
        games: state.games.games
    }
}

export default connect(mapStateToProps ,{ showGames })(Games);