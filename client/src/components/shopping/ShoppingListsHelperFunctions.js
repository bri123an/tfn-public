'use-strict'

import api from '../../utils/api'
import shoppinglistsarrayobject from './shoppinglistsobject';

export const getAllShoppingLists = () => {
    api.get('https://178d956d-dcb6-4469-9c9f-e27da76a9a36.mock.pstmn.io/api/shopping_lists');
}
