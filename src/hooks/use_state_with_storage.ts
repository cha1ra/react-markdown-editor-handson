import { useState } from 'react'

// カスタムフックは use~ で始める慣例がある
// (init: string, key: string) 引数部分
// [string, (s: string) => void] 戻り値の型定義
export const useStateWithStorage = (init: string, key: string): [string, (s: string) => void] => {
    const [value, setValue] = useState<string>(localStorage.getItem(key) || init)

    const setValueWithStorage = (nextValue: string): void => {
        setValue(nextValue)
        localStorage.setItem(key, nextValue)
    }

    return [value, setValueWithStorage]
}
