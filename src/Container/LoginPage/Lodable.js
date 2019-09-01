import Lodable from 'react-loadable'
import Loader from 'Components/Loader'
export default Lodable({
    loader: () => import('./index'),
    loading: Loader
})