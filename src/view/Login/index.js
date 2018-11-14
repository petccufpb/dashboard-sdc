import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, Icon, Input, Button } from 'antd';

import './styles.css';
import { logo } from '../../assets/index';

const FormItem = Form.Item;

class Login extends Component {
	static propTypes = {
		form: PropTypes.object.isRequired,
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values); // eslint-disable-line
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Row className="container" type="flex" align="middle" justify="center">
				<Col xs={16} sm={12} md={8}>
					<Row type="flex" align="middle" justify="center">
						<Col style={{ paddingBottom: 32 }}>
							<img alt="logo" className="card-image" src={logo} />
						</Col>
					</Row>
					<Form onSubmit={this.handleSubmit} className="login-form">
						<FormItem>
							{getFieldDecorator('email', {
								rules: [{ required: true, message: 'Campo obrigatório' }],
							})(
								<Input
									prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
									placeholder="E-mail"
								/>
							)}
						</FormItem>
						<FormItem>
							{getFieldDecorator('password', {
								rules: [{ required: true, message: 'Campo obrigatório' }],
							})(
								<Input
									prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
									type="password"
									placeholder="Senha"
								/>
							)}
						</FormItem>
						<FormItem>
							<Button block type="primary" htmlType="submit" className="login-form-button">
								Entrar
							</Button>
						</FormItem>
					</Form>
				</Col>
			</Row>
		);
	}
}

const WrappedLogin = Form.create()(Login);

export default WrappedLogin;
