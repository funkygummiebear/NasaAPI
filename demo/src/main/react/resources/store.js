import { create } from 'zustand'
import axios from 'axios';
import nasaNumberImage from "../containers/nasa/NasaNumberImage";

export const useStore = create((set) => ({
    nasaSingleImage: {},
    nasaNumberImage: null,
    nasaMultiImage: {},
    fetchCurrentImage: async () => {
        axios.get(`/singlenasaimage`)
            .then(function (response) {
                set({nasaSingleImage: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    fetchNumberImage: async () => {
        axios.get(`/numbernasaimage?count=${count}`)
            .then(function (response) {
                set({nasaNumberImage: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    fetchMultiImage: async () => {

    }
}))