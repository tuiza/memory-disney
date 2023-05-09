import { PRINCESS, VILLAINS } from "../Characters"

export type ImagesCards = {
    princess: keyof typeof PRINCESS | keyof typeof VILLAINS
    selected: boolean
    visible: boolean
}[]