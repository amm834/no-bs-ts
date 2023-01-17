type MyGenericType<TData> = {
    data: TData;
}

type Example1 = MyGenericType<{
    name: string;
}>
