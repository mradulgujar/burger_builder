import React, { Component } from "react";

import Aux from '../Auxx/Auxx';
import Modal from '../../components/UI/Modal/Modal';


const withErrorHandler = (WrapperdComponent, axios) => {

    return class extends Component {
        state = {
            error: null
        }
        componentWillMount() {
            this.reqInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            })
            this.resInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }
        render() {
            return (
                <Aux>
                    <Modal show={this.state.error}
                        modalClose={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrapperdComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;