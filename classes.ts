import RecordType = Deno.RecordType;

interface Database {
    get(id: string): string;

    set(id: string, data: string): void;
}

interface Persistable extends Database {
    saveAsString(data: string): string;

    restroreFromString(data: string): string;
}

class InMemoreyDatabase implements Database {

    protected db: Record<string, string> = {};

    get(id: string): string {
        return this.db[id];
    }

    set(id: string, data: string): void {
        this.db[id] = data;
    }
}


class PersistableDatabase extends InMemoreyDatabase implements Persistable {
    restroreFromString(): string {
        return JSON.parse(this.db as unknown as string);
    }

    saveAsString(data: string): string {
        this.db = JSON.stringify(data) as unknown as Record<string, string>;
        return this.db as unknown as string;
    }
}


const db = new InMemoreyDatabase();
db.set("foo", "bar");
console.log(db.get("foo"));

const pdb = new PersistableDatabase();
pdb.set("foo", "bar");
console.log(pdb.get("foo"));
const saved = pdb.saveAsString({name: "mg mg"} as unknown as string);
console.log(saved);
const restored = pdb.restroreFromString();
console.log(restored);
