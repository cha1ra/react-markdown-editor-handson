import Dexie from "dexie";

// IndexedDB に保存するデータの型を定義
export interface MemoRecord {
    datetime: string
    title: string
    text: string
}

const database = new Dexie('markdown-editor')
// version ... バージョン指定
// stores ... 使用するテーブルとインデックスとなるデータ名を指定
database.version(1).stores({memos: '&datetime'})
// <MemoRecord, string> ... <データの型, キーとなるデータ(datetime)の型>
const memos: Dexie.Table<MemoRecord, string> = database.table('memos')


export const putMemo = async (title: string, text: string): Promise<void> => {
    const datetime = new Date().toISOString()
    await memos.put({datetime, title, text})
}
