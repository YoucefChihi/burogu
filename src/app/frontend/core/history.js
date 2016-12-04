import { Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'
let H = useRouterHistory(createHashHistory)({ queryKey: false })
H.location = window.location;
H.currentLocation = function() {return H.location.hash.substring(2)}
const history = H;
export default history;
