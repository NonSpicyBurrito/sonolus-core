import { Text } from '../../texts'

export type SearchOption =
    | SearchTextOption
    | SearchSliderOption
    | SearchToggleOption
    | SearchSelectOption

export type SearchTextOption = {
    query: string
    name: Text | (string & {})
    type: 'text'
    placeholder: Text | (string & {})
}

export type SearchSliderOption = {
    query: string
    name: Text | (string & {})
    type: 'slider'
    def: number
    min: number
    max: number
    step: number
    unit?: Text | (string & {})
}

export type SearchToggleOption = {
    query: string
    name: Text | (string & {})
    type: 'toggle'
    def: 0 | 1
}

export type SearchSelectOption = {
    query: string
    name: Text | (string & {})
    type: 'select'
    def: number
    values: (Text | (string & {}))[]
}
