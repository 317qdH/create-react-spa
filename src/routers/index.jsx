import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import {renderRoutes } from 'react-router-config';

import {routerConfig} from '@routers/router.config';

class Main extends Component {
    render() {
        return (
            <div>
                <div>
                    <Switch>
                    {renderRoutes(routerConfig)}
                        {/* {routerConfig.map((item, index) => {
                            const {path, component, exact} = item;
                            return <Route key={index} path={path} component={component} exact={exact}></Route>;
                        })} */}
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Main