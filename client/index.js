import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './main-component';
import store from './store';
import {Provider} from 'react-redux';
import { Sparklines, SparklinesBars } from 'react-sparklines';
import { Shake, ShakeLittle, ShakeHorizontal, ShakeRotate } from 'reshake'

const MyShake = () => (
  <Shake h={10} v={0} r={3}>
    Brrr...
  </Shake>
)
document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(<Provider store={store}>
	<div className="centered">
		<ShakeLittle>
		      <h2>This is my animation page...</h2>
        </ShakeLittle>
        <ShakeHorizontal>
              <span>✋</span>
        </ShakeHorizontal>
		<ShakeRotate>
		<div className="graph">
			<Sparklines data={[2, 8, 16, 32]}>
  			<SparklinesBars />
			</Sparklines>
		</div>
		</ShakeRotate>
	</div>
	</Provider>, document.getElementById('app'))
);
