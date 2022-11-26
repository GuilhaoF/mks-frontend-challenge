import { setupStore } from '../../redux/store'
import Home from "../../pages/Home";
import { renderWithProviders } from "../../utils/test-utils";
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';


describe("Product API", () => {
    let store: ToolkitStore;

    beforeAll(() => {
        store = setupStore()
    })
    test("Se esta sendo chamado", async () => {
        renderWithProviders(<Home />, {store})

        expect(store.getState()['productApi'].queries).not.toBeNull()
    })
})