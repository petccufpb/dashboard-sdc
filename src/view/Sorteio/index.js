import React, { Component } from 'react';
import { Row, Col, Button, Modal } from 'antd';

class Sorteio extends Component {
	state = { visible: false };

	showModal = () => {
		this.setState({
			visible: true,
		});
	};

	handleOk = () => {
		this.setState({
			visible: false,
		});
	};

	handleCancel = () => {
		this.setState({
			visible: false,
		});
	};

	render() {
		return (
			<div>
				<Row>
					<Col>
						<h1>Sorteio</h1>
					</Col>
				</Row>
				<Row>
					<Col>
						<Button type="primary" onClick={this.showModal}>
							Sortear
						</Button>
					</Col>
				</Row>
				<Modal
					title={<h1>Parabéns!!</h1>}
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					<h3>Nome: </h3>
					<h3>Email: </h3>
				</Modal>
			</div>
		);
	}
}

export default Sorteio;
