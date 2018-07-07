import san from 'san';
import {router} from 'san-router';
import San from './components/app.san';

router.add({rule: '/', Component: San, target: '#app'});
router.start();
console.log('hello webpack4 and san')
console.log('webpack live reload is working');
