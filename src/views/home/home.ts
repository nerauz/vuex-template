import { Component, Vue } from 'vue-property-decorator';
import WithRender from './home.html';

import HelloWorld from '@/components/hello_world/hello_world';

@WithRender
@Component({
	components: {
		HelloWorld,
	},
})
export default class Home extends Vue { }
