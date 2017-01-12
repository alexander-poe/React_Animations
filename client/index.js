import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './main-component';
import store from './store';
import {Provider} from 'react-redux';
import { Sparklines, SparklinesBars } from 'react-sparklines';
import { Shake, ShakeLittle, ShakeHorizontal, ShakeRotate } from 'reshake'
import TodoModule from './todo/todomodule';
import Animadiv from './reactMotion/reactmotion';

document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(<Provider store={store}>
	<div className="centered">
		<Animadiv/>
	</div>
	</Provider>, document.getElementById('app'))
);
