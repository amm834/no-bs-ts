import {PageProps} from "$fresh/src/server/types.ts";


export default function Page(props: PageProps) {
    const {name} = props.params;

    return <div>Hello, {name}</div>
}

