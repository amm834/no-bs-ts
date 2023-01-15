import RecordType = Deno.RecordType;

interface Database<T, K> {
    get(id: K): T;

    set(id: K, data: string): void;
}

type TKeyType = string | number | symbol;

interface Persistable<T, K extends TKeyType> extends Database<T, K> {
    saveAsString(data: T): string;


    restoreFromString(data: T): string;
}

class InMemoryDatabase<T, K extends TKeyType> implements Database<T, K> {

    protected db: Record<K, T> = {} as Record<K, T>;

    get(id: K): T {
        return this.db[id];
    }

    set(id: K, data: string): void {
        this.db[id] = data as unknown as T;
    }

}

class PersistableDatabase<T, K extends TKeyType> extends InMemoryDatabase<T, K> implements Persistable<T, K> {
    restoreFromString(): string {
        return JSON.parse(this.db as unknown as string);
    }

    saveAsString(data: T): string {
        this.db = JSON.stringify(data) as unknown as Record<K, T>;
        return this.db as unknown as string;
    }
}


const db = new InMemoryDatabase<string, string>();
db.set("foo", "bar");
console.log(db.get("foo"));

const pdb = new PersistableDatabase();
pdb.set("foo", "bar");
console.log(pdb.get("foo"));
const saved = pdb.saveAsString({name: "mg mg"} as unknown as string);
console.log(saved);
const restored = pdb.restoreFromString();
console.log(restored);


const db2 = new InMemoryDatabase<number, number>();
db2.set(1, "bar2");
console.log(db2.get(1));