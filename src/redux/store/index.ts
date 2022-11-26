//arquivo de estado global da aplicacao
import { combineReducers, configureStore, createSlice, PreloadedState, SliceCaseReducers, StateFromReducersMapObject } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { productApi } from '../../services/products';
import { ICart, IProduct } from '../../types';

const cart = createSlice<ICart[], SliceCaseReducers<ICart[]>, "cart">({
    name: "cart",
    initialState: [],
    reducers: {
        addItem: (state: ICart[], action) => {
            const itemExist = state.find(
                (cart: ICart) => cart.product.id === action.payload.product.id
            );

            itemExist ? itemExist.quantity++ : state.push({ ...action.payload, quantity: 1 });
        },
        incrementItem: (state: ICart[], action) => {
            const item = state.find(
                (cart) => cart.product.id === action.payload
            );
            item ? item.quantity++ : null;
        },
        decrementItem: (state: ICart[], action) => {
            const item = state.find(
                (cart) => cart.product.id === action.payload
            );
            if (item) {
                if (item.quantity === 1) {
                    const index = state.findIndex(
                        (cart) => cart.product.id === action.payload
                    )

                    state.splice(index, 1);
                } else {
                    item.quantity--;
                }
            }
        },
        removeItem: (state: ICart[], action) => {

            const index = state.findIndex(
                (cart) => cart.product.id === action.payload
            )
            state.splice(index, 1);
        },
    },
});

export const cartReducer = cart.reducer;

export const {
    addItem,
    decrementItem,
    incrementItem,
    removeItem
} = cart.actions;

export const rootReducer = combineReducers({
    [productApi.reducerPath]: productApi.reducer,
    cart: cartReducer
})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
        preloadedState
    })
}

type ReducersMapObject = typeof cartReducer;

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];

setupListeners(setupStore().dispatch);