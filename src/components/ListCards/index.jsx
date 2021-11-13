import React, { Component, Children } from 'react'
import './ListCards.scoped.scss'

class ListCards extends Component {
	constructor(props) {
		super(props)
		this.state = {
			scrollX: 0
		}
		this.handleLeftArrow = this.handleLeftArrow.bind(this);
		this.handleRightArrow = this.handleRightArrow.bind(this);
		this.scrollFactor = this.props.scrollFactor
	}

	handleLeftArrow() {
		let x = this.state.scrollX + Math.round(window.innerWidth / 2)
		if (x > 0) {
			x = 0
		}
		this.setState({
			scrollX: x
		})
	}

	handleRightArrow() {
		let x = this.state.scrollX - Math.round(window.innerWidth / 2)
		let listW = this.totalItems * this.scrollFactor
		if (window.innerWidth - listW > x) {
			x = window.innerWidth - listW - 60
		}
		this.setState({
			scrollX: x
		})
	}



	render() {
		this.totalItems = Children.count(this.props.children)
		return (
			<div className="listarea" >
				<i className="left material-icons-outlined" onClick={this.handleLeftArrow}>
					navigate_before
				</i>
				<i className="right material-icons-outlined" onClick={this.handleRightArrow}>
					navigate_next
				</i>
				<div className="list" style={{
					marginLeft: this.state.scrollX,
					width: this.totalItems * this.scrollFactor
				}}>
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default ListCards