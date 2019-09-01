import Lodable from 'react-loadable'

export default Lodable({
    loader: () => import('./index'),
    loading: () => null
})