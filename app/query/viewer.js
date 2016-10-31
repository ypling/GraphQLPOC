/**
 * Created by ypling on 10/25/16.
 */

import User from '../schema/User';
export default function() {
    return new User({_id:'me'});
}