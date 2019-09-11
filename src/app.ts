import { Component, Vue } from 'vue-property-decorator';
import WithRender from './app.html';

import './app.scss';

@WithRender
@Component
export default class App extends Vue { }
