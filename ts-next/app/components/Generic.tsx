import React from 'react';

type TableProps<T> = {
    rows: T[];
    onRowClick: (row: T) => void;
}
const Table = <T, >(props: TableProps<T>) => {
    return null;
}
const Generic = () => {
    return (
        <div>
            <Table
                rows={[
                    {
                        name: "Mg Mg",
                        age: 19,
                        info: "hello world info"
                    }
                ]}
                onRowClick={(row) => {
                    console.log(row.info)
                }}
            />
        </div>
    );
};

export default Generic;