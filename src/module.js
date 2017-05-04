import Griddle from './index';

import * as actions from './actions';
import components from './components';
import * as constants from './constants';
import * as selectors from './selectors/dataSelectors';
import settingsComponentObjects from './settingsComponentObjects';
import utils from './utils';

import LocalPlugin from './plugins/local';
import PositionPlugin from './plugins/position';

const plugins = {
  LocalPlugin,
  PositionPlugin,
};

const ColumnDefinition = components.ColumnDefinition;
const RowDefinition = components.RowDefinition;

export default Griddle;
export {
  actions,
  components,
  constants,
  selectors,
  settingsComponentObjects,
  utils,
  plugins,
  ColumnDefinition,
  RowDefinition,
};