import React, {Component} from 'react'
import Fizzbuzz, {fizzbuzzFunc} from '../fizzbuzz/fizzbuzz'
import {connect} from 'react-redux'
import {getSecretMessage, getNumbers, getIsConnectedToRedux} from '../../store/selectors/root-selector'
import AddFizzbuzzNum from '../addFizzbuzzNum/AddFizzbuzzNum'
import {ADD_NUM} from '../../store/actions/root-action'

export class App extends Component {
	render() {
		return (
			<div className='App' style={{backgroundColor: '#F5F5F5'}}>
				<header className='App-header'>
					<h1>Yay, React!</h1>
					<h2>{this.props.isConnectedToRedux ? 'Yay, Redux!' : 'Oh no, where\'s Redux!'}</h2>
					<AddFizzbuzzNum addNum={this.props.addNum}/>
					{this.props.numbersFromStore.map(number => fizzbuzzFunc(number))}
					<Fizzbuzz num={100}/>
					{this.props.secretMessage ? <p>{this.props.secretMessage}</p> : null}
				</header>
			</div>
		)
	}
}

export const mapStateToProps = (state, props) => ({
	isConnectedToRedux: getIsConnectedToRedux(state),
	secretMessage: getSecretMessage(state),
	numbersFromStore: getNumbers(state),
	...props
})

export const mapDispatchToProps = (dispatch, props) => ({
	addNum: num => dispatch(ADD_NUM(num)),
	...props
})

export default connect(mapStateToProps, mapDispatchToProps)(App)