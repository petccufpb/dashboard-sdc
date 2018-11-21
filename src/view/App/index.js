import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom';

import './styles.css';
import { PalestrasRoute, HomeRoute, MinicursoRoute } from '../../routes';

const { Header, Sider, Content } = Layout;

class App extends Component {
	static propTypes = {
		history: PropTypes.shape({
			push: PropTypes.func.isRequired,
		}).isRequired,
		location: PropTypes.shape({
			pathname: PropTypes.string.isRequired,
		}).isRequired,
	};

	state = {
    collapsed: false,
    isAuth: true, // TODO: validar usuario logado
  };

	toggle = () => {
		this.setState(ps => ({
			collapsed: !ps.collapsed,
		}));
	};

	handleMenuClick = ({ item, key, keyPath }) => { // eslint-disable-line
		// console.log({ item, key, keyPath });
		this.props.history.push(key);
	};

	render() {
    const selectedItem = this.props.location.pathname;
    if (!this.state.isAuth) {
      return <Redirect to="/login" />;
    }
		return (
			<Layout>
				<Sider trigger={null} collapsible collapsed={this.state.collapsed}>
					<div className="logo" />
					<Menu onClick={this.handleMenuClick} selectedKeys={[selectedItem]} theme="dark" mode="inline" defaultSelectedKeys={['1']}>
						<Menu.Item key="/">
							<Icon type="home" />
							<span>Home</span>
						</Menu.Item>
						<Menu.Item key="/palestras">
							<Icon type="fund" />
							<span>Palestras</span>
						</Menu.Item>
						<Menu.Item key="/minicursos">
							<Icon type="laptop" />
							<span>Minicursos</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ background: '#fff', padding: 0 }}>
						<Icon
							className="trigger"
							type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
							onClick={this.toggle}
						/>
					</Header>
					<Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: '90vh' }}>
						<Switch>
							<Route exact path="/" component={HomeRoute} />
							<Route path="/palestras" component={PalestrasRoute} />
							<Route path="/minicursos" component={MinicursoRoute} />
						</Switch>
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default App;
